import React from 'react-dom';

const Form = (props) => {

    let formClass = '';

    if (Number.isInteger(props.width))
        formClass += `w-${props.width}`

    if (props.flex)
        formClass += ` d-flex`;
    
    if (props.alignment)
        formClass += ` ${props.alignment}`;

    return (
        <form action={props.action} className={formClass}>
            {props.children}
        </form>
    )
}

export default Form;
