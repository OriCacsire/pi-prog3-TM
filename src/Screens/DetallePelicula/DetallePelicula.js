import React, { Component } from 'react'
import Pelicula from '../../Components/Pelicula/Pelicula'
import "./styles.css"

 class DetallePelicula extends Component {

  constructor(props){
    super(props)
    this.state = {
      filmInfo: null,
      id: this.props.match.params.id
    }
  }
  

  componentDidMount(){
      fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=d3875133e7a115f2dc3fec2ed6786f75` )
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
      </main>
    )
  }
}
export default  DetallePelicula