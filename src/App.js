//Importamos los componentes y los screens
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Screens/Home/Home"
import Footer from "./Components/Footer/Footer";
import DetallePelicula from "./Screens/DetallePelicula/DetallePelicula";

function App() {

  return (
    <>
      <Header />
      <Switch>
        {/* RUTAS */}
        <Route path='/' exact={true} component={Home}/>
        <Route path={'/detallePelicula/id/:id'} component= {DetallePelicula}/>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
