import React from 'react-dom';

import './styles/navbar.scss'

const NavBar = () => {

    return (
    <nav className="navbar navbar-expand navbar-dark bg-meli">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex mx-auto">
                    <input className="form-control-meli" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn-meli btn-outline-success" type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </div>
        </div>
  </nav>)
}

export default NavBar;
