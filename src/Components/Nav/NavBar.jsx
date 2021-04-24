import React from 'react-dom';
import './styles/navbar.scss'

const NavBar = (props) => (
    <nav className="navbar navbar-expand navbar-dark bg-yelow-meli">
        {props.children}
    </nav>);

export default NavBar;
