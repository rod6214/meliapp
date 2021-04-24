import React from 'react-dom';
import NavBar from '../Components/Nav/NavBar';
import NavBarContent from '../Components/Nav/NavBarContent';
import SearchBar from '../Components/Nav/SearchBar';
import Section from '../Components/Container/Section'
import Logo from '../assets/Logo_ML@2x.png.png';

const Searcher = () => {
    return (
    <div>
        <NavBar>
            <NavBarContent>
                <SearchBar src={Logo} />
            </NavBarContent>
        </NavBar>
        <Section>
            <div className="w-75" style={{backgroundColor: 'white', height: '100px'}}></div>
        </Section>
    </div>
    )
}

export default Searcher;
