import React from 'react';
import Login from './login.jsx';
import Signup from './signup.jsx';
import MainPage from './main-page.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      userName: '',
      questions: {},
      selectedQuestionId: '',
      selectedQuestionChat: [],
      chatInput: '',
      newQuestionInput: ''
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
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleSignUp (e) {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;
      fetch('/signup/', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: new Headers({
          'Content-Type': 'application/json',
        })
      }).then((res) => {
        return res.json();
      }).then((res) => {
          this.setState({userName: res.username, userId: res.userId })
          browserHistory.push('/main_page');
      })
  }

  handleLogIn (e) {
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.password.value
        fetch('/login/', {
          method: 'POST',
          body: JSON.stringify({username, password}),
          headers: new Headers({
            'Content-Type': 'application/json',
          })
        }).then((res) => {
            return res.json();
        }).then((res) => {
            console.log('login res', res);
            this.setState({
              userName: username,
              userId: res.userId
            }, () => {
              browserHistory.push('/main_page');
            })
        })
    };

  handleLogOut (e) {
    e.preventDefault();
    fetch('/logout', {
      method: 'GET',
    }).then((res) => {
      this.setState({ username: null, userId: null }, () => {
        browserHistory.push('/');
      })
    })
  };

  getQuestions() {
    fetch('/questions', {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then((res) => {
      const newState = { questions: {} };
      res.forEach((question) => {
        newState.questions[question.id] = {
          id: question.id,
          userName: question.user.username,
          question: question.question,
          created_at: question.createdAt,
          chatMessages: [],
        }
      })
      this.setState(newState);
    })
  }

  getMessages() {
    fetch('/messages', {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then((res) => {
      const temp = this.state.questions;
      console.log('TEMP', temp);
      res.forEach((message) => {
        if (temp.hasOwnProperty(message.questionId)) {
          temp[message.questionId].chatMessages.push({
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
    })
  }

  // take out id params
  postMessage(id, event) {
    event.preventDefault();
    fetch('/messages', {
      method: 'POST',
      body: JSON.stringify({
        questionId: this.state.selectedQuestionId,
        userId: this.state.userId,
        username: this.state.userName,
        message: this.state.chatInput
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    }).then(() => {
      this.getQuestions();
      this.getMessages();
    })
    this.setState({ chatInput: '' });
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
      console.log('before', this.state);
      this.setState({
        selectedQuestionChat: this.state.questions[id].chatMessages,
        selectedQuestionId: id,
      }, () => {
        console.log('after, this.state');
      });
    }
  }

  postNewQuestion(e) {
    e.preventDefault();
    fetch('/questions', {
      method: 'POST',
      body: JSON.stringify({
        userId: this.state.userId,
        question: this.state.newQuestionInput
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(() => {
      this.getQuestions();
    })
    this.setState({ newQuestionInput: '' })
  }
  
  gitHubLogin() {
    fetch('/auth/github', {
      method: 'GET',
    }).then(() => {
      browserHistory.push('/main_page');
    })
  }

  render() {
    return (
      <div>{React.cloneElement(this.props.children, {
        handleLogIn: this.handleLogIn,
        handleLogOut: this.handleLogOut,
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
