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

    search = async (searchInput) => {
        try {
            const data = await fetch(`${this.searchUri}${searchInput}`)
            .then(response => response.json());
            
            return data;
        } catch (error) {
            console.error(error);
        }
        
    };
    
    getItem = async (id) => "getItem Works Fine";
}
// .routes.find(route => route.function === "search")
export default MeliData;
