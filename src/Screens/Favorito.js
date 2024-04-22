import React, { Component } from 'react'
import FavoritosContenedor from '../Components/FavoritosContenedor/FavoritosContenedor'
import Loader from '../Components/Loader/Loader'

class Favorito extends Component {
  constructor(props){
    super(props)
    this.state = {
      favoritos: [],
      cargoFavoritos: false      
    }
  }



  componentDidMount() {
    let arrStringificado = localStorage.getItem("Favoritos")
    let arrParseado = JSON.parse(arrStringificado);
    if (arrParseado !== null) {
      Promise.all(
        arrParseado.map((elm, idx) => fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=d3875133e7a115f2dc3fec2ed6786f75`)
          .then(resp=>resp.json()))
      )
          .then(data => {
              this.setState({
                favoritos: data,
                cargoFavoritos: true
              })
          })
          .catch(error=>console.log(error))
        
      
    }
  }
  

  actualizarState(idPelicula){
    console.log(this.state.favoritos);
    let stateActualizado = this.state.favoritos.filter((filmFav) => filmFav.id !== idPelicula)
    this.setState({favoritos: stateActualizado})
  }

  render() {
    return (
      
      this.state.cargoFavoritos === false ?
        <Loader/>
        :
        this.state.favoritos.length === 0 ?
          <main>
            <h1 className='titles'>No hay favoritos</h1>
          </main>
          :
          <main className='mainFavorito'>
            <h2 className="titles">Favoritos</h2>
            <FavoritosContenedor 
              actualizarState={(idPelicula) => this.actualizarState(idPelicula)}
              filmsFavoritos={this.state.favoritos}
            />
          </main>
    )
  }
}

export default Favorito