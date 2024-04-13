import React, { Component } from 'react'
import FavoritosContenedor from '../Components/FavoritosContenedor/FavoritosContenedor'

class Favorito extends Component {
  constructor(props){
    super(props)
    this.state = {
      favoritos: []
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
                favoritos: data
              })
          })
          .catch(error=>console.log(error))
        
      
    }
  }
  


  render() {
    return (
      <main>
        <FavoritosContenedor 
          filmsFavoritos = {this.state.favoritos}
        />
      </main>
    )
  }
}

export default Favorito