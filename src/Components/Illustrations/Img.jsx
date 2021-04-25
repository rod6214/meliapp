import React from 'react-dom';

const Img = (props) => {

    let imgClass = "";
    let width = 60;

    if (props.me) {
        imgClass += ` me-${props.me}`;
    }

    if (props.width) {
        width = props.width;
    }

    return (<img className={imgClass} src={props.src} width={width} alt="logo"/>);
}

export default Img;