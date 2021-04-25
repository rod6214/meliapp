import React from 'react-dom';

const NavBarContent = (props) => (
    <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {props.children}
        </div>
    </div>)

export default NavBarContent;
