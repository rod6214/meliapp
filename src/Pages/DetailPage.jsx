import React from 'react-dom';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content';
import Navigator from '../Components/Navs/Navigator';
import Row from '../Components/Containers/Row';
import Col from '../Components/Containers/Col';
import Flex from '../Components/Containers/Flex';
import Img from '../Components/Illustrators/Img';

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
            <Content rounded={4} width={75} maxWidth="1100px" backgroundColor='white'>
                <Row>
                    <Flex>
                        <Img width={680} src="http://http2.mlstatic.com/D_955205-MLA44925999950_022021-I.jpg" alt="detail-image" />
                        <Section width={25}>
                            <p>Nuevo - 234 vendidos</p>
                            <h3>Deco Reverse Sombrero Oxford</h3>
                            <h2>$ 1.980</h2>
                            <p>The Scarpe di Bianco footwear was founded by Bill White in 2009. Di Bianco offers classic handmade men's shoes with a modern twist. The combination of timeless models and details with contemporary colors and styling, results in decidedly current, yet, elegant models. The aim of the Scarpe di Bianco company is to offer men a custom shoe buying experience trough a multitude of models, lasts, soles, leathers, and color options.</p>
                        </Section>
                    </Flex>
                </Row>
                <Row>
                    <Col>
                        <h2>Descripcion del producto</h2>
                        <p>The Scarpe di Bianco footwear was founded by Bill White in 2009. Di Bianco offers classic handmade men's shoes with a modern twist. The combination of timeless models and details with contemporary colors and styling, results in decidedly current, yet, elegant models. The aim of the Scarpe di Bianco company is to offer men a custom shoe buying experience trough a multitude of models, lasts, soles, leathers, and color options.</p>
                    </Col>
                </Row>
            </Content>
        </Section>
    </Page>
    )
}

export default DetailPage;
