import React from 'react-dom';

// import './styles/form.scss'
// import Logo from '../../assets/Logo_ML@2x.png.png'

const Form = (props) => {

    return (
        <form className="d-flex mx-auto">
            {/* <img className="me-6" src={Logo} width="60" alt="logo"/> */}
            {props.children}
            {/* <input className="form-control-meli rounded-start" type="text" placeholder="Nunca dejes de buscar" aria-label="Search" /> */}
            {/* <button className="btn-meli bg-grey-meli border-grey-meli rounded-end rounded-0" type="submit">
                <i className="bi bi-search"></i>
            </button> */}
        </form>
    )
}

export default Form;