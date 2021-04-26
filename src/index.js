import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { serviceContext } from './CustomHooks/serviceContext'

import NavBar from './Components/Navs/NavBar';
import NavBarContent from './Components/Navs/NavBarContent';
import SearchBar from './Components/Navs/SearchBar';
import Page from './Components/Containers/Page';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Logo from './assets/Logo_ML@2x.png.png';
import Routes from './Routing/routes';
import Config from './Config/config.json';
import MeliData from './Services/meliData';

const App = () => {

  const routes = Routes.map((route, index) => (
    <Route key={`sw${index}`} exact={route.exact} path={route.path} render={(props) => (
      <route.component {...props} />
    )} />
  ));

  const createServices = () => {
    return new MeliData(Config);
  };
  
  return (
    <serviceContext.Provider value={{meliData: createServices()}}>
        <Router>
        <Page>
            <NavBar>
                <NavBarContent>
                    <SearchBar src={Logo} maxWidth="1100px" />
                </NavBarContent>
            </NavBar>
            <Switch>
              {routes}
            </Switch>
        </Page>
      </Router>
    </serviceContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
