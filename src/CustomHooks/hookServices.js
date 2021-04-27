import { useContext, useState } from 'react';
import { serviceContext } from './serviceContext';

const Queue_Max_Size = 5;

const loadApiData = () => {
    let api_cache = localStorage.getItem('api_cache');

    if (!api_cache)
        api_cache = {};
    else
        api_cache = JSON.parse(api_cache);
    
    return api_cache;
}

const saveApiData = (api_cache) => {
    localStorage.setItem('api_cache', JSON.stringify(api_cache));
}

export function useService() {
    return useContext(serviceContext);
}

// Hook para hacer busquedas por query, incluye optimizacion que almacena items en cache (local storage)
// para evitar frecuentes llamadas a API y mejorando el tiempo de respuesta del navegador
export function useMeliApiSearch(limit) {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { search } = useService().meliData;

    const searchProducts = async (queryInput) => {
        let api_cache = loadApiData();

        // Si no es la misma query consulta a la API
        if (api_cache.query !== queryInput) {
            api_cache.query = queryInput;
            const data = await search(queryInput, limit);
            api_cache.data = data;
            setProducts(data);
            saveApiData(api_cache)
            console.log('Consulting api in search')
        }
        else {
            // Caso contrario obtener los datos del local storage
            setProducts(api_cache.data);
        }

        setLoaded(true);

        return api_cache.query;
    }

    return [products, loaded, searchProducts];
}

// Hook para recuperar un item por id, con optimizacion que almacena items en cache
export function useMeliApiItem() {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const { getItem } = useService().meliData;

    const getProduct = async (id) => {
        let api_cache = loadApiData();

        const changeStates = (item) => {
            setProduct(item);
            setLoaded(true);
        };

        // Si no hay productos inicializar array
        if (!api_cache.products)
            api_cache.products = [];
        
        // Si hay productos buscar el id
        if (api_cache.products.length > 0) {
            const item = api_cache.products.filter(item => item.id === id);
            
            // Si lo encuentra cargo desde la lista
            if (item && item.length > 0) {
                changeStates(item[0]);
                return;
            }
        }
        // Caso controrio consultar a la api y luego guardar el objeto en la lista
        // Cola api_cache.products (FIFO) 
        // Si la lista tiene mas de 5 elementos elimina el primero
        if (api_cache.products.length > Queue_Max_Size)
            api_cache.products.shift();
        // Llamar a la api con el nuevo elemento
        const item = await getItem(id);
        changeStates(item);
        // Guardar los cambios en la lista y en el local storage (agrega a lo ultimo)
        api_cache.products = [...api_cache.products, item];
        saveApiData(api_cache);
        console.log('Consulting api in getItem')
    }

    return [product, loaded, getProduct];
}
