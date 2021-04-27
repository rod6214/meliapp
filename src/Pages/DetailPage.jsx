import React from 'react-dom';
import { useEffect } from 'react';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content';
import Navigator from '../Components/Navs/Navigator';
import Product from '../Components/Containers/Product';
import { useParams } from "react-router-dom";
import { useMeliApiItem } from '../CustomHooks/hookServices';

import tagLinksMock from '../mocks/tagLinks.json'

const DetailPage = () => {
    // Obtencion del parametro de ruta id por medio del hook
    let { id } = useParams();
    const [product, loaded, getProduct] = useMeliApiItem();
    
    // Se usa effect para cargar los datos despues de renderizar la pagina
    useEffect(() => {
        if (!loaded) getProduct(id);
    }, [id, loaded, getProduct]);

    // Mostrar un contenedor vacion hasta que no se carguen los datos
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
