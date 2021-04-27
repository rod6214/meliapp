import React from 'react-dom';
import { useEffect } from 'react';
import Section from '../Components/Containers/Section'
import Page from '../Components/Containers/Page';
import Content from '../Components/Containers/Content';
import Card from '../Components/Containers/Card';
import Navigator from '../Components/Navs/Navigator';
import { useSearch } from '../CustomHooks/useService';
import { useQuery } from '../CustomHooks/useQuery';

import tagLinksMock from '../mocks/tagLinks.json'

const ResultsPage = () => {
    /*
     * Hook de busqueda limitado para un resultado de solo cuatro elementos
     * basado en las especificaciones de los requerimientos del ejercicio
     */
    const [searchResult, loaded, searchProducts] = useSearch(4);
    // Recuperamos los datos de la query a traves de un hook
    const query = useQuery().get('search');

    // Se usa effect para cargar los datos despues de renderizar la pagina
    useEffect(() => {
        searchProducts(query);
    }, [query, loaded]);

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
                <Content rounded={4} width={75} maxWidth="1100px" backgroundColor='white'>
                    {searchResult?.map((item, index) => {
                        
                        const hasDivider = (index < searchResult.length - 1);

                        return (<Card key={`card${index}`} {...item} divider={hasDivider}/>)
                    })}
                </Content>
            </Section>
        </Page>
    )
}

export default ResultsPage;
