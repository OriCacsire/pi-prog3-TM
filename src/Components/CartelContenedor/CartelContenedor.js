import React, { Component } from 'react'
import Cartel from '../Cartel/Cartel'

 class CartelContenedor extends Component {
  constructor(props){ 
    super(this.props)
    this.state = {
      cartelera : []
    }
  }
  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/now_playing")
    .then(resp => resp.json())
    .then(data =>{
      for (let i = 0; i < array.length; i++) {
        
        
      }
    })

  }
  render() {
   
    return (
      <div>
        
      </div>
    )
  }
}

export default CartelContenedor