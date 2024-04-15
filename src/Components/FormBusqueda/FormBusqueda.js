import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class FormBusqueda extends Component {
  constructor(props){
    super(props)
    this.state={
      valor:""
    }
  }
  evitarSubmit(event){
    event.preventDefault()
    this.props.history.push('/busqueda/'+this.state.valor)
  }
  contolarCambios(event){
    this.setState({valor : event.target.value})
  }
  render() {
    return (
        <div className="formularioSearch">
                
        <form onSubmit={(event)=>this.evitarSubmit(event)}>
            <input type="search" className="searchInput" name="busqueda" placeholder="Buscar..."  onChange={(event)=>this.contolarCambios(event)} value={this.state.valor}/>
            <button className="searchInput" type="submit" ><i className="fa-solid fa-magnifying-glass fa-beat-fade"></i></button>
        </form>
        </div>
    )
  }
}


