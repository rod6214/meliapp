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
        try {
            const data = await fetch(`${this.searchUri}${searchInput}`)
            .then(response => response.json());
            let products = data.results.map(item => {
                return {
                    title: item.title,
                    thumbnail: item.thumbnail,
                    state_name: item.address.state_name,
                    price: item.price,
                    link: `/items/${item.id}`,
                };
            });

            if (Number.isInteger(limitResult))
                products = products.slice(0, limitResult);

            return products;
        } catch (error) {
            console.error(error);
        }
        
    };

    getItem = async (id) => {
        try {
            const item = await fetch(this.getItemUri.replace(':id', id))
            .then(response => response.json());

            const description = await this.getDescription(id);
            
            return {
                title: item.title,
                thumbnail: Array.isArray(item.pictures) ? item.pictures.length > 0 ? item.pictures[0].url : '' : '',
                prodCondition: item.condition,
                soldProducts: item.sold_quantity,
                price: item.price,
                description_title: 'Descripcion del producto',
                description,
                currency: '$',
            };

        } catch (error) {
            console.error(error);
        }
    };

    getDescription = async (id) => {
        try {
            const data = await fetch(this.getDescriptionUri.replace(':id', id))
            .then(response => response.json());
            return data.plain_text;
        } catch (error) {
            console.error(error);
        }
    }
}

export default MeliData;
