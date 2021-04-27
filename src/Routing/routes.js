import ResultsPage from '../Pages/ResultsPage';
import DetailPage from '../Pages/DetailPage';
import SearchPage from '../Pages/SearchPage';

const routes = [
    {
        path:'/',
        component: SearchPage,
        exact: true,
    },
    {
        path:'/items',
        component: ResultsPage,
        exact: true,
        navigator: true,
    },
    {
        path:'/items/:id',
        component: DetailPage,
        navigator: true, 
    },
]

export default routes;
