import React, { Component } from 'react'
//2 grupos de contenido 
import PopularesContenedor from '../../Components/PopularesContenedor/PopularesContenedor'
import CartelContenedor from '../../Components/CartelContenedor/CartelContenedor'
import {options} from "../../Utils/Constants";
import { Link } from 'react-router-dom'
import "./styles.css"
let PeliculasPopulares = "https://api.themoviedb.org/3/movie/popular"
let PeliculasCartel = "https://api.themoviedb.org/3/movie/now_playing"


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmPopulares: [],
            filmsCartel: [],
            pText: "Ver Todas"

        }
    }

    componentDidMount() {
        this.traerPopulares()
        this.traerCartelera()
    }

    // Se arma el fetch de cada uno por separado
    traerPopulares() {
        fetch(PeliculasPopulares,options)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    // para que me de resultados hasta 5
                    filmPopulares: data.results.slice(0, 5)
                })
            })
            .catch(error => console.log(error))
    }

    traerCartelera() {
        fetch(PeliculasCartel, options)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    filmsCartel: data.results.slice(0, 5)
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <main>
                <h2 className="titlePopulares">Peliculas  Populares</h2>

                {/* Le agregamos un link para que una vez que se aprete en este se diriga a  peliculas populares, en vez de usar <a>*/}

                <button>
                    <Link to={"/sitePopulares"}>
                        {this.state.pText} 
                    </Link>
                </button>

                <PopularesContenedor 
                //le enviamos props al componente PopularesContenedor
                filmPopulares = {this.state.filmPopulares}
                />

                <h2 className="titleDeCarteleras">Peliculas en Cartelera </h2>

                 {/* Le agregamos un link para que una vez que se aprete en este se diriga al cartel de las peliculas, en vez de usar <a>*/}

                <button>
                    <Link to={"/siteCarteleraFilms"}>
                        {this.state.pText} 
                    </Link>
                </button>

                <CartelContenedor
                filmsCartel = {this.state.filmsCartel}
                />
            </main>
        )
    }
}

export default Home