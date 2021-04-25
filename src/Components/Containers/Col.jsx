import React from 'react-dom';

const Col = (props) => {
    let colClass = 'col';
    
    if(props.span) {
        colClass = `col-${props.span}`;
    }

    return (<div className={colClass}>{props.children}</div>);
}

export default Col;
