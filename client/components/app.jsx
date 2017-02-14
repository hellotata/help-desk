import React from 'react';
import Login from './login.jsx';
import Signup from './signup.jsx';
import MainPage from './main-page.jsx';
import $ from 'jquery';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'miketyson001',
      questions: {},
      selectedQuestionId: '',
      selectedQuestionChat: [],
      chatInput: '',
      newQuestionInput: '',
    };
    this.gitHubLogin = this.gitHubLogin.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.setSelectedQuestionChat = this.setSelectedQuestionChat.bind(this);
    this.chatInputHandler = this.chatInputHandler.bind(this);
    this.newQuestionInputHandler = this.newQuestionInputHandler.bind(this);
    this.postMessage = this.postMessage.bind(this);
    this.postNewQuestion = this.postNewQuestion.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleSignUp (event) {
      event.preventDefault();
      var username = document.signUp.username.value
      var password = document.signUp.password.value
      //alert(form.elements[0]['username'].value);
      $.ajax({
        url: '/signup/',
        type: 'POST',
        data: JSON.stringify({username, password}),
        contentType: "application/json; charset=utf-8",
        success: (data) => {
            console.log(data);
            console.log(typeof data);
            if(data.status === 'success') {
              this.setState({userName: data.username})

              browserHistory.push('/main_page');
            }
        }
      });

     };

  handleLogIn (event) {
        event.preventDefault();
        var username = document.logIn.username.value
        var password = document.logIn.password.value
        console.log(username);
        console.log(password);
        $.ajax({
          url: '/login/',
          type: 'POST',
          data: JSON.stringify({username, password}),
          contentType: "application/json; charset=utf-8",
          success: (data) => {
              if(data.status === 'success') {
                this.setState({userName: data.username})

                browserHistory.push('/main_page');
              }
          }
        })

    };

  getQuestions() {
    $.get('/questions', (response) => {
      const newState = { questions: {} };
      response.forEach((question) => {
        newState.questions[question.id] = {
          id: question.id,
          userName: question.asker,
          question: question.question,
          created_at: question.createdAt,
          chatMessages: [],
        }
      })
      this.setState(newState);
    });
  }

  getMessages() {
    $.get('/messages', (res) => {
      const temp = this.state.questions;
      res.forEach((message) => {
        if (temp.hasOwnProperty(message.questionid)) {
          temp[message.questionid].chatMessages.push({
            userName: message.username,
            message: message.message,
            created_at: message.createdAt
          })
        }
      });
      this.setState({
        questions: temp,
        selectedQuestionChat: (this.state.selectedQuestionId ? this.state.questions[this.state.selectedQuestionId].chatMessages : [])
      });
    });
  }
  postMessage(id, e) {
    e.preventDefault();
    $.post('/messages', {
      questionid: id,
      username: this.state.userName,
      message: this.state.chatInput,
    }, (response) => {
      this.getQuestions();
      this.getMessages();
    });
    this.setState({ chatInput: '' })
  }

  newQuestionInputHandler(e) {
    e.preventDefault();
    this.setState({ newQuestionInput: e.target.value });
  }

  chatInputHandler(e) {
    e.preventDefault();
    this.setState({ chatInput: e.target.value });
  }

  setSelectedQuestionChat(id) {
    if (id) {
      this.setState({
        selectedQuestionChat: this.state.questions[id].chatMessages,
        selectedQuestionId: id,
      });
    }
  }

  postNewQuestion(e) {
    e.preventDefault();
    $.post('/questions', {
      asker: this.state.userName,
      question: this.state.newQuestionInput,
    }, (response) => {
      console.log(response);
      this.getQuestions();
    });
    this.setState({ newQuestionInput: '' })
  }
  
  gitHubLogin() {
    $.get('/auth/github', (response) => {
      console.log(response);
      browserHistory.push('/main_page');
    });
  }

  render() {
    return (
      /*<Router history={browserHistory}>
        <Route path="/" component={() => <Login handleLogIn = {this.handleLogIn} />} />
        <Route path="/signup" component={() => <Signup handleSignUp = {this.handleSignUp} />} />
        <Route path="/main_page" component={() => <MainPage
          questions={this.state.questions}
          getQuestions={this.getQuestions}
          getMessages={this.getMessages}
          userName={this.state.userName}
          chatMessages={this.state.selectedQuestionChat}
          setSelectedQuestionChat={this.setSelectedQuestionChat}
          selectedQuestionId={this.state.selectedQuestionId}
          chatInputHandler={this.chatInputHandler}
          chatInput={this.state.chatInput}
          postMessage={this.postMessage}
          postNewQuestion={this.postNewQuestion}
          newQuestionInput={this.newQuestionInput}
          newQuestionInputHandler={this.newQuestionInputHandler}
        />} />
      </Router>*/
      <div>{React.cloneElement(this.props.children, {
        handleLogIn: this.handleLogIn,
        handleSignUp: this.handleSignUp,
        questions: this.state.questions,
          getQuestions: this.getQuestions,
          getMessages: this.getMessages,
          userName: this.state.userName,
          chatMessages: this.state.selectedQuestionChat,
          setSelectedQuestionChat: this.setSelectedQuestionChat,
          selectedQuestionId: this.state.selectedQuestionId,
          chatInputHandler: this.chatInputHandler,
          chatInput: this.state.chatInput,
          postMessage: this.postMessage,
          postNewQuestion: this.postNewQuestion,
          newQuestionInput: this.newQuestionInput,
          newQuestionInputHandler: this.newQuestionInputHandler
        })}</div>
    );
  }
}
