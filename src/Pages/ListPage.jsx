import React from 'react-dom';
import NavBar from '../Components/Navs/NavBar';
import NavBarContent from '../Components/Navs/NavBarContent';
import SearchBar from '../Components/Navs/SearchBar';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content'
import Row from '../Components/Containers/Row';
import Col from '../Components/Containers/Col';
import Img from '../Components/Illustrators/Img';

import Logo from '../assets/Logo_ML@2x.png.png';
import Shipping from '../assets/ic_shipping.png';

const ListPage = () => {
    return (
    <Page>
        <NavBar>
            <NavBarContent>
                <SearchBar src={Logo} maxWidth="1200px" />
            </NavBarContent>
        </NavBar>
        <Section rounded={4}>
            <Content width={75} maxWidth="1200px">
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
            <Content rounded={4} width={75} maxWidth="1200px" backgroundColor='white'>
                <Row padding={7}>
                    <Col>
                        <div className="d-flex">
                            <Img inlineBlock 
                                 width={180} 
                                 height={180} 
                                 src="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg" 
                                 alt="Card Image"
                                 me={7}
                                 />
                            
                            <div>
                                <p className="fs-10 mb-8 mt-1 fe d-inline-block">$ 1.980</p>
                                <Img inlineBlock
                                 src={Shipping}
                                 alt="Shipping"
                                 alignment="align-baseline"
                                 ms={2}
                                 />
                                <p className="fs-9">Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!</p>
                            </div>
                            <div className="mx-auto">
                                <p className="fs-8 mb-0 mt-3 d-block">Capital Federal</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr className="w-95 mx-auto text-grey-dark-meli"/>
                <Row padding={7}>
                    
                    <Col>
                        <div className="d-flex">
                            <Img inlineBlock 
                                 width={180} 
                                 height={180} 
                                 src="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg" 
                                 alt="Card Image"
                                 me={7}
                                 />
                            
                            <div>
                                <p className="fs-10 mb-8 mt-1 fe d-inline-block">$ 1.980</p>
                                <Img inlineBlock
                                 src={Shipping}
                                 alt="Shipping"
                                 alignment="align-baseline"
                                 ms={2}
                                 />
                                <p className="fs-9">Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!</p>
                            </div>
                            <div className="mx-auto">
                                <p className="fs-8 mb-0 mt-3 d-block">Capital Federal</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr className="w-95 mx-auto text-grey-dark-meli"/>
                <Row padding={7}>
                    
                    <Col>
                        <div className="d-flex">
                            <Img inlineBlock 
                                 width={180} 
                                 height={180} 
                                 src="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg" 
                                 alt="Card Image"
                                 me={7}
                                 />
                            
                            <div>
                                <p className="fs-10 mb-8 mt-1 fe d-inline-block">$ 1.980</p>
                                <Img inlineBlock
                                 src={Shipping}
                                 alt="Shipping"
                                 alignment="align-baseline"
                                 ms={2}
                                 />
                                <p className="fs-9">Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!</p>
                            </div>
                            <div className="mx-auto">
                                <p className="fs-8 mb-0 mt-3 d-block">Capital Federal</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Section>
    </Page>
    )
}

export default ListPage;
