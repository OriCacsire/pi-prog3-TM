import React, { Component } from 'react'
import { Link } from "react-router-dom"


class Cartel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnText: "Ver descripción",
      contenidoOculto: true,
      textDetalle: "Ir a Detalle",
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
      let favorito = arrParseado.includes(this.props.id)
      this.setState({favorito : favorito})
    }
  }
 
  ocultarYMostrarContenido(){
    this.state.contenidoOculto === true ?
    this.setState({
      contenidoOculto: false,
      btnText:"Ocultar Descripción"
    })

    :

    this.setState({
      contenidoOculto:true,
      btnText: "Ver descripción"
    })
  }


  //PUNTO 9 REVISAR CUANDO SE HAGA EL COMPONENTE DE FAVORITOS

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
    return (
      
      <article className='articleMovie'>
        
        {/* la informacion de las props se recibe de cartelContenedor */}
        <img className='imgHomeCartel' src= {this.props.imagen} alt ="img"/>

        <h1 className='TituloFilm'>{this.props.title}</h1>

        {
          this.state.contenidoOculto ?
          ""
          :
          <p>{this.props.descripcion}</p>
        }

        <button className='descripBtn' 
        onClick={()=> this.ocultarYMostrarContenido() }>
          
          {this.state.btnText}
        
        </button>
        
       {/* agregar ruta en app y crear una screens */}
      <Link to = {`/detallePelicula/id/${this.props.id}`}>
        
        <p className='detalleBtn'>{this.state.textDetalle}</p> 

      </Link>

      {
                this.state.favorito  ?
                <button className='descripBtn' onClick={()=> this.removeFavorite(this.props.id)}>❤️ Sacar de Favorito</button>
                :
                <button className='descripBtn' onClick={()=> this.addFavorite(this.props.id)}>🩶 Agregar a Favorito</button>

      
      }

      </article>
    )
  }
}

export default Cartel