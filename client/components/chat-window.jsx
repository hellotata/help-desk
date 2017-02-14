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
                <ChatBox userName={this.props.userName} chatMessages={this.props.chatMessages}/>
              </div>
              <form 
                onSubmit={this.props.postMessage.bind(null, this.props.id)}
                className="input-group">
                <input
                  type='text'
                  className="form-control"
                  placeholder="Write something..."
                  value={this.props.chatInput}
                  onChange={this.props.chatInputHandler} />
                <span className="input-group-btn">
                  <button
                      className="btn btn-default">
                      Submit
                  </button>
                </span>
              </form>
            </div>
        )
    }
}
