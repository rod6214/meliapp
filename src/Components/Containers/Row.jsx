import React from 'react-dom';

const Row = (props) => {

    let rowClass = 'row';

    if (props.padding) {
        rowClass += ` p-${props.padding}`;
    }

    return (<div className={rowClass}>{props.children}</div>);
}

export default Row;
