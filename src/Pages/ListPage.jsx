import React from 'react-dom';
import NavBar from '../Components/Nav/NavBar';
import NavBarContent from '../Components/Nav/NavBarContent';
import SearchBar from '../Components/Nav/SearchBar';
import Section from '../Components/Container/Section'
import Logo from '../assets/Logo_ML@2x.png.png';

const ListPage = () => {
    return (
    <div>
        <NavBar>
            <NavBarContent>
                <SearchBar src={Logo} />
            </NavBarContent>
        </NavBar>
        <Section rounded={4}>
            <div className="w-75 bg-grey-meli pb-7 pt-7 text-grey-dark-meli">
                <p className="d-inline fs-8">Electronica, Audio y Video</p> &gt; 
                <p className="d-inline fs-8">iPod</p> &gt; 
                <p className="d-inline fs-8">Repoductores</p> &gt;
                <p className="d-inline fs-8">iPod touch</p> &gt; 
                <p className="d-inline fs-8 fw-bold">32 GB</p>
            </div>
        </Section>
        <Section>
            <div className="w-75 rounded-4" style={{backgroundColor: 'white', height: '100px'}}></div>
        </Section>
    </div>
    )
}

export default ListPage;
