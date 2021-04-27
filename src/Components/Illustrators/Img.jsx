import React from 'react-dom';

const Img = (props) => {

    let imgClass = "";

    if (Number.isInteger(props.me))
        imgClass += ` me-${props.me}`;

    if (Number.isInteger(props.ms))
        imgClass += ` ms-${props.ms}`;

    if (Number.isInteger(props.margin))
        imgClass += ` m-${props.margin}`;
    
    if (Number.isInteger(props.padding))
        imgClass += ` p-${props.padding}`;

    if (props.alignment)
        imgClass += ` ${props.alignment}`;

    if (props.inlineBlock)
        imgClass += ' d-inline-block'

    return (<img className={imgClass} 
        src={props.src} 
        height={props.height}
        width={props.width} 
        alt={props.alt}
        style={{maxHeight: props.maxHeight, maxWidth: props.maxWidth}}
        />);
}

export default Img;