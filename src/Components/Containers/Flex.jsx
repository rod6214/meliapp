import React from 'react-dom';

const Flex = (props) => {

    let flexClass = 'd-flex';

    if (props.width)
        flexClass += ` w-${props.width}`

    if (props.alignment)
        flexClass += ` ${props.alignment}`;

    return (
    <div className={flexClass} style={{maxWidth: props.maxWidth}}>
        {props.children}
    </div>
    );
}

export default Flex;
