import React from 'react';

const Header = (props) => {
  return (
    <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Usizo</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#" onClick={props.handleLogOut}>Log Out</a></li>
            </ul>
            <p className="navbar-text navbar-right"><em>Signed in as {props.userName}</em></p>
        </div>
    </nav>
  );
};

export default Header;