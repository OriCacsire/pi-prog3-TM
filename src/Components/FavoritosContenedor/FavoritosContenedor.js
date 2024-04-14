import React, { Component } from 'react'
import FavoritoCard from "../FavoritoCard/FavoritoCard" 
import "./styles.css"

 class FavoritosContenedor extends Component {
  constructor(props){ 
    super(props)
  }
  





  render() {
   
    return (
      <section className='ContenedorCartel'>
        
        {
          this.props.filmsFavoritos.length === 0 ?
          <h1 className='titles'>No hay favoritos</h1>
          :
          this.props.filmsFavoritos.map((peliFavs, idx)=>
            <FavoritoCard
            key={idx+peliFavs}
            id={peliFavs.id}
            imagen ={"https://image.tmdb.org/t/p/w342" + peliFavs.poster_path} //Link de img segun consigna y peliCartel --> parametro y la prop del api
            title={peliFavs.title}
            descripcion = {peliFavs.overview}
            actualizarState = {this.props.actualizarState ? (idpelicula) => this.props.actualizarState(idpelicula) : false}
            />
          
          )
        }

      </section>
    )
  }
}

export default FavoritosContenedor