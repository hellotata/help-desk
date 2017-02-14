import React from 'react';

export default class ChatMsg extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    {this.props.message}
                </div>
                <div className="panel-footer">
                    <span className="user">{this.props.userName}</span>
                    <span className="message-time"> at {this.props.created_at}</span>
                </div>
            </div>
        )
    }
}
