import React from 'react-dom';

const Row = (props) => {

    let rowClass = `row ${props.className}`;

    if (Number.isInteger(props.padding))
        rowClass += ` p-${props.padding}`;

    if (Number.isInteger(props.ps))
        rowClass += ` ps-${props.ps}`;

    if (Number.isInteger(props.pe))
        rowClass += ` pe-${props.pe}`;
    
    if (Number.isInteger(props.pt))
        rowClass += ` pt-${props.pt}`;
    
    if (Number.isInteger(props.pb))
        rowClass += ` pb-${props.pb}`;
    
    if (Number.isInteger(props.px))
        rowClass += ` px-${props.px}`;

    if (Number.isInteger(props.py))
        rowClass += ` px-${props.py}`;

    return (<div className={rowClass}>{props.children}</div>);
}

export default Row;
