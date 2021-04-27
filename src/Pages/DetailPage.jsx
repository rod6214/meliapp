import React from 'react-dom';
import { useEffect } from 'react';
import Section from '../Components/Containers/Section'
import Product from '../Components/Containers/Product';
import { useParams } from "react-router-dom";
import { useMeliApiItem } from '../CustomHooks/hookServices';

const DetailPage = () => {
    // Obtencion del parametro de ruta id por medio del hook
    let { id } = useParams();
    const [product, loaded, getProduct] = useMeliApiItem();
    
    // Se usa effect para cargar los datos despues de renderizar la pagina
    useEffect(() => {
        if (!loaded) getProduct(id);
    }, [id, loaded, getProduct]);

    // Mostrar un contenedor vacion hasta que no se carguen los datos
    if (!loaded || !product) return (<></>);

    return (
        <Section>
            <Product {...product} />
        </Section>
    )
}

export default DetailPage;
