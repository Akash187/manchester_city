import React, {Component} from 'react';
import {database} from "../../firebase/firebase";

class Matches extends Component{

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
        this.setState({matches});
      });
  }

  componentWillUnmount(){
    //this.subscribed();
    //console.log("unsbscribed");
  }

  render(){
    console.log("Matches Location : " + JSON.stringify(this.state.matches));
    return (
      <div className="matches_table">
        <div className="admin_form_header">
          <span>Matches</span>
        </div>
        <div className="--matches-table">
          <div className="--table --matches-table-header">
            <div>Date</div>
            <div>Match</div>
            <div>Stadium</div>
            <div>Referee</div>
            <div>Result</div>
            <div>Status</div>
          </div>
          {this.state.matches.map((row) => {
            return <MatchesTableData data={row} key={row.id}/>
          })}
        </div>
      </div>
    )
  }
}

const MatchesTableData = (props) => {
  return (
    <div className="--table --matches-table-body">
      <span>{props.data.date}</span>
      <span>{props.data.teamA} - {props.data.teamB}</span>
      <span>{props.data.stadium}</span>
      <span>{props.data.referee}</span>
      <span>{props.data.teamA_score}-{props.data.teamB_score}</span>
      <span>{props.data.status}</span>
    </div>
  )
};

export default Matches;

