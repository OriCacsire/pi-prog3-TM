import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Cartel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnText: "Ver descripción",
      contenidoOculto: true,
      textDetalle: "Ir a Detalle",
      favorito: true  
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
    this.props.actualizarState(idPelicula)

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
                <button className='favBtn' onClick={()=> this.removeFavorite(this.props.id)}>❤️ Sacar de Favorito</button>
      }

      </article>
    )
  }
}

export default Cartel