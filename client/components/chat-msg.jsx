import React from 'react';

export default class ChatMsg extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={this.props.panelClass}>
                <div className="panel-heading">
                    <h5 className="user">{this.props.userName}
                    <small className="message-time"> at {this.props.created_at}</small></h5>
                </div>
                <div className="panel-body">
                    {this.props.message}
                </div>
            </div>
        )
    }
}
