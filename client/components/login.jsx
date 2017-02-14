import React from 'react';
import { browserHistory } from 'react-router'
import {Link} from 'react-router';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        //this.githubTest = this.githubTest.bind(this);
    }

    /*githubTest() {
        $.get('auth/github', (response) => {
            $.get(response, (data) => {
                console.log(data);
            })
        })
    }*/

    render() {
        console.log(this.props);
        return (


<div className="container">
    <div className="row">
        <div className="col-sm-4 col-sm-offset-4 text-center">
            <div className="login-panel panel panel-default">
                <div className="panel-heading">
                    <h1 className="panel-title">Sign in</h1>
                </div>
                <div className="panel-body">
                    <form name = 'logIn' onSubmit={this.props.handleLogIn}>     
                        <div className="form-group">
                            <input className="form-control" type="text" name = 'username' placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type ="password" name = 'password' placeholder="Password" />
                        </div>
                    <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                </form>
                </div>
            </div>
            <Link to='/signup' className="text-right">Need an account? Signup</Link>
        </div>
    </div>
</div>


//                     <form role="form" name="login" onSubmit={this.props.handleLogIn}>

//                             <div className="form-group">
//                                 <input name="username" className="form-control" placeholder="Username" autoFocus />
//                             </div>
//                             <div className="form-group">
//                                 <input name="password" className="form-control" placeholder="Password" />
//                             </div>
//                             <input className="btn btn-lg btn-primary btn-block" type="submit" value="Submit" />
                            


        )
    }
}
