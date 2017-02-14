import React from 'react';

export default class NewQuestion extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.postNewQuestion}>
                <div className="new-question input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={this.props.newQuestionInput}
                        onChange={this.props.newQuestionInputHandler}
                        placeholder="Ask a Question..." />
                    <span className="input-group-btn">
                        <button
                            className="btn btn-default">
                            Submit
                        </button>
                    </span>
                </div>
            </form>
        )
    }
}
