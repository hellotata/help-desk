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
                    <h1 className="panel-title">Sign in</h1>
                  </div>
                  <div className="panel-body">
                    <form name = 'signUp' onSubmit={this.props.handleSignUp}>  
                      <div className="form-group">
                        <input className="form-control" type="text" name = 'username'  />
                      </div>
                      <div className="form-group">
                        <input className="form-control" type ="password" name = 'password'/>
                      </div>
                      <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                    </form>
                  </div>
                </div>
                <Link to='/signup' className="text-right">Need an account? Signup</Link>
              </div>
            </div>
          </div>
        )
    }
}
