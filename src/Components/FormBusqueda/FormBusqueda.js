import React, { Component } from 'react'
import { Link } from "react-router-dom"

class FormBusqueda extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valor: ""
    }
  }
  evitarSubmit(evento) {
    evento.preventDefault()
    this.props.history.push('/busqueda/' + this.state.valor)
  }
  contolarCambios(evento) {
    this.setState({ valor: evento.target.value })
  }
  render() {
    return (
      <div className="formularioSearch">

        <form onSubmit={(evento) => this.evitarSubmit(evento)}>
          <input 
          type="search" 
          className="searchInput" 
          name="busqueda" 
          placeholder="Buscar..." 
          onChange={(evento) => this.contolarCambios(evento)} value={this.state.valor} />
          
          <Link to={`/busqueda/${this.state.valor}`}>
            <button className="searchInput" type="submit" ><i className="fa-solid fa-magnifying-glass fa-beat-fade"></i></button>
          </Link>

        </form>
      </div>
    )
  }
}
export default FormBusqueda


