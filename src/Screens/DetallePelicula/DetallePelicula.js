import React, { Component } from 'react'
import Pelicula from '../../Components/Pelicula/Pelicula'
import {options} from "../../Utils/Constants"
import "./styles.css"

export default class DetallePelicula extends Component {

  constructor(props){
    super(props)
    this.state = {
      filmInfo: null,
      id: this.props.match.params.id
    }
  }
  

  componentDidMount(){

      fetch("https://api.themoviedb.org/3/movie/" + this.state.id, options)
          .then(resp => resp.json())
          .then(data => {
              this.setState({
                filmInfo: data
              })
              console.log(data);
          })
          .catch(error => console.log(error))
    
  }

  render() {
    // Tenemos que renderizar informacion dependiendo del tipo de pelicula por lo tanto debe de haber un componente de pelicula (dependiendo del id)
    return (
      <main className='mainDetallePelicula'>
        {
        this.state.filmInfo === null ?
        <section className='loaderData'> 
        {/* punto 8 de loader puede ir un gif VER LUEGO */}
          <h2 className='titulos'>Cargando...</h2>
        </section>
      :
      //Usamos el componente de Pelicula.
      <Pelicula
          peliculaInfoId={this.state.filmInfo }
      />

      
      }
       {/* <h2>{this.state.filmInfo.original_title}</h2> */}
      </main>
    )
  }
}
