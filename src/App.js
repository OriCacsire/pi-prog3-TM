//Importamos los componentes y los screens
import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Screens/Home"
import Footer from "./Components/Footer/Footer";
import DetallePelicula from "./Screens/DetallePelicula";
import TodasCartelera from "./Screens/TodasCartelera";
import TodasPopulares from "./Screens/TodasPopulares";
import Favorito from "./Screens/Favorito"
import NotFound404 from "./Screens/NotFound404";
import ResultadoBusqueda from "./Screens/ResultadoBusqueda";

let menu = [
  {
    nombre: 'HOME',
    ruta: '/',
  },
  {
    nombre: 'PELICULAS EN CARTELERA',
    ruta: '/siteCarteleraFilms',
  },
  {
    nombre: 'PELICULAS MÁS POPULARES',
    ruta: '/sitePopulares',
  },
  {
    nombre: 'FAVORITOS',
    ruta: '/favoritos',
  }
]

function App() {

  return (
    <React.Fragment>
      <Header direccionMenu={menu}/>
      <Switch>
        {/* RUTAS */}
        <Route path='/' exact={true} component={Home} />
        <Route path='/detallePelicula/id/:id' component={DetallePelicula} />
        <Route path='/siteCarteleraFilms' component={TodasCartelera} />
        <Route path='/sitePopulares' component={TodasPopulares} />
        {/* ruta favoritos */}
        <Route path="/favoritos" component={Favorito} />

        {/* ruta sesultados busqueda */}
        <Route path="/busqueda/:busqueda" component={ResultadoBusqueda}/>
        {/* ruta not found */}
        <Route component={NotFound404}/>
        
      </Switch>

      <Footer />
    </React.Fragment>
  );
}

export default App;
