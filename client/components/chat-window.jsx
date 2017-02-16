import React from 'react';
import ChatBox from './chat-box.jsx';

export default class ChatWindow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="chat-window">
              <h4>Chat</h4>
              <div className="messages-body">
                <ChatBox
                  userName={this.props.userName}
                  chatMessages={this.props.chatMessages} 
                  chatInput = {this.props.chatInput}
                  chatInputHandler = {this.props.chatInputHandler}
                  postMessage = {this.props.postMessage}
                  selectedQuestionId={this.props.selectedQuestionId} />
              </div>
            </div>
        )
    }
}
