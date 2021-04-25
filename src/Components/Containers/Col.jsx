import React from 'react-dom';

const Col = (props) => {
    let colClass = 'col';

    if (props.span)
        colClass = `col-${props.span}`;

    if (Number.isInteger(props.padding))
        colClass += ` p-${props.padding}`;

    if (Number.isInteger(props.ps))
        colClass += ` ps-${props.ps}`;

    if (Number.isInteger(props.pe))
        colClass += ` ps-${props.pe}`;

    return (<div className={colClass}>{props.children}</div>);
}

export default Col;
