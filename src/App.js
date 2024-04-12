//Importamos los componentes y los screens
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Screens/Home/Home"
import Footer from "./Components/Footer/Footer";
import DetallePelicula from "./Screens/DetallePelicula/DetallePelicula";
import TodasCartelera from "./Screens/TodasCartelera/TodasCartelera";
import TodasPopulares from "./Screens/TodasPopulares/TodasPopulares";

function App() {

  return (
    <>
      <Header />
      <Switch>
        {/* RUTAS */}
        <Route path='/' exact={true} component={Home}/>
        <Route path={'/detallePelicula/id/:id'} component= {DetallePelicula}/>
        <Route path='/siteCarteleraFilms' component={TodasCartelera} /> 

        <Route path='/sitePopulares' component={TodasPopulares}/>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
