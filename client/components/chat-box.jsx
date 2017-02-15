import React from 'react';
import ChatMsg from './chat-msg.jsx';

export default class ChatBox extends React.Component {
    constructor(props) {
        super(props);
    }

  //   componentDidUpdate() {
  //      $('chat-box').scrollTop($('chat-box').height());
  //  }

    render() {
        let messages = [];
        this.props.chatMessages.forEach((message) => {
            if (this.props.userName === message.userName) {
                messages.push(<ChatMsg
                    panelClass='panel panel-info'
                    userName={message.userName}
                    message={message.message}
                    created_at={message.created_at}/>);
            } else {
                messages.push(<ChatMsg
                    panelClass='panel panel-default'
                    userName={message.userName}
                    message={message.message}
                    created_at={message.created_at}/>);
            }
        })
        let form = '';
        if (this.props.selectedQuestionId) {
            form = (
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
            );
        }
        return (
            <div>
              {messages}
              {form}
            </div>
        )
    }

}
