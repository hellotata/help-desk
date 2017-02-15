import React from 'react';
import ChatWindow from './chat-window.jsx';
import ImageWindow from './image-window.jsx'
import QuestionsWindow from './questions-window.jsx';
import Header from './main-header.jsx';
import {router} from 'react-router';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.getQuestions();
        this.props.getMessages();
    }
    render() {
        return (
            <div>
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Usizo</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Log Out</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <Header handleLogOut={this.props.handleLogOut}/>
                <div className="row">
                    <div className="col-sm-4">
                        <QuestionsWindow
                            questions={this.props.questions}
                            userName={this.props.userName}
                            postNewQuestion={this.props.postNewQuestion}
                            setSelectedQuestionChat={this.props.setSelectedQuestionChat}
                            newQuestionInputHandler={this.props.newQuestionInputHandler}
                            newQuestionInput={this.props.newQuestionInput}
                        />
                    </div>
                    <div className="col-sm-8">
                        <ImageWindow />
                        <ChatWindow
                            userName={this.props.userName}
                            chatMessages={this.props.chatMessages}
                            id={this.props.selectedQuestionId}
                            chatInputHandler={this.props.chatInputHandler}
                            chatInput={this.props.chatInput}
                            postMessage={this.props.postMessage}
                            selectedQuestionId={this.props.selectedQuestionId}
                        />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
