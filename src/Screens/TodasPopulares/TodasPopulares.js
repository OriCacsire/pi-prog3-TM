import React, { Component } from 'react'
import PopularesContenedor from '../../Components/PopularesContenedor/PopularesContenedor'
import FormFiltro from '../../Components/FormFiltro/FormFiltro'

let PeliculasPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=d3875133e7a115f2dc3fec2ed6786f75"

 class TodasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmPopulares: [],
            // favorito
            backup:[],
            page: 1
        }
    }
    componentDidMount(){
        fetch(PeliculasPopulares)
        .then(resp => resp.json())
        .then(data =>{
            this.setState ({
                filmPopulares: data.results,
                backup:data.results,
                page: this.state.page + 1

            })
        })
        .catch(err => console.log(err))

    }

    masPopulares(){
        fetch(`${PeliculasPopulares}&page=${(this.state.page + 1)}`)
        .then(resp => resp.json())
        .then(data => 
            {
            this.setState({
                filmPopulares: this.state.filmPopulares.concat(data.results),
                backup:this.state.backup.concat(data.results),
                page: this.state.page + 1
            })
        })
        .catch(err => console.log(err))

    }

     //filtro peliculas respecto al form
     filtrarPeliculas(valorInput) {
        let peliculasFiltradas = this.state.backup.filter(
            (elm) => elm.title.toLowerCase().includes (valorInput.toLowerCase()))
            console.log(peliculasFiltradas);

        
        this.setState({
            filmPopulares:peliculasFiltradas
        })
    }

render() {
    return (
      <main>
            <h2 className='titleCartelera'>Peliculas Populares</h2>

            <FormFiltro 
            filtrarPeliculas ={(valorInput)=> this.filtrarPeliculas(valorInput)}/>

            <PopularesContenedor 
            filmPopulares = {this.state.filmPopulares}
            />

            {/* {LOADER DE CARGANDO} */}
            <section className='contenedorVerMas'>
                <button onClick={()=> this.masPopulares()}>
                    Mas peliculas
                </button>
            </section>

        </main>
    )
  }
}
export default TodasPopulares