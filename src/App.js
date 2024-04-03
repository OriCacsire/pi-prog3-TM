//Importamos los componentes y los screens
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Screens/Home/Home"


function App() {

  return (
    <>
      <Header />
      <Switch>
        {/* RUTAS */}
        <Route path='/' exact={true} component={Home}/>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
