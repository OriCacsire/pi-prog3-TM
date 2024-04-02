import React from "react";
import { Link } from "react-router-dom"
import "./styles.css"

function Navbar(props){

    let menu = [
        {
            nombre: 'Home',
            ruta: '/',
        },
        {
            nombre: 'Peliculas en cartelera',
            ruta: '/cartelera',
        },
        {
            nombre: 'Peliculas más populares',
            ruta: '/masPopulares',
        },
        {
            nombre: 'Favoritos',
            ruta: '/favoritos',
        }
    ]

    return(<header>
                <img className="imgHeader" src="https://st5.depositphotos.com/78668328/65648/v/450/depositphotos_656484306-stock-illustration-cinema-film-icon-film-reel.jpg" alt="logo" />
                <nav>
                    <ul>
                        {
                        menu.map((elm, idx) => <li> <Link to={elm.ruta}>{elm.nombre}</Link> </li>)
                        }
                    </ul>
                </nav>
            </header>
    )
    
}

export default Navbar