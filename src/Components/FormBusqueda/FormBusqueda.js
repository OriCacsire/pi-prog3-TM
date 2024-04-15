import React, { Component } from 'react'

export default class FormBusqueda extends Component {
  render() {
    return (
        <div className="formularioSearch">
                
        <form>
            <input type="search" className="searchInput" name="busqueda" placeholder="Buscar..." />
            <button className="searchInput" type="submit"><i
                className="fa-solid fa-magnifying-glass fa-beat-fade"></i></button>
        </form>
        </div>
    )
  }
}


