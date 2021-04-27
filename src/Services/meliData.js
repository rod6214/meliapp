class MeliData {

    constructor(config) {
        this.config = config;
        this.searchUri = this.getRoute('search');
        this.getItemUri = this.getRoute('getItem');
        this.getDescriptionUri = this.getRoute('getDescription');
    }

    getRoute = (funcName) => {
        try {
            return this.config.routes.find(route => route.function === funcName).path;
        } catch (error) {
            console.log(error);
        }
    }

    search = async (searchInput, limitResult) => {
        const data = await fetch(`${this.searchUri}${searchInput}`)
            .then(searchResponse => {
                if (!searchResponse.ok) throw Error(searchResponse.status);
                const results = searchResponse.json();
                return results;
            });
            let products = data.results.map(item => {
                return {
                    title: item.title,
                    thumbnail: item.thumbnail,
                    state_name: item.address.state_name,
                    price: item.price,
                    link: `/items/${item.id}`,
                    free_shipping: item?.shipping?.free_shipping || false,
                };
            });

            if (Number.isInteger(limitResult))
                products = products.slice(0, limitResult);

            return products;
    };

    getItem = async (id) => {

        const newItem = await fetch(this.getItemUri.replace(':id', id))
            .then(itemResponse => {
                if (!itemResponse.ok) throw Error(itemResponse.status);
                const item = itemResponse.json();
                return {
                    id: item.id,
                    title: item.title,
                    thumbnail: Array.isArray(item.pictures) ? item.pictures.length > 0 ? item.pictures[0].url : '' : '',
                    prodCondition: item.condition,
                    soldProducts: item.sold_quantity,
                    price: item.price,
                    description_title: 'Descripcion del producto',
                    currency: '$',
                };
            });

        const description = await this.getDescription(id);
            
        return {...newItem, description};
    };

    getDescription = async (id) => {
        return await fetch(this.getDescriptionUri.replace(':id', id))
            .then(response => {
                if (!response.ok) throw Error(response.status);
                const description = response.json();
                return description.plain_text;
            });
    }
}

export default MeliData;
