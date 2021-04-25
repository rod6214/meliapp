import React from 'react-dom';

const Content = (props) => {

    let containerClass = "w-75";
    
    if (props.rounded)
        containerClass += ` rounded-${props.rounded}`;
    else
        containerClass += ` rounded-0`;

    if (props.padding) {
        containerClass += ` p-${props.padding}`;
    }
    
    return (
    <div className={containerClass} style={{backgroundColor: 'white'}}>
        {props.children}
    </div>);
}

export default Content;
