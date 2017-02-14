import React from 'react';
import { browserHistory } from 'react-router'
import {Link} from 'react-router';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-sm-offset-4 text-center">
                <div className="login-panel panel panel-default">
                  <div className="panel-heading">
                    <h1 className="panel-title">Create an Account</h1>
                  </div>
                  <div className="panel-body">
                    <form name = 'signUp' onSubmit={this.props.handleSignUp}>  
                      <div className="form-group">
                        <input className="form-control" type="text" name='username' placeholder='Create a Username' />
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="password" name='password' placeholder='Create a Password'/>
                      </div>
                      <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
