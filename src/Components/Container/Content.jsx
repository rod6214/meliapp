import React from 'react-dom';

const Content = (props) => {

    let containerClass = "w-75";
    
    if (props.rounded)
        containerClass += ` rounded-${props.rounded}`;
    else
        containerClass += ` rounded-0`;
    
    return (
    <div className={containerClass} style={{backgroundColor: 'white', height: '100px'}}>
        {props.children}
    </div>);
}

export default Content;
