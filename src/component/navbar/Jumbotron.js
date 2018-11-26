import React from 'react';
import featured_player from '../../images/featured_player.png';

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron_flag">
        <div/>
        <div/>
        <div/>
      </div>
      <div className="jumbotron_image">
        <img src={featured_player} alt="Featured Player"/>
      </div>
      <div className="jumbotron_text">
        <div>3</div>
        <div>League</div>
        <div>Championships</div>
      </div>
    </div>
  )
};

export default Jumbotron;