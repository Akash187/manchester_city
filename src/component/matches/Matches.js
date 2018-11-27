import React from 'react';
import brigton from '../../images/team_icons/brighton.png';

const Matches = (props) => {
  return(
    <div className="matches">
      <div className="matches_container">
      <div className="matches_header">
<span>Matches</span></div>
        <div className="all_matches">
      <div className="match">
        <div className="match_date">2018-11-26</div>
        <div className="match_team">
          <div>
            <img src={brigton} alt="Brigton Flag"/>
            <div>Brigton</div>
          </div>
          <span className="score">1</span>
        </div>
        <div className="match_team">
          <div>
            <img src={brigton} alt="Brigton Flag"/>
            <div>Brigton</div>
          </div>
          <span className="score">1</span>
        </div>
      </div>
      <div className="match">
        <div className="match_date">2018-11-26</div>
        <div className="match_team">
          <div>
            <img src={brigton} alt="Brigton Flag"/>
            <div>Brigton</div>
          </div>
          <span className="score">1</span>
        </div>
        <div className="match_team">
          <div>
            <img src={brigton} alt="Brigton Flag"/>
            <div>Brigton</div>
          </div>
          <span className="score">1</span>
        </div>
      </div>
          <div className="match">
            <div className="match_date">2018-11-26</div>
            <div className="match_team">
              <div>
                <img src={brigton} alt="Brigton Flag"/>
                <div>Brigton</div>
              </div>
              <span className="score">1</span>
            </div>
            <div className="match_team">
              <div>
                <img src={brigton} alt="Brigton Flag"/>
                <div>Brigton</div>
              </div>
              <span className="score">1</span>
            </div>
          </div>
          <div className="match">
            <div className="match_date">2018-11-26</div>
            <div className="match_team">
              <div>
                <img src={brigton} alt="Brigton Flag"/>
                <div>Brigton</div>
              </div>
              <span className="score">1</span>
            </div>
            <div className="match_team">
              <div>
                <img src={brigton} alt="Brigton Flag"/>
                <div>Brigton</div>
              </div>
              <span className="score">1</span>
            </div>
          </div>
        </div>
        <button className="matches_btn">See more matches</button>
      </div>
    </div>
  );
};

export default Matches;