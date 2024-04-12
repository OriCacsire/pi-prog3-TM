import React, { Component } from 'react'
import Populares from '../Populares/Populares'
import "./styles.css"

class PopularesContenedor extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <section className='ContenedorPopulares'>
        
        {
          this.props.filmPopulares.length === 0 ?
          <h1 className='titles'> Buscando Peliculas ... </h1>
          :
          this.props.filmPopulares.map((peliPop, idx)=>
          
          <Populares
          // Envios las props con la inf que se recupera de la api Cartel
          //peliPop el array
          key={idx+peliPop}
          id={peliPop.id}
          imagen ={"https://image.tmdb.org/t/p/w342" + peliPop.poster_path} //Link de img segun consigna y peliPop --> parametro y la prop del api
          title={peliPop.title}
          descripcion = {peliPop.overview}

          
          />
          )
        }

      </section>
    )
  }
}

export default PopularesContenedor