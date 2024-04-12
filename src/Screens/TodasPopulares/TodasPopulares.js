import React, { Component } from 'react'
import {options} from "../../Utils/Constants";

import PopularesContenedor from '../../Components/PopularesContenedor/PopularesContenedor';
import { Link } from 'react-router-dom';
let PeliculasPopulares = `https://api.themoviedb.org/3/movie/popular`


export default class TodasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popular: [],
            page: 1
        }
    }
    componentDidMount(){
        fetch(PeliculasPopulares, options)
        .then(resp => resp.json())
        .then(data =>{
            console.log(data);
            this.setState ({
                popular : data.results.slice(0,10)
            })
        })
        .catch(err => console.log(err))

    }
    masPopulares(){
        fetch(PeliculasPopulares +  '?page='+ (this.state.page + 1),options)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                popular: this.state.popular.concat(data.results),
                page: this.state.page + 1
            })
        })
        .catch(err => console.log(err))

    }
render() {
    return (
      <div>
        <h2>
            TodasPopulares
        </h2>
        <PopularesContenedor filmPopulares = {this.state.popular}/>
        <button onClick={()=>this.masPopulares()}>ver mas </button>
      </div>
    )
  }
}
