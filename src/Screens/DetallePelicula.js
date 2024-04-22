import React, { Component } from 'react'
import Pelicula from '../Components/Pelicula/Pelicula'
import Loader from '../Components/Loader/Loader';
// import "./styles.css"

 class DetallePelicula extends Component {

  constructor(props){
    super(props)
    this.state = {
      filmInfo: [],
      hizoElFetch:false,
      id: this.props.match.params.id
    }
  }
  
  componentDidMount(){
    setTimeout(
      ()=> {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=d3875133e7a115f2dc3fec2ed6786f75` )
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                  filmInfo: data,
                  hizoElFetch:true
                })
                console.log(data);
            })
            .catch(error => console.log(error))
      }, 800
    )
    
  }

  render() {
    // Tenemos que renderizar informacion dependiendo del tipo de pelicula por lo tanto debe de haber un componente de pelicula (dependiendo del id)
    return (
      
        
      this.state.hizoElFetch === false ?
      <Loader/>
      :
      //Usamos el componente de Pelicula.
      <main>
        <Pelicula
            peliculaInfoId={this.state.filmInfo }
        />
      </main>
    
      
    )
  }
}
export default  DetallePelicula