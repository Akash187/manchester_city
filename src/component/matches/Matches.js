import React from 'react';
import Bounce from 'react-reveal/Bounce';
import brigton from '../../images/logos/brighton.png';
import {NavLink} from "react-router-dom";

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
        <NavLink to="/matches" className="btn">
        <button className="matches_btn">
          See more matches
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Matches;