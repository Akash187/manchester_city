import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import {database} from "../../firebase/firebase";
import {MyContext} from "../contextAPI/MyProvider";
import UpdateMatchScore from "./UpdateMatchScore";

class Matches extends Component{

  state = {
    matches: [],
    openUpdateModal: false,
    updateMatchId: ''
  };

  handleOpenUpdateModal = (id, teamA, teamB) => {
    this.setState({ openUpdateModal: true, updateMatchId: id, teamA, teamB });
  };

  handleCloseUpdateModal = () => {
    this.setState({ openUpdateModal: false });
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

  deleteMatch = (context,id) => {
    database.ref(`/matches/${id}`).remove()
      .then(function() {
        //Remove succeeded.
        context.handleClickOpenSnackBar('Match Deleted!');
      })
      .catch(function(error) {
        //Remove failed
        context.handleClickOpenSnackBar('Unable to Delete Match!');
      });
  };

  render(){
    //console.log("Matches Location : " + JSON.stringify(this.state.matches));
    return (
      <div className="matches_table">
        <div className="admin_form_header">
          <span>Matches</span>
        </div>
        <div className="--matches-table">
          <div className="--table --matches-table-header">
            <div className="--table-first-col">Date</div>
            <div>Match</div>
            <div>Stadium</div>
            <div>Referee</div>
            <div>Result</div>
            <div>Status</div>
            <div className="--table-last-col">Action</div>
          </div>
          {this.state.matches.map((row) => {
            return <MatchesTableData data={row} key={row.id} deleteMatch={this.deleteMatch} handleOpenUpdateModal={this.handleOpenUpdateModal}/>
          })}
        </div>
        <UpdateMatchScore id={this.state.updateMatchId} openUpdateModal={this.state.openUpdateModal} handleCloseUpdateModal={this.handleCloseUpdateModal}/>
      </div>
    )
  }
}

const MatchesTableData = (props) => {
  return (
    <div className="--table --matches-table-body">
      <span className="--table-first-col">{props.data.date}</span>
      <span>{props.data.teamA} - {props.data.teamB}</span>
      <span>{props.data.stadium}</span>
      <span>{props.data.referee}</span>
      <span>{props.data.teamA_score}-{props.data.teamB_score}</span>
      <span>{props.data.status}</span>
      <span>
        <IconButton color="primary" disabled={props.data.status === 'Final'}>
          <CreateIcon onClick={() => props.handleOpenUpdateModal(props.data.id)}/>
        </IconButton>
        <MyContext.Consumer>
            {(context) => (
        <IconButton color="secondary" onClick={() => props.deleteMatch(context,props.data.id)} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
              )}
        </MyContext.Consumer>
      </span>
    </div>
  )
};

export default Matches;

