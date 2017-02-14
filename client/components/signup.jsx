import React from 'react';
import $ from 'jquery';
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
const styles = {
    container: {
        border: '1px #465381 solid',
        borderRadius: '10px',
        fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',  
        padding: '20px',
        color: '#465381',
        paddingTop: '10px',
        left: '50%',
        top: '50%',
        width: '400px',
        position: 'absolute',
        WebkitTransform: 'translate3d(-50%, -50%, 0)',
        MozTransform: 'translate3d(-50%, -50%, 0)',
        transform: 'translate3d(-50%, -50%, 0)'       
    },
    submit: {
        float: 'right',
        backgroundColor: '#920f0f',
        borderRadius:'6px',
        border: '1px solid black',
        display: 'inline-block',
        cursor: 'pointer',
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '15px',
        padding: '6px 24px',
        textDecoration: 'none',
    },
    account: {
        fontFamily: 'Arial',
        fontSize: '15px',
        border: '1px solid #268a16',
        cursor: 'pointer',
        padding: '6px 24px',
        textDecoration: 'none'
    },
    label: {
        display: 'inline-block',
        width:'100px',
        textAlign: 'right'
    }
}