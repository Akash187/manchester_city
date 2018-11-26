import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Jumbotron from "./component/navbar/Jumbotron";
import Matches from "./component/matches/Matches";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbotron/>
        <Matches/>
      </div>
    );
  }
}

export default App;
