import React from 'react-dom';

const Form = (props) => {

    let formClass = 'w-100';

    if (props.flex)
        formClass += ` d-flex`;
    
    if (props.alignment)
        formClass += ` ${props.alignment}`;

    return (
        <form className={formClass}>
            {props.children}
        </form>
    )
}

export default Form;

{/* <form className="w-100 d-flex justify-content-center">
            {props.children}
        </form> */}