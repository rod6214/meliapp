import React from 'react-dom';

import './styles/navbar.scss'

const NavBar = () => {

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-meli">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
  </nav>)
}

export default NavBar;
