import React from 'react-dom';
import NavBar from '../Components/Navs/NavBar';
import NavBarContent from '../Components/Navs/NavBarContent';
import SearchBar from '../Components/Navs/SearchBar';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content';
import Card from '../Components/Containers/Card';

import Logo from '../assets/Logo_ML@2x.png.png';

const ListPage = () => {
    return (
    <Page>
        <NavBar>
            <NavBarContent>
                <SearchBar src={Logo} maxWidth="1100px" />
            </NavBarContent>
        </NavBar>
        <Section rounded={4}>
            <Content width={75} maxWidth="1100px">
                <div className="bg-grey-meli pb-7 pt-7 text-grey-dark-meli">
                    <p className="d-inline fs-8">Electronica, Audio y Video</p> &gt; 
                    <p className="d-inline fs-8">iPod</p> &gt; 
                    <p className="d-inline fs-8">Repoductores</p> &gt;
                    <p className="d-inline fs-8">iPod touch</p> &gt; 
                    <p className="d-inline fs-8 fw-bold">32 GB</p>
                </div>
            </Content>
        </Section>
        <Section>
            <Content rounded={4} width={75} maxWidth="1100px" backgroundColor='white'>
                <Card thumbnail="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg"
                    price="1.980"
                    title="Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!"
                    state_name="Capital Federal" free_shipping divider/>
                <Card thumbnail="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg"
                    price="1.980"
                    title="Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!"
                    state_name="Capital Federal" free_shipping divider/>
                <Card thumbnail="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg"
                    price="1.980"
                    title="Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!"
                    state_name="Capital Federal" free_shipping />
            </Content>
        </Section>
    </Page>
    )
}

export default ListPage;
