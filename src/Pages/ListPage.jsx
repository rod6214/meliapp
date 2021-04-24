import React from 'react-dom';
import NavBar from '../Components/Nav/NavBar';
import NavBarContent from '../Components/Nav/NavBarContent';
import SearchBar from '../Components/Nav/SearchBar';

import Logo from '../assets/Logo_ML@2x.png.png';

const Searcher = () => {
    return (
    <div>
        <NavBar>
            <NavBarContent>
                <SearchBar src={Logo} />
            </NavBarContent>
        </NavBar>
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <div className="w-75" style={{backgroundColor: 'white', height: '100px'}}>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Searcher;
