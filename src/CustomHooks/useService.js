import { useContext, useState } from 'react';
import { serviceContext } from './serviceContext';

export function useService() {
    return useContext(serviceContext);
}

export function useSearch(limit) {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { search } = useService().meliData;

    const searchProducts = async (queryInput) => {
        let api_cache = localStorage.getItem('api_cache');

        if (!api_cache)
            api_cache = {};
        else
            api_cache = await JSON.parse(api_cache);

        
        // Si no es la misma query consulta a la API
        if (api_cache.query !== queryInput) {
            api_cache.query = queryInput;
            const data = await search(queryInput, limit);
            api_cache.data = data;
            setProducts(data);
            localStorage.setItem('api_cache', JSON.stringify(api_cache));
            console.log('Consulting api in search')
        }
        else {
            // Caso contrario obtener los datos del local storage
            setProducts(api_cache.data);
        }

        setLoaded(true);
    }

    return [products, loaded, searchProducts];
}
