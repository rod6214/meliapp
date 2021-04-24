import React from 'react-dom';

import './styles/navbar.scss'

const NavBar = () => {

    return (
    <nav className="navbar navbar-expand navbar-dark bg-yelow-meli">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex mx-auto">
                    <input className="form-control-meli rounded-start" type="text" placeholder="Nunca dejes de buscar" aria-label="Search" />
                    <button className="btn-meli bg-grey-meli border-grey-meli rounded-end rounded-0" type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </div>
        </div>
  </nav>)
}

export default NavBar;
