import React, {Component} from 'react';
import './App.css';

import Header from './Components/Core/Header'
import Footer from './Components//Core/Footer'
import MainBody from './Components//Core/MainBody'

import axios from "axios"

export default class App extends Component {
constructor() {
  super();
  this.state = 
  {
    courses: []
  }
}

componentDidMount = () => {
  axios.get("/csb/data")
  .then(response => {
    console.log(response.data[0].Courses);
    this.setState({courses : response.data[0].Courses})
  })
}


render(){
  return (

  <div className="App">
    <Header/>
    <MainBody data={this.state.courses}/>
    <Footer/>
  </div>
  
  );
}
}

