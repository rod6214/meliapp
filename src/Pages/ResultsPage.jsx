import React from 'react-dom';
import { useEffect } from 'react';
import Section from '../Components/Containers/Section'
import Content from '../Components/Containers/Content';
import Card from '../Components/Containers/Card';
import { useMeliApiSearch } from '../CustomHooks/hookServices';
import { useQuery } from '../CustomHooks/useQuery';

const ResultsPage = () => {
    /*
     * Hook de busqueda limitado para un resultado de solo cuatro elementos
     * basado en las especificaciones de los requerimientos del ejercicio
     */
    const [searchResult, loaded, searchProducts] = useMeliApiSearch(4);
    // Recuperamos los datos de la query a traves de un hook
    const query = useQuery().get('search');

    // Se usa effect para cargar los datos despues de renderizar la pagina
    useEffect(() => {
        if (!loaded) searchProducts(query);
    }, [query, loaded, searchProducts]);

    // Mostrar un contenedor vacion hasta que no se carguen los datos
    if (!loaded) return (<></>);

    // Para SEO se utiliza una etiqueta <meta/> dentro del componente PriceBox
    // para mejorar los resultados en los motores de busqueda
    return (
        <Section>
            <Content rounded={4} width={75} maxWidth="1100px" backgroundColor='white'>
                {searchResult?.map((item, index) => {
                    
                    // No renderizar el separador si es el ultimo elemento
                    const hasDivider = (index < searchResult.length - 1);

                    return (<Card key={`card${index}`} {...item} divider={hasDivider}/>)
                })}
            </Content>
        </Section>
    )
}

export default ResultsPage;
