import React from 'react-dom';
import Flex from '../Containers/Flex';

const Content = (props) => {

    let containerClass = "w-75";
    
    if (props.rounded)
        containerClass += ` rounded-${props.rounded}`;
    else
        containerClass += ` rounded-0`;

    if (props.padding)
        containerClass += ` p-${props.padding}`;
    
    
    return (
    <Flex>
        <div className={containerClass} style={{backgroundColor: props.backgroundColor}}>
            {props.children}
        </div>
    </Flex>);
}

export default Content;
