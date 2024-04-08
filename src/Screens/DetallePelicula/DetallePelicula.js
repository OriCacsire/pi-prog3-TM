import React, { Component } from 'react'
import {options} from "../../Utils/Constants"

export default class DetallePelicula extends Component {

  constructor(props){
    super(props)
    this.state = {
      filmPopulares: [],
      id: this.props.match.params.id
    }
  }
  

  componentDidMount(){

      fetch("https://api.themoviedb.org/3/movie/" + this.state.id, options)
          .then(resp => resp.json())
          .then(data => {
              this.setState({
                  filmPopulares: data
              })
              console.log(data);
          })
          .catch(error => console.log(error))
    
  }
  

  render() {

    
    
    return (
      <main>
        <h2>{this.state.filmPopulares.original_title}</h2>
      </main>
    )
  }
}
