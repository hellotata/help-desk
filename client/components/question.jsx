import React from 'react';

export default class Question extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="question list-group-item" onClick={this.props.setSelectedQuestionChat.bind(null, this.props.id)}>
        <div className="question-header">
          <h6 className="asker">{this.props.userName} 
          <small className="question-time"> at {this.props.created_at}</small></h6>
        </div>
        <p className="user-question">
          {this.props.question}
        </p>
      </div>
    );
  }
}
