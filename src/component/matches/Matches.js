import React from 'react';
import Bounce from 'react-reveal/Bounce';
import brigton from '../../images/team_icons/brighton.png';

const Matches = (props) => {
  return (
    <div className="matches">
      <div className="container">
        <div className="matches_header">
          <span>Matches</span></div>
        <div className="all_matches">
          <Bounce bottom>
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
          </Bounce>
          <Bounce bottom>
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
          </Bounce>
          <Bounce bottom>
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
          </Bounce>
          <Bounce bottom>
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
          </Bounce>
        </div>
        <button className="matches_btn">See more matches</button>
      </div>
    </div>
  );
};

export default Matches;