import React, { Component } from 'react'
import "./styles.css"

class Pelicula extends Component {

  constructor(props){
    super(props)
        this.state={
          favorito: false
    }
}


componentDidMount() {
 //Chequeo si está en favoritos
this.checkFavorite()
}

checkFavorite(){
let favoritoStringificado = localStorage.getItem("Favoritos")
if (favoritoStringificado !== null) {
  let arrParseado = JSON.parse(favoritoStringificado)
  let favorito = arrParseado.includes(this.props.peliculaInfoId.id)
  this.setState({favorito : favorito})
}
}

// Método para agregar una pelicula de cartel a la lista de favoritos en el almacenamiento local
addFavorite(idPelicula) {
// Obtener la lista de favoritos del almacenamiento local
let storageFav = localStorage.getItem('Favoritos');
// Verificar si la lista de favoritos está vacía (null)
if (storageFav === null) {
  // Si está vacía, crear un nuevo array con los id de peliculas
  let arrIds = [idPelicula];
  // Convertir el array a una cadena JSON
  let arrStringificado = JSON.stringify(arrIds);
  // Guardar la cadena JSON en el almacenamiento local con la clave 'Favoritos'
  localStorage.setItem('Favoritos', arrStringificado);
} else {
  // Si la lista de favoritos no está vacía, analizar (parsear) la cadena JSON en un array
  let arrParseado = JSON.parse(storageFav);
  // Agregar el id del personaje al array
  arrParseado.push(idPelicula);
  // Convertir el array actualizado a una cadena JSON
  let arrStringificado = JSON.stringify(arrParseado);
  // Guardar la cadena JSON actualizada en el almacenamiento local
  localStorage.setItem('Favoritos', arrStringificado);
}
// Actualizar el estado de 'favorito' del componente a true
this.setState({
  favorito: true
});
}

// Método para eliminar un personaje de la lista de favoritos en el almacenamiento local
removeFavorite(idPelicula) {
// Obtener la lista de favoritos del almacenamiento local
let storageFav = localStorage.getItem('Favoritos');
// Analizar (parsear) la cadena JSON en un array
let arrParseado = JSON.parse(storageFav);
// Filtrar los elementos del array para eliminar el id del personaje especificado
let favsFiltrados = arrParseado.filter((id) => id !== idPelicula);
// Convertir el array filtrado a una cadena JSON
let arrStringificado = JSON.stringify(favsFiltrados);
// Guardar la cadena JSON actualizada en el almacenamiento local
localStorage.setItem('Favoritos', arrStringificado);
// Actualizar el estado de 'favorito' del componente a false
this.setState({
  favorito: false
});
}

  render() {
    // let generos = this.props.peliculaInfoId.genres
    // console.log(generos)
    return (

      <article className='contenerPelicula'>
        <div className='divImgPeli'>
          <img  className='imgDetalle' src={'https://image.tmdb.org/t/p/w500' + this.props.peliculaInfoId.poster_path} alt='img'></img>
        </div>

        <div className='contenidoPelicula'>
          <h1 className='TituloFilm'>Movie: {this.props.peliculaInfoId.title}</h1>
          {/* Como generos es un array se debe recorrer con map y mostrar el genero */}

          <ul className='generoList'>
            {
              (this.props.peliculaInfoId.genres).map((genre, idx) =>
                <li className="liGeneroList" key={idx + genre} >
                  {genre.name}
                </li>
              )}
          </ul>
          <p className='sinopsis'><strong>Sinópsis: </strong>{this.props.peliculaInfoId.overview}</p>
          <p className='descripcionRating'><strong>Rating: </strong> {this.props.peliculaInfoId.vote_average}</p>
          <p className='fechaEstreno'><strong>Fecha de Estreno:</strong> {this.props.peliculaInfoId.release_date}</p>
          <p className='duracion'><strong>Duración: </strong>{this.props.peliculaInfoId.runtime}</p>

          {/* tira ERROR porque falta plantear el fav acá*/}
          {this.state.favorito ?
            <button className='descripBtn' onClick={() => this.removeFavorite(this.props.peliculaInfoId.id)}>❤️ Sacar de Favorito</button>
            :
            <button className='descripBtn' onClick={() => this.addFavorite(this.props.peliculaInfoId.id)}>🩶 Agregar a Favorito</button>
          }
        </div>

      </article>
    )
  }
}


export default Pelicula