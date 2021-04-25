import React from 'react-dom';

const NavBar = (props) => (
    <nav className="navbar navbar-expand navbar-dark bg-yelow-meli">
        {props.children}
    </nav>);

export default NavBar;
