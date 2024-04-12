import React, { Component } from 'react'
import "./styles.css"

class Pelicula extends Component {

    constructor(props){
        super(props)
            this.state={
                //ver si es favorito o no lo es -->se agrega o no se agrega 
        }
    }
  render() {
    // let generos = this.props.peliculaInfoId.genres
    // console.log(generos)
    return (
        
      <article className='contenerPelicula'>
        <img className='imgPeli' src={'https://image.tmdb.org/t/p/w500'+ this.props.peliculaInfoId.poster_path}></img>
        <h1 className='TituloFilm'>Título: {this.props.peliculaInfoId.title}</h1>
        <p className='descripcionRating'>Rating: {this.props.peliculaInfoId.vote_average}</p>
        <p className='fechaEstreno'>Fecha de Estreno: {this.props.peliculaInfoId.release_date}</p>
        <p className='duracion'>Duración:{this.props.peliculaInfoId.runtime}</p>
        <p className='sinopsis'>Sinópsis:{this.props.peliculaInfoId.overview}</p>
        {/* Como generos es un array se debe recorrer con map y mostrar el genero */}

        <ul className='generoList'> 
        Géneros: {
            (this.props.peliculaInfoId.genres).map((genre)=>
               <li>
                    {genre.name}
               </li>
            )}
         
        </ul>

        {this.state.favorito  ?
                <button className='favBtn' onClick={()=> this.removeFavorite(this.props.peliculaInfoId.id)}>❤️ Sacar de Favorito</button>
                :
                <button onClick={()=> this.addFavorite(this.props.peliculaInfoId.id)}>🩶 Agregar a Favorito</button>
        }
      </article>
    )
  }
}


export default Pelicula