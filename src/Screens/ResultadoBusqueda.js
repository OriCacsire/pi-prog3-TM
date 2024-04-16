import React, { Component } from 'react'
import ResultadosContenedor from '../Components/ResultadosContenedor/ResultadosContenedor'

export default class ResultadoBusqueda extends Component {
  constructor(props){
    super(props)
    this.state={
      busqueda: []
    }
  }
  componentDidMount(){
    console.log(this.props.match.params.busqueda);
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.busqueda}&include_adult=false&language=en-US&page=1&api_key=d3875133e7a115f2dc3fec2ed6786f75`)
    
    .then(resp=> resp.json())
    .then(data =>{
      this.setState({
        busqueda: data.results
      })
    })
    .catch(err=> console.log(err))
  }

  render() {
    return (
      this.state.busqueda.length !==0 ? 
      <section className='sectionBusqueda'>
           <h2> Resultado busqueda: {this.props.match.params.busqueda} </h2>
      <ResultadosContenedor busqueda= {this.state.busqueda}/>  
      </section>
      :
      <h2>No se encontraron resultados para lo ingresado: {this.props.match.params.busqueda}</h2>
      
    )
  }
}
