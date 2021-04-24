import React from 'react-dom';

const Form = (props) => {

    return (
        <form className="w-100 d-flex justify-content-center">
            {props.children}
        </form>
    )
}

export default Form;