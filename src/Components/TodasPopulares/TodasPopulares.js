// import React, { Component } from 'react'
// import PopularesContainer from "../PopularesContainer/index"


// export default class TodasPopulares extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             popular: [],
//             page: 1
//         }
//     }
//     componentDidMount(){
//         fetch("https://api.themoviedb.org/3/movie/popular").then(resp => resp.json()).then(data =>{
//             this.setState ({
//                 popular : data.results.slice(0,10)
//             })
//         })
//         .catch(err => console.log(err))

//     }
//     masPopulares(){
//         fetch("https://api.themoviedb.org/3/movie/popular?page=" + (this.state.page + 1))
//         .then(resp => resp.json())
//         .then(data => {
//             this.setState({
//                 popular: this.state.popular.concat(data.results),
//                 page: this.state.page + 1
//             })
//         })
//         .catch(err => console.log(err))

//     }
// render() {
//     return (
//       <div>
//         <h2>
//             TodasPopulares
//         </h2>
//         <PopularesContainer popular = {this.state.popular}/>
//         <button onClick={this.masPopulares()}>ver mas </button>
//       </div>
//     )
//   }
// }
