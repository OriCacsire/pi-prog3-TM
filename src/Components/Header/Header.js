import React from "react";
import { Link } from "react-router-dom"
import "./styles.css"
import FormBusqueda from "../FormBusqueda/FormBusqueda";

function Header(props){

    return(
            <header>
                <img className="logoHeader" src="./img/logoPage.png" alt="logo" />

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