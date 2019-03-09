import React from 'react';
import {database} from "../../firebase/firebase";

class AllMatches extends React.Component{

  state = {
    matches: [],
    filteredMatches: [],
    showMatch: 'match_all',
    gameResult: 'game_all'
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
        this.setState({matches, filteredMatches: matches});
      });
    document.getElementById(this.state.showMatch).style.background = "green";
    document.getElementById(this.state.gameResult).style.background = "green";
  }

  filterMatch = (filter) => {
    if(filter === 'match_all' || filter === 'played' || filter === 'not_played') {
      this.setState(() => ({showMatch: filter}), () => this.showFilteredMatch());
      document.getElementById(this.state.showMatch).style.background = "white";
    }else{
      this.setState(() => ({gameResult: filter}), () => this.showFilteredMatch());
      document.getElementById(this.state.gameResult).style.background = "white";
    }
    document.getElementById(filter).style.background = "green";
  };

  showFilteredMatch = () => {
    let selectedShowMatch = this.state.showMatch;
    let selectedGameResult = this.state.gameResult;
    if(selectedShowMatch === 'match_all'){
      if(selectedGameResult === 'game_all'){
        this.gameResultAll();
      }else if(selectedGameResult === 'win'){
        this.gameResultWin();
      }else if(selectedGameResult === 'loss'){
        this.gameResultLoss();
      }else{
        this.gameResultDraw();
      }
    }else if(selectedShowMatch === 'played'){
      if(selectedGameResult === 'game_all'){
        let tempMatches = this.state.matches.filter((match) => {
          return match.status === 'Final';
        });
        this.setState({filteredMatches: tempMatches});
      }else if(selectedGameResult === 'win'){
        this.gameResultWin();
      }else if(selectedGameResult === 'loss'){
        this.gameResultLoss();
      }else{
        this.gameResultDraw();
      }
    }else if(selectedShowMatch === 'not_played'){
      let tempMatches = this.state.matches.filter((match) => {
        return match.status !== 'Final';
      });
      this.setState({filteredMatches: tempMatches});
    }
  };

  gameResultAll = () => {
    this.setState({filteredMatches: this.state.matches});
  };

  gameResultWin = () => {
    let tempMatches = this.state.matches.filter((match) => {
      if(match.teamA === 'Manchester City'){
        return match.teamA_score > match.teamB_score;
      }else{
        return match.teamA_score < match.teamB_score;
      }
    });
    this.setState({filteredMatches: tempMatches});
  };

  gameResultLoss = () => {
    let tempMatches = this.state.matches.filter((match) => {
      if(match.teamA === 'Manchester City'){
        return match.teamA_score < match.teamB_score;
      }else{
        return match.teamA_score > match.teamB_score;
      }
    });
    this.setState({filteredMatches: tempMatches});
  };

  gameResultDraw = () => {
    let tempMatches = this.state.matches.filter((match) => {
      return match.teamA_score === match.teamB_score && match.teamA_score;
    });
    this.setState({filteredMatches: tempMatches});
  };

  render(){
    return (
      <div className="--all_matches">
        <div className="all_matches_filter">
          <div>
            <div className="all_matches_filter_header">Show Match</div>
            <div className="all_matches_buttons">
              <button id="match_all" className="all_matches_btn" onClick={() => this.filterMatch('match_all')}>
                All
              </button>
              <button id="played" className="all_matches_btn" onClick={() => this.filterMatch('played')}>
                Played
              </button>
              <button id="not_played" className="all_matches_btn" onClick={() => this.filterMatch('not_played')}>
                Not Played
              </button>
            </div>
          </div>
          <div>
            <div className="all_matches_filter_header">Game Result</div>
            <div className="all_matches_buttons">
              <button id="game_all" className="all_matches_btn" onClick={() => this.filterMatch('game_all')}>
                All
              </button>
              <button id="win" className="all_matches_btn" onClick={() => this.filterMatch('win')}>
                W
              </button>
              <button id="loss" className="all_matches_btn" onClick={() => this.filterMatch('loss')}>
                L
              </button>
              <button id="draw" className="all_matches_btn" onClick={() => this.filterMatch('draw')}>
                D
              </button>
            </div>
          </div>
        </div>
        <div className="all_matches-matches">
          {this.state.filteredMatches.map(match => (
            <div className="all_matches-match" key={match.id}>
              <div className="all_matches-match-teams">
                <div className="all_matches-match-team">
                  <div className="all_matches-match-team-flag" style={{background:`url(/images/team_icons/${match.teamA.replace(/\s/g,'').toLowerCase()}.png)`}}/>
                  <div className="all_matches-match-team-name">
                    {match.teamA}
                  </div>
                  <div className="all_matches-match-team-point">{match.teamA_score}</div>
                </div>
                <div className="all_matches-match-team">
                  <div className="all_matches-match-team-flag" style={{background:`url(/images/team_icons/${match.teamB.replace(/\s/g, '').toLowerCase()}.png)`}}/>
                  <div className="all_matches-match-team-name">
                    {match.teamB}
                  </div>
                  <div className="all_matches-match-team-point">{match.teamB_score}</div>
                </div>
              </div>
              <div className="all_matches-match-info">
                <div>
              <span className="all_matches-match-info-header">
                Date:
              </span>
                  <span className="all_matches-match-info-data">
                    {match.date}
              </span>
                </div>
                <div>
            <span className="all_matches-match-info-header">
              Stadium:
            </span>
                  <span className="all_matches-match-info-data">
                    {match.stadium}
            </span>
                </div>
                <div>
            <span className="all_matches-match-info-header">
              Referee:
            </span>
                  <span className="all_matches-match-info-data">
                    {match.referee}
            </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default AllMatches;