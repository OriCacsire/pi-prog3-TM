//Importamos los componentes y los screens
import {Switch, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
// import Home from "./Screens/Home/Home"


function App() {


  return (
    <div>
      <Header/>
      <Navbar/>

      <Switch>
        {/* RUTAS */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
