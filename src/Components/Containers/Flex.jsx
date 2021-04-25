import React from 'react-dom';

const Flex = (props) => {

    let flexClass = 'd-flex justify-content-center';

    if (props.width)
        flexClass += ` w-${props.width}`

    return (
    <div className={flexClass} style={{maxWidth: props.maxWidth}}>
        {props.children}
    </div>
    );
}

export default Flex;
