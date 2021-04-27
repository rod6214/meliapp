import React from 'react-dom';
import { useEffect } from 'react';
import Section from '../Components/Containers/Section'
import Content from '../Components/Containers/Content'
import Product from '../Components/Containers/Product';
import { useParams } from "react-router-dom";
import { useMeliApiItem } from '../CustomHooks/hookServices';

const DetailPage = () => {
    // Obtencion del parametro de ruta id por medio del hook
    let { id } = useParams();
    const [product, loaded, error, getProduct] = useMeliApiItem();
    
    // Se usa effect para cargar los datos despues de renderizar la pagina
    useEffect(() => {
        getProduct(id);
    }, [id, product, getProduct]);

    // Si hubo errores en la consulta muestra un mensaje de error
    if (error) return (
        <Section>
            <Content>Lo sentimos hubo un error!</Content>
        </Section>);
    // Mostrar un contenedor vacion hasta que no se carguen los datos
    if (!loaded) return (<></>);

    return (
        <Section>
            <Product {...product} />
        </Section>
    )
}

export default DetailPage;
