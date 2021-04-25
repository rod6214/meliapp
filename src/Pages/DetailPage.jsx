import React from 'react-dom';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content';
import Navigator from '../Components/Navs/Navigator';
import Flex from '../Components/Containers/Flex';
import Img from '../Components/Illustrators/Img';
import Button from '../Components/Forms/Control/Button';

import tagLinksMock from '../mocks/tagLinks.json'

const DetailPage = () => {
    return (
    <Page>
        <Section rounded={4}>
            <Content width={75} maxWidth="1100px">
                <Navigator tag="resultNav" links={tagLinksMock}/>
            </Content>
        </Section>
        <Section>
            <Content padding={8} rounded={4} width={75} maxWidth="1100px" backgroundColor='white'>
                <Flex alignment="justify-content-between">
                        <Img width={680} src="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg" alt="detail-image" />
                        <div className="p-0 m-0">
                            <div className="pb-7"><span className="fs-10">Nuevo - 234 vendidos</span></div>
                            <h1 className="fs-11 m-0 pb-8">Deco Reverse Sombrero Oxford</h1>
                            <div className="pb-8">
                                <meta itemProp="price" content="1980"/>
                                <span className="fs-12">$ 1.980</span>
                            </div>
                            
                            <Button className="btn btn-primary-meli rounded w-100 text-light fs-11" type="button">Comprar</Button>
                        </div>
                    </Flex>
                <div>
                    <h2 className="pb-8">Descripcion del producto</h2>
                    <p className="w-75 text-grey-dark-meli">The Scarpe di Bianco footwear was founded by Bill White in 2009. Di Bianco offers classic handmade men's shoes with a modern twist. The combination of timeless models and details with contemporary colors and styling, results in decidedly current, yet, elegant models. The aim of the Scarpe di Bianco company is to offer men a custom shoe buying experience trough a multitude of models, lasts, soles, leathers, and color options.</p>
                </div>
            </Content>
        </Section>
    </Page>
    )
}

export default DetailPage;
