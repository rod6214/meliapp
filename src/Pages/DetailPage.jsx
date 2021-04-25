import React from 'react-dom';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content';
import Navigator from '../Components/Navs/Navigator';
import Product from '../Components/Containers/Product';

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
            <Product thumbnail="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg" 
                     prodCondition="Nuevo"
                     soldProducts="234"
                     title="Deco Reverse Sombrero Oxford"
                     currency="$"
                     price="1.980"
                     description_title="Descripcion del producto"
                     description="The Scarpe di Bianco footwear was founded by Bill White in 2009. Di Bianco offers classic handmade men's shoes with a modern twist. The combination of timeless models and details with contemporary colors and styling, results in decidedly current, yet, elegant models. The aim of the Scarpe di Bianco company is to offer men a custom shoe buying experience trough a multitude of models, lasts, soles, leathers, and color options."/>
        </Section>
    </Page>
    )
}

export default DetailPage;
