import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Main from './components/main-page.jsx';

ReactDOM.render(
<Router history={browserHistory}>
    <Route path='/' component={App}>
        <IndexRoute component={Login} />
        <Route path='signup' component={Signup} />
        <Route path='main_page' component={Main} />
    </Route>
</Router>
    , document.getElementById('app'));