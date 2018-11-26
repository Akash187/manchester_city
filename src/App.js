import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Jumbotron from "./component/navbar/Jumbotron";
import Matches from "./component/matches/Matches";
import Team from "./component/team/Team";
import Extra from "./component/extra/Extra";
import Footer from "./component/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbotron/>
        <Matches/>
        <Team/>
        <Extra/>
        <Footer/>
      </div>
    );
  }
}

export default App;
