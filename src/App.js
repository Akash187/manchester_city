import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Jumbotron from "./component/navbar/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbotron/>
        <h1>Hello React</h1>
      </div>
    );
  }
}

export default App;
