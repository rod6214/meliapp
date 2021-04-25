import React from 'react-dom';
import Section from '../Containers/Section';
import Content from '../Containers/Content';

const NavBarContent = (props) => (
    <Section>
        {props.children}
    </Section>
    
    )

export default NavBarContent;
