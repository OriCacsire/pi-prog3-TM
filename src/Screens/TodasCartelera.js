import React, { Component } from 'react'
import CartelContenedor from '../Components/CartelContenedor/CartelContenedor'
import FormFiltro from '../Components/FormFiltro/FormFiltro'
import Loader from '../Components/Loader/Loader'

//api a usar
let PeliculasCartel = "https://api.themoviedb.org/3/movie/top_rated?api_key=d3875133e7a115f2dc3fec2ed6786f75"

class TodasCartelera extends Component {
    constructor(props){
        super(props)
        this.state={
            filmsCartel:[],
            // favorito:localStorage.getItem("favorito") || [],
            backup:[],
            page:1
        }
    }

    componentDidMount(){
        // DEBEN MOSTRAR SOLO 5, NO ME LO TOMA?
        fetch(PeliculasCartel)
        .then(resp=>resp.json())
        .then(data => {
            console.log(data)
            this.setState({
            filmsCartel:data.results,
            backup:data.results,
            page: this.state.page + 1

            })
        })
        .catch(error=>console.log(error))
    }

    //traemosMas pelis
    traerMasPeliculas(){
        fetch(`${PeliculasCartel}&page=${(this.state.page +1)}`)
        .then(resp => resp.json())
        .then(data => 
            {
                console.log(data)
                this.setState({
                            filmsCartel:this.state.filmsCartel.concat(data.results),
                            backup:this.state.backup.concat(data.results),
                            page:this.state.page + 1,

                        })
            }
           )
        .catch(error => console.log(error))
    }
    //filtro peliculas respecto al form
    filtrarPeliculas(valorInput) {
        let peliculasFiltradas = this.state.backup.filter(
            (elm) => elm.title.toLowerCase().includes(valorInput.toLowerCase()))
            console.log(peliculasFiltradas);

        
        this.setState({
            filmsCartel:peliculasFiltradas
        })
    }

    // actualizar favoritos EN BASE A HECHO EN CLASE
    // actualizarFavoritos(arrStorage){
    //     this.setState({
    //         favorito:arrStorage
    //     })
    // }
   
    render() {
    return (
        this.state.backup.length === 0 ?
        <Loader/>
        :
        <main className='mainVerTodas'>
            <div className='contenedorTitle'>
                <FormFiltro 
                filtrarPeliculas ={(valorInput)=> this.filtrarPeliculas(valorInput)}/>
                <h2 className='titleCartelera'>Peliculas en Cartelera</h2>
            </div>

            <CartelContenedor 
            filmsCartel = {this.state.filmsCartel}
            />

            {/* {LOADER DE CARGANDO} */}
            <article className='BtnVerMas'>
                <button className="BtnVerMasLink" onClick={()=> this.traerMasPeliculas()}>
                    Más peliculas
                </button>
                </article>

        </main>
        
    )
  }
}

export default TodasCartelera