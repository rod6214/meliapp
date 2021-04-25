import React from 'react-dom';
import Section from '../Containers/Section';
import Content from '../Containers/Content';

const NavBarContent = (props) => (
    <Section>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {props.children}
        </div>
    </Section>
    
    )

export default NavBarContent;
// <div className="container-fluid">
        // <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //     {props.children}
        // </div>
    // </div>