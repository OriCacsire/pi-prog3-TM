import React, { Component } from 'react'
import PopularesContenedor from '../Components/PopularesContenedor/PopularesContenedor'
import FormFiltro from '../Components/FormFiltro/FormFiltro'
import Loader from '../Components/Loader/Loader'

let PeliculasPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=d3875133e7a115f2dc3fec2ed6786f75"

 class TodasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmPopulares: [],
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
            (elm) => elm.title.toLowerCase().includes(valorInput.toLowerCase()))
            console.log(peliculasFiltradas);

        
        this.setState({
            filmPopulares:peliculasFiltradas
        })
    }

render() {
    return (
        this.state.backup.length === 0 ?
        <Loader/>
        :
      <main className='mainVerTodas'>
            <div className='contenedorTitle'>
                <FormFiltro 
                filtrarPeliculas ={(valorInput)=> this.filtrarPeliculas(valorInput)}/>

                <h2 className='titleCartelera'>Peliculas Populares</h2>
            </div>
            

            <PopularesContenedor 
            filmPopulares = {this.state.filmPopulares}
            />

            {/* {LOADER DE CARGANDO} */}
            <article className='BtnVerMas'>
                <button className="BtnVerMasLink" onClick={()=> this.masPopulares()}>
                    Más peliculas
                </button>
                </article>

        </main>
    )
  }
}
export default TodasPopulares