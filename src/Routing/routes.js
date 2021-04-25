import ResultsPage from '../Pages/ResultsPage';
import DetailPage from '../Pages/DetailPage';
import SearchPage from '../Pages/SearchPage';

export default [
    {
        path:'/',
        component: SearchPage,
        exact: true,
    },
    {
        path:'/items',
        component: ResultsPage,
        exact: true,
    },
    {
        path:'/items/:id',
        component: DetailPage 
    },
]