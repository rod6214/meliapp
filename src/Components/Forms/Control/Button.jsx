import React from 'react-dom';

const Button = (props) => {

    let buttonClass = '';

    if (props.search)
        buttonClass += 'btn-meli bg-grey-meli border-grey-meli rounded-end'

    if (props.className)
        buttonClass += ` ${props.className}`;


    return (
        <button onClick={props.onClick} 
                className={buttonClass} 
                type={props.type}>
            {props.children}
        </button>
    )
}

export default Button;
