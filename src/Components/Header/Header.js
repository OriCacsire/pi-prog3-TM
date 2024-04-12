import React from "react";
import { Link } from "react-router-dom"
import "./styles.css"
import Search from "../Search/Search"

function Header(props){

    let menu = [
        {
            nombre: 'HOME',
            ruta: '/',
        },
        {
            nombre: 'PELICULAS EN CARTELERA',
            ruta: '/cartelera',
        },
        {
            nombre: 'PELICULAS MÁS POPULARES',
            ruta: '/masPopulares',
        },
        {
            nombre: 'FAVORITOS',
            ruta: '/favoritos',
        }
    ]

    return(
            <header>

                <img className="logoHeader" src="./img/logoPage.png" alt="logo" />

                <nav>
                    <ul className="listaMenu"> 
                        {
                        menu.map((elm, idx) => <li> <Link className ="eachMenu" to={elm.ruta}>{elm.nombre}</Link> </li>)
                        }
                    </ul>
                </nav>

                <Search/>
            </header>
    )
    
}

export default Header