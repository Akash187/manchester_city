import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Intro from "../intro/Intro";
import TheTeam from "../theteam/TheTeam";


const Routes = () => (
  <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Intro}/>
        <Route exact path="/the_team" component={TheTeam}/>
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
);

export default Routes;