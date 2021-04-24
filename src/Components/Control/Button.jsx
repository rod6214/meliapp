import React from 'react-dom';

// import './styles/form.scss'
// import Logo from '../../assets/Logo_ML@2x.png.png'

const Button = (props) => {

    return (
        <button className="btn-meli bg-grey-meli border-grey-meli rounded-end rounded-0" type="submit">
            {props.children}
        </button>
    )
}

export default Button;
