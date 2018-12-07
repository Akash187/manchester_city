import React from 'react';
import Slide from 'react-reveal/Slide';
import  ScrollToTopOnMount from '../../ScrollToTopOnMount';
import {database} from "../../firebase/firebase";

class TheTeam extends React.Component{

  state = {
    keepers: [],
    defence: [],
    midfield: [],
    strikers: []
  };

  componentDidMount(){
    database.ref(`/players`)
      .on('value', (snapshot) => {
        const keepers = [];
        const defence = [];
        const midfield = [];
        const strikers = [];
        snapshot.forEach((childSnapshot) => {
          switch(childSnapshot.val().position){
            case 'keeper':
              keepers.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
              });
              break;
            case 'defence':
              defence.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
              });
              break;
            case 'midfield':
              midfield.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
              });
              break;
            case 'striker':
              strikers.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
              });
              break;
            default:
              console.log('Player position missing');
          }
        });
        this.setState({keepers, defence, midfield, strikers});
      });
  }

  render(){
    return(
      <div className="the_team">
        <ScrollToTopOnMount/>
        <div className="the_team_header">
          Keepers
        </div>
        <div className="the_team_players">
          {
            this.state.keepers.map(player => (
              <Slide left>
                <div className="the_team_player">
                  <img src={player.avatarURL} alt={player.firstname}/>
                  <div className="player_info">
                    <div className="player_name">{player.firstname} {player.lastname}</div>
                    <div className="player_jersey_no">{player.jerseyNo}</div>
                  </div>
                </div>
              </Slide>
            ))
          }
        </div>
        <div className="the_team_header">
          Defence
        </div>
        <div className="the_team_players">
          {
            this.state.defence.map(player => (
              <Slide left>
                <div className="the_team_player">
                  <img src={player.avatarURL} alt={player.firstname}/>
                  <div className="player_info">
                    <div className="player_name">{player.firstname} {player.lastname}</div>
                    <div className="player_jersey_no">{player.jerseyNo}</div>
                  </div>
                </div>
              </Slide>
            ))
          }
        </div>
        <div className="the_team_header">
          Midfield
        </div>
        <div className="the_team_players">
          {
            this.state.midfield.map(player => (
              <Slide left>
                <div className="the_team_player">
                  <img src={player.avatarURL} alt={player.firstname}/>
                  <div className="player_info">
                    <div className="player_name">{player.firstname} {player.lastname}</div>
                    <div className="player_jersey_no">{player.jerseyNo}</div>
                  </div>
                </div>
              </Slide>
            ))
          }
        </div>
        <div className="the_team_header">
          Strikers
        </div>
        <div className="the_team_players">
          {
            this.state.strikers.map(player => (
              <Slide left>
                <div className="the_team_player">
                  <img src={player.avatarURL} alt={player.firstname}/>
                  <div className="player_info">
                    <div className="player_name">{player.firstname} {player.lastname}</div>
                    <div className="player_jersey_no">{player.jerseyNo}</div>
                  </div>
                </div>
              </Slide>
            ))
          }
        </div>
      </div>
    )
  }
}

export default TheTeam;