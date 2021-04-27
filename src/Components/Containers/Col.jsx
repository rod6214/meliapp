import React from 'react-dom';

const Col = (props) => {
    let colClass = 'col';

    if (props.md)
        colClass += `-md`

    if (props.span)
        colClass += `-${props.span}`;

    if (Number.isInteger(props.padding))
        colClass += ` p-${props.padding}`;

    if (Number.isInteger(props.ps))
        colClass += ` ps-${props.ps}`;

    if (Number.isInteger(props.pe))
        colClass += ` pe-${props.pe}`;
    
    if (Number.isInteger(props.px))
        colClass += ` px-${props.px}`;
    
    if (Number.isInteger(props.py))
        colClass += ` px-${props.py}`;

    if (props.text_center)
        colClass += ` text-center`;

    return (<div className={colClass}>{props.children}</div>);
}

export default Col;
