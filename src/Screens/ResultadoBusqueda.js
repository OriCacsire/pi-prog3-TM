import React, { Component } from 'react'
import ResultadosContenedor from '../Components/ResultadosContenedor/ResultadosContenedor'
import Loader from '../Components/Loader/Loader'

export default class ResultadoBusqueda extends Component {
  constructor(props) {
    super(props)
    this.state = {
      busqueda: [],
      cargoBusqueda: false
    }

  }
  componentDidMount() {
    console.log(this.props.match.params.busqueda);
   fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.busqueda}&include_adult=false&language=en-US&page=1&api_key=d3875133e7a115f2dc3fec2ed6786f75`)

      .then(resp => resp.json())
      .then(data => {
        this.setState({
          busqueda: data.results,
          cargoBusqueda: true

        })
      })
      .catch(err => console.log(err))
  }

  //Después de que el componente se ha montado, si this.props.match.params.busqueda cambia (por ejemplo, porque el usuario realiza una nueva búsqueda), componentDidUpdate() se activa y realiza otra solicitud a la API con el nuevo parámetro de búsqueda. Se actualiza la busqueda cuando estamos en la pagina de resultado busqueda
  componentDidUpdate() {
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
      this.state.cargoBusqueda === false ?
      <Loader/>
      :
      this.state.busqueda.length !==0 ? 
        <main>
          <section className='sectionBusqueda'>
              <h2> Resultado busqueda: {this.props.match.params.busqueda} </h2>
          <ResultadosContenedor busqueda= {this.state.busqueda}/>  
          </section>
        </main>
        :
        <main>
          <h2>
            No se encontraron resultados para lo ingresado: {this.props.match.params.busqueda}</h2>
        </main>
    )
  }
}
