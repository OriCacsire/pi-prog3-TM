import React, { Component } from 'react'
import "./styles.css"

class Pelicula extends Component {

  constructor(props) {
    super(props)
    this.state = {
      //ver si es favorito o no lo es -->se agrega o no se agrega 
    }
  }
  // agregar el componentDidmount
  // agregarfav
  // sacafav
  render() {
    // let generos = this.props.peliculaInfoId.genres
    // console.log(generos)
    return (

      <article className='contenerPelicula'>
        <div>
          <img className='imgPeli' src={'https://image.tmdb.org/t/p/w500' + this.props.peliculaInfoId.poster_path}></img>
        </div>

        <div>
          <h1 className='TituloFilm'>Movie: {this.props.peliculaInfoId.title}</h1>
          {/* Como generos es un array se debe recorrer con map y mostrar el genero */}

          <ul className='generoList'>
            {
              (this.props.peliculaInfoId.genres).map((genre) =>
                <li>
                  {genre.name}
                </li>
              )}

          </ul>
          <p className='sinopsis'>Sinópsis:{this.props.peliculaInfoId.overview}</p>
          <p className='descripcionRating'>Rating: {this.props.peliculaInfoId.vote_average}</p>
          <p className='fechaEstreno'>Fecha de Estreno: {this.props.peliculaInfoId.release_date}</p>
          <p className='duracion'>Duración:{this.props.peliculaInfoId.runtime}</p>

          {/* tira ERROR porque falta plantear el fav acá*/}
          {this.state.favorito ?
            <button className='favBtn' onClick={() => this.removeFavorite(this.props.peliculaInfoId.id)}>❤️ Sacar de Favorito</button>
            :
            <button onClick={() => this.addFavorite(this.props.peliculaInfoId.id)}>🩶 Agregar a Favorito</button>
          }
        </div>

      </article>
    )
  }
}


export default Pelicula