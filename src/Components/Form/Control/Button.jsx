import React from 'react-dom';

const Button = (props) => {

    return (
        <button className="btn-meli bg-grey-meli border-grey-meli rounded-end rounded-0" type="submit">
            {props.children}
        </button>
    )
}

export default Button;
