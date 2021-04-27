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
import Section from './Components/Containers/Section';
import Content from './Components/Containers/Content';
import Navigator from './Components/Navs/Navigator';
import tagLinksMock from './mocks/tagLinks.json'
import MetaTags from 'react-meta-tags';

const App = () => {

  // Mapeo de las rutas para <Route/> cargadas desde ./Routing/routes
  const routes = Routes.map((route, index) => (
    <Route key={`sw${index}`} exact={route.exact} path={route.path} render={(props) => (
      <Page>
          {/* Renderizar el "mock navigator" para aquellas rutas que lo requieran */}
          {/* "mock navigator": es un componente opcional que se activa desde routes.js */}
          {route.navigator && <Section rounded={4}>
                                  <Content width={75} maxWidth="1100px">
                                      <Navigator tag="resultNav" links={tagLinksMock}/>
                                  </Content>
                              </Section>}
          <route.component {...props} />
        </Page>
    )} />
  ));
  
  // Function para crear los servicios de MELI con la configuracion cargada desde /Config/config.json
  const createMeliService = () => {
    return new MeliData(Config);
  };
  
  // Se usa el hook useContext para tener el servicio de MELI disponible globalmente
  return (
    <serviceContext.Provider value={{meliData: createMeliService()}}>
        <Router>
          <Page>
              <MetaTags>
                  {/* Metadata SEO con algun mensaje emblematico de la empresa */}
                  <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
              </MetaTags>
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
