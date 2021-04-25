import React from 'react-dom';
import NavBar from '../Components/Navs/NavBar';
import NavBarContent from '../Components/Navs/NavBarContent';
import SearchBar from '../Components/Navs/SearchBar';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content'
import Row from '../Components/Containers/Row';
import Col from '../Components/Containers/Col';

import Logo from '../assets/Logo_ML@2x.png.png';

const ListPage = () => {
    return (
    <Page>
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
            <Content rounded={4} padding={2}>
                <Row>
                    <Col span={2}>
                        pepe 1
                    </Col>
                    <Col span={8}>
                        pepe 2
                    </Col>
                    <Col span={2}>
                        pepe 2
                    </Col>
                </Row>
            </Content>
        </Section>
    </Page>
    )
}

export default ListPage;
