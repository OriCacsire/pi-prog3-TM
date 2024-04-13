import React, { Component } from 'react'
import "./styles.css"

class FormFiltro extends Component {
  constructor(props){
    super(props)
    this.state={
      valorInput: ''
    }
  }
  evitarSubmit(evento){
    evento.preventDefault()
  }

  capturarValor(evento){
    this.setState({
      valorInput:evento.target.value
    },
    ()=> this.props.filtrarPeliculas(this.state.valorInput))
  }
  render() {
    return (
      <form onSubmit={(evento)=> 
      this.evitarSubmit(evento)}>
        <input
          className="busqueda"
          placeholder="Busca tu Pelicula"
          name="busqueda"
          type="text" 
          onChange={(event) => this.capturarValor(event)} 
          value={this.state.valorInput}
        />
      </form>
    )
  }
}
export default FormFiltro