import React, { Component } from 'react'
//2 grupos de contenido 
import PopularesContenedor from '../Components/PopularesContenedor/PopularesContenedor'
import CartelContenedor from '../Components/CartelContenedor/CartelContenedor'

// import FormBusqueda from '../../Components/FormBusqueda/FormBusqueda'
import { Link } from 'react-router-dom'
import "./styles.css"
let PeliculasPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=d3875133e7a115f2dc3fec2ed6786f75"
let PeliculasCartel = "https://api.themoviedb.org/3/movie/now_playing?api_key=d3875133e7a115f2dc3fec2ed6786f75"


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmPopulares: [],
            filmsCartel: [],
            allFilms:[], //para hacer el buscador
            pText: "Ver Todas"

        }
    }

    componentDidMount() {
        this.traerPopulares()
        this.traerCartelera()
//agregamos todas las peli que se encuentran en home, luego hacemos un filtrarpeliculas con el valor input de parametro.

        this.setState({
            allFilms:this.state.filmPopulares + this.state.filmsCartel

        })
        console.log(this.state.allFilms)
    }

    // Se arma el fetch de cada uno por separado
    traerPopulares() {
        fetch(PeliculasPopulares)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    // para que me de resultados hasta 5
                    filmPopulares: data.results.slice(0, 5)
                })
            })
            .catch(error => console.log(error))
    }

    traerCartelera() {
        fetch(PeliculasCartel)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    filmsCartel: data.results.slice(0,5)
                })
            })
            .catch(error => console.log(error))
    }

    //creamos un filtrarPeliculas.

    render() {
        return (
            <main>
                {/* componenete de search se le envia el filtrarfilms con el valor Input  */}
                <h2 className="titles">Peliculas  Populares</h2>

                {/* Le agregamos un link para que una vez que se aprete en este se diriga a  peliculas populares, en vez de usar <a>*/}

           
                <PopularesContenedor 
                
                //le enviamos props al componente PopularesContenedor
                filmPopulares = {this.state.filmPopulares}
                />

                
                <article  className='BtnVerMas'>

                <button>
                    <Link className="BtnVerMasLink" to={"/sitePopulares"}>
                        {this.state.pText}
                    </Link>
                </button>

                </article>

                <h2 className="titles">Peliculas en Cartelera </h2>

                 {/* Le agregamos un link para que una vez que se aprete en este se diriga al cartel de las peliculas, en vez de usar <a>*/}

             

                <CartelContenedor
                filmsCartel = {this.state.filmsCartel}
                />

                <article className='BtnVerMas'>
                <button >
                    <Link className="BtnVerMasLink" to={"/siteCarteleraFilms"}>
                        {this.state.pText}
                    </Link>
                </button>

                </article>

               
            </main>
        )
    }
}

export default Home