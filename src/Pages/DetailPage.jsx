import React from 'react-dom';
import { useEffect, useState } from 'react';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content';
import Navigator from '../Components/Navs/Navigator';
import Product from '../Components/Containers/Product';
import { useParams } from "react-router-dom";
import { useService } from '../CustomHooks/useService';

import tagLinksMock from '../mocks/tagLinks.json'

const DetailPage = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const { getItem } = useService().meliData;
    
    useEffect(() => {
        try {
            const fetchProduct = async () => {
                const item = await getItem(id);
                setProduct(item);
                setLoaded(true);
                console.log('d')
            };

            fetchProduct();
        } catch (error) {
            console.error(error);
        }
    }, [id, getItem]);

    if (!loaded) return (<></>);

    return (
    <Page>
        <Section rounded={4}>
            <Content width={75} maxWidth="1100px">
                <Navigator tag="resultNav" links={tagLinksMock}/>
            </Content>
        </Section>
        <Section>
            <Product {...product} />
        </Section>
    </Page>
    )
}

export default DetailPage;
