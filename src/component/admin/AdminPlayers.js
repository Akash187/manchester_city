import React, {Component} from 'react';
import {database} from "../../firebase/firebase";

class Matches extends Component{

  state = {
    players: []
  };

  componentDidMount(){
    database.ref(`/players`)
      .on('value', (snapshot) => {
        const players = [];
        snapshot.forEach((childSnapshot) => {
          players.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        });
        this.setState({players});
      });
  }

  render(){
    //console.log("Players Location : " + JSON.stringify(this.state.players));
    return (
      <div className="matches_table">
        <div className="admin_form_header">
          <span>Players</span>
        </div>
        <div className="--matches-table">
          <div className="--table-players --matches-table-header">
            <div className="--table-first-col">First Name</div>
            <div>Last Name</div>
            <div>Jersey No</div>
            <div>Position</div>
          </div>
          {this.state.players.map((row) => {
            return <PlayersTableData data={row} key={row.id}/>
          })}
        </div>
      </div>
    )
  }
}

const PlayersTableData = (props) => {
  return (
    <div className="--table-players  --matches-table-body">
      <span className="--table-first-col">{props.data.firstname}</span>
      <span>{props.data.lastname}</span>
      <span>{props.data.jerseyNo}</span>
      <span>{props.data.position}</span>
    </div>
  )
};

export default Matches;