import React from "react";
import { Link } from "react-router-dom"
import "./styles.css"

// intento
import FormBusqueda from "../FormBusqueda/FormBusqueda";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
function Header(props){

    return(
            <header>
                 <Link className="contendorLogo" to="/"> <img className="logoHeader" src="./img/logoPage.png" alt="logo" /></Link> 
                
                
                <nav>
                    <ul className="listaMenu"> 
                        {
                       props.direccionMenu.map((elm, idx) => <li className="eachMenuLi" key={`${idx}${elm.path}`}> <Link className ="eachMenu" to={elm.ruta} >{elm.nombre}</Link> </li>)
                        }
                    </ul>
                </nav>
                
                <FormBusqueda/>
            </header>
    )
    
}

export default Header