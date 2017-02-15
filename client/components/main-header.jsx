import React from 'react';

const Header = (props) => {
  return (
    <div className="main-header">
      <h3>header</h3>
      <button className="btn btn-default" onClick={props.handleLogOut}>
        logout
      </button>
    </div>
  );
};

export default Header;