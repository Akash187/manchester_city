import React from 'react';
import brington from '../../images/logos/brighton.png';
import manchester from '../../images/logos/manchester_city_logo.png';
import {database} from "../../firebase/firebase";

class AllMatches extends React.Component{

  render(){
    return (
      <div className="--all_matches">
        <div className="all_matches_filter">
          <div>
            <div className="all_matches_filter_header">Show Match</div>
            <div className="all_matches_buttons">
              <button className="all_matches_btn">
                All
              </button>
              <button className="all_matches_btn">
                Played
              </button>
              <button className="all_matches_btn">
                Not Player
              </button>
            </div>
          </div>
          <div>
            <div className="all_matches_filter_header">Game Result</div>
            <div className="all_matches_buttons">
              <button className="all_matches_btn">
                All
              </button>
              <button className="all_matches_btn">
                W
              </button>
              <button className="all_matches_btn">
                L
              </button>
              <button className="all_matches_btn">
                D
              </button>
            </div>
          </div>
        </div>
        <div className="all_matches-matches">
          <div className="all_matches-match">
            <div className="all_matches-match-teams">
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={manchester} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Man City
                </div>
                <div className="all_matches-match-team-point">2</div>
              </div>
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={brington} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Brington
                </div>
                <div className="all_matches-match-team-point">1</div>
              </div>
            </div>
            <div className="all_matches-match-info">
              <div>
              <span className="all_matches-match-info-header">
                Date:
              </span>
                <span className="all_matches-match-info-data">
                2017-11-03
              </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Stadium:
            </span>
                <span className="all_matches-match-info-data">
              The Shark Tank Arena The Shark Tank Arena
            </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Referee:
            </span>
                <span className="all_matches-match-info-data">
              Hector Pitana
            </span>
              </div>
            </div>
          </div>
          <div className="all_matches-match">
            <div className="all_matches-match-teams">
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={manchester} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Man City
                </div>
                <div className="all_matches-match-team-point">2</div>
              </div>
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={brington} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Brington
                </div>
                <div className="all_matches-match-team-point">1</div>
              </div>
            </div>
            <div className="all_matches-match-info">
              <div>
              <span className="all_matches-match-info-header">
                Date:
              </span>
                <span className="all_matches-match-info-data">
                2017-11-03
              </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Stadium:
            </span>
                <span className="all_matches-match-info-data">
              The Shark Tank Arena The Shark Tank Arena
            </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Referee:
            </span>
                <span className="all_matches-match-info-data">
              Hector Pitana
            </span>
              </div>
            </div>
          </div>
          <div className="all_matches-match">
            <div className="all_matches-match-teams">
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={manchester} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Man City
                </div>
                <div className="all_matches-match-team-point">2</div>
              </div>
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={brington} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Brington
                </div>
                <div className="all_matches-match-team-point">1</div>
              </div>
            </div>
            <div className="all_matches-match-info">
              <div>
              <span className="all_matches-match-info-header">
                Date:
              </span>
                <span className="all_matches-match-info-data">
                2017-11-03
              </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Stadium:
            </span>
                <span className="all_matches-match-info-data">
              The Shark Tank Arena The Shark Tank Arena
            </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Referee:
            </span>
                <span className="all_matches-match-info-data">
              Hector Pitana
            </span>
              </div>
            </div>
          </div>
          <div className="all_matches-match">
            <div className="all_matches-match-teams">
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={manchester} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Man City
                </div>
                <div className="all_matches-match-team-point">2</div>
              </div>
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={brington} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Brington
                </div>
                <div className="all_matches-match-team-point">1</div>
              </div>
            </div>
            <div className="all_matches-match-info">
              <div>
              <span className="all_matches-match-info-header">
                Date:
              </span>
                <span className="all_matches-match-info-data">
                2017-11-03
              </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Stadium:
            </span>
                <span className="all_matches-match-info-data">
              The Shark Tank Arena The Shark Tank Arena
            </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Referee:
            </span>
                <span className="all_matches-match-info-data">
              Hector Pitana
            </span>
              </div>
            </div>
          </div>
          <div className="all_matches-match">
            <div className="all_matches-match-teams">
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={manchester} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Man City
                </div>
                <div className="all_matches-match-team-point">2</div>
              </div>
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={brington} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Brington
                </div>
                <div className="all_matches-match-team-point">1</div>
              </div>
            </div>
            <div className="all_matches-match-info">
              <div>
              <span className="all_matches-match-info-header">
                Date:
              </span>
                <span className="all_matches-match-info-data">
                2017-11-03
              </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Stadium:
            </span>
                <span className="all_matches-match-info-data">
              The Shark Tank Arena The Shark Tank Arena
            </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Referee:
            </span>
                <span className="all_matches-match-info-data">
              Hector Pitana
            </span>
              </div>
            </div>
          </div>
          <div className="all_matches-match">
            <div className="all_matches-match-teams">
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={manchester} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Man City
                </div>
                <div className="all_matches-match-team-point">2</div>
              </div>
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={brington} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Brington
                </div>
                <div className="all_matches-match-team-point">1</div>
              </div>
            </div>
            <div className="all_matches-match-info">
              <div>
              <span className="all_matches-match-info-header">
                Date:
              </span>
                <span className="all_matches-match-info-data">
                2017-11-03
              </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Stadium:
            </span>
                <span className="all_matches-match-info-data">
              The Shark Tank Arena The Shark Tank Arena
            </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Referee:
            </span>
                <span className="all_matches-match-info-data">
              Hector Pitana
            </span>
              </div>
            </div>
          </div>
          <div className="all_matches-match">
            <div className="all_matches-match-teams">
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={manchester} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Man City
                </div>
                <div className="all_matches-match-team-point">2</div>
              </div>
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={brington} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Brington
                </div>
                <div className="all_matches-match-team-point">1</div>
              </div>
            </div>
            <div className="all_matches-match-info">
              <div>
              <span className="all_matches-match-info-header">
                Date:
              </span>
                <span className="all_matches-match-info-data">
                2017-11-03
              </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Stadium:
            </span>
                <span className="all_matches-match-info-data">
              The Shark Tank Arena The Shark Tank Arena
            </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Referee:
            </span>
                <span className="all_matches-match-info-data">
              Hector Pitana
            </span>
              </div>
            </div>
          </div>
          <div className="all_matches-match">
            <div className="all_matches-match-teams">
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={manchester} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Man City
                </div>
                <div className="all_matches-match-team-point">2</div>
              </div>
              <div className="all_matches-match-team">
                <img className="all_matches-match-team-flag" src={brington} alt="team flag"/>
                <div className="all_matches-match-team-name">
                  Brington
                </div>
                <div className="all_matches-match-team-point">1</div>
              </div>
            </div>
            <div className="all_matches-match-info">
              <div>
              <span className="all_matches-match-info-header">
                Date:
              </span>
                <span className="all_matches-match-info-data">
                2017-11-03
              </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Stadium:
            </span>
                <span className="all_matches-match-info-data">
              The Shark Tank Arena The Shark Tank Arena
            </span>
              </div>
              <div>
            <span className="all_matches-match-info-header">
              Referee:
            </span>
                <span className="all_matches-match-info-data">
              Hector Pitana
            </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AllMatches;