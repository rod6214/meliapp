import React from 'react-dom';
import './styles/navbar.scss'

const NavBarContent = (props) => (
    <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {props.children}
        </div>
    </div>)

export default NavBarContent;
