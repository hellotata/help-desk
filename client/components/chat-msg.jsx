import React from 'react';

export default class ChatMsg extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={this.props.panelClass}>
                <div className="panel-heading">
                    <strong className="user">{this.props.userName}</strong>
                    <small className="message-time"> at {this.props.created_at}</small>
                </div>
                <div className="panel-body">
                    {this.props.message}
                </div>
            </div>
        )
    }
}
