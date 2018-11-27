import React from 'react';
import Jumbotron from "../navbar/Jumbotron";
import Matches from "../matches/Matches";
import Team from "../team/Team";
import Extra from "../extra/Extra";

const Intro = () => {
  return (
    <div>
      <Jumbotron/>
      <Matches/>
      <Team/>
      <Extra/>
    </div>
  )
};

export default Intro;