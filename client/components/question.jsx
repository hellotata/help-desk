import React from 'react';

export default class Question extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <a href="#"
        className={this.props.listGroupClass}
        onClick={this.props.setSelectedQuestionChat.bind(null, this.props.id)}>
        <div className="question-header">
          <h6 className="asker">{this.props.userName} 
          <small className="question-time"> at {this.props.created_at}</small></h6>
        </div>
        <div className="row">
          <div className="col-xs-9">
            <p className="user-question">
              {this.props.question}
            </p>
          </div>
          <div className="col-xs-3">
            <span className="label label-primary">Open</span>
          </div>
        </div>
        
      </a>
    );
  }
}
