import React from 'react';
import Bounce from 'react-reveal/Bounce';
import {NavLink} from "react-router-dom";
import {database} from "../../firebase/firebase";

class Matches extends React.Component{

  state = {
    matches: []
  };

  componentDidMount(){
    database.ref(`/matches`)
      .on('value', (snapshot) => {
        const matches = [];
        snapshot.forEach((childSnapshot) => {
          matches.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        });
        this.setState({matches: matches.slice(0,8)});
      });
  }

  render() {
    return (
      <div className="matches">
        <div className="container">
          <div className="matches_header">
            <span>Matches</span></div>
          <div className="all_matches">
            {
              this.state.matches.map(match => (
                <Bounce bottom key={match.id}>
                  <div className="match">
                    <div className="match_date">{match.date}</div>
                    <div className="match_team">
                      <div>
                        <img src="" alt="" className="icon" style={{background:`url(/images/team_icons/${match.teamA.replace(/\s/g,'').toLowerCase()}.png)`}}/>
                        <div>{match.teamA}</div>
                      </div>
                      <span className="score">{match.teamA_score}</span>
                    </div>
                    <div className="match_team">
                      <div>
                        <img src="" alt="" className="icon" style={{background:`url(/images/team_icons/${match.teamB.replace(/\s/g,'').toLowerCase()}.png)`}}/>
                        <div>{match.teamB}</div>
                      </div>
                      <span className="score">{match.teamB_score}</span>
                    </div>
                  </div>
                </Bounce>
              ))
            }
          </div>
          <NavLink to="/matches" className="btn">
            <button className="matches_btn">
              See more matches
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Matches;