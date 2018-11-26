import React from 'react';
import Otamendi from '../../images/players/Otamendi.png';

const Team = () => {
  return (
    <div className="team">
      <div className="players">
        <div className="player">
          <img src={Otamendi} alt="Otamendi"/>
          <div className="player_jersey_no">30</div>
          <div className="player_name">Nicolas Otamendi</div>
        </div>
        <div className="player">
          <img src={Otamendi} alt="Otamendi"/>
          <div className="player_jersey_no">30</div>
          <div className="player_name">Nicolas Otamendi</div>
        </div>
        <div className="player">
          <img src={Otamendi} alt="Otamendi"/>
          <div className="player_jersey_no">30</div>
          <div className="player_name">Nicolas Otamendi</div>
        </div>
        <div className="player">
          <img src={Otamendi} alt="Otamendi"/>
          <div className="player_jersey_no">30</div>
          <div className="player_name">Nicolas Otamendi</div>
        </div>
      </div>
      <div className="players_header">Meet them here</div>
      <button className="btn">Meet them here</button>
    </div>
  );
};

export default Team;