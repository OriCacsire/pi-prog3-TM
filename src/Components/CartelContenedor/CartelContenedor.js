import React, { Component } from 'react'
import "./styles.css"
import Cartel from '../Cartel/Cartel'

 class CartelContenedor extends Component {
  constructor(props){ 
    super(props)
  }
  

  render() {
   
    return (
      <section className='ContenedorCartel'>
        
        {
          this.props.filmsCartel.length === 0 ?
          <h1 className='titles'> Buscando Peliculas ... </h1>
          :
          this.props.filmsCartel.map((peliCartel, idx)=>
          
          <Cartel
          // Envios las props con la inf que se recupera de la api Cartel
          //peliCartel el array
          key={idx+peliCartel}
          id={peliCartel.id}
          imagen ={"https://image.tmdb.org/t/p/w342" + peliCartel.poster_path} //Link de img segun consigna y peliCartel --> parametro y la prop del api
          title={peliCartel.title}
          descripcion = {peliCartel.overview}

          
          />
          
          )
        }

      </section>
    )
  }
}

export default CartelContenedor