import React from 'react';
import Otamendi from '../../images/players/Otamendi.png';
import Roll from 'react-reveal/Roll';
import {NavLink} from "react-router-dom";

const Team = () => {
  return (
    <div className="team">
      <div className="container team_container">
        <div className="players">
          <Roll left>
            <div className="player player_first">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Roll>
          <Roll top>
            <div className="player player_second">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Roll>
          <Roll right>
            <div className="player player_third">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Roll>
          <Roll bottom>
            <div className="player player_fourth">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Roll>
        </div>
        <div>
          <div className="players_header">
            <div><span>meet</span></div>
            <div><span>the</span></div>
            <div><span>players</span></div>
          </div>
          <button className="players_btn">
            <NavLink to="/the_team" className="btn">meet them here</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;