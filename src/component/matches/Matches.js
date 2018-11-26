import React from 'react';
import brigton from '../../images/team_icons/brighton.png';

const Matches = (props) => {
  return(
    <div className="matches">
      <div className="matches_header">Matches</div>
      <div className="match">
        <div className="match_date">2018-11-26</div>
        <div className="match_team">
          <img src={brigton} alt="Brigton Flag"/>
          <div>Brigton</div>
          <div className="score">1</div>
        </div>
        <div className="match_team">
          <img src={brigton} alt="Brigton Flag"/>
          <div>Brigton</div>
          <div className="score">1</div>
        </div>
      </div>
      <div className="match">
        <div className="match_date">2018-11-26</div>
        <div className="match_team">
          <img src={brigton} alt="Brigton Flag"/>
          <div>Brigton</div>
          <div className="score">1</div>
        </div>
        <div className="match_team">
          <img src={brigton} alt="Brigton Flag"/>
          <div>Brigton</div>
          <div className="score">1</div>
        </div>
      </div>
      <div className="match">
        <div className="match_date">2018-11-26</div>
        <div className="match_team">
          <img src={brigton} alt="Brigton Flag"/>
          <div>Brigton</div>
          <div className="score">1</div>
        </div>
        <div className="match_team">
          <img src={brigton} alt="Brigton Flag"/>
          <div>Brigton</div>
          <div className="score">1</div>
        </div>
      </div>
      <div className="match">
        <div className="match_date">2018-11-26</div>
        <div className="match_team">
          <img src={brigton} alt="Brigton Flag"/>
          <div>Brigton</div>
          <div className="score">1</div>
        </div>
        <div className="match_team">
          <img src={brigton} alt="Brigton Flag"/>
          <div>Brigton</div>
          <div className="score">1</div>
        </div>
      </div>
      <button className="btn">See more matches</button>
    </div>
  );
};

export default Matches;