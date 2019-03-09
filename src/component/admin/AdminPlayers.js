import React, {Component} from 'react';
import {database} from "../../firebase/firebase";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {MyContext} from '../contextAPI/MyProvider';

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
            <div>Action</div>
          </div>
          {this.state.players.map((row) => {
            return <PlayersTableData data={row} key={row.id}/>
          })}
        </div>
      </div>
    )
  }
}

class PlayersTableData extends Component{

  deletePlayer = (context,id) => {
    database.ref(`/players/${id}`).remove()
      .then(function() {
        //Remove succeeded.
        context.handleClickOpenSnackBar('Player Deleted!');
      })
      .catch(function(error) {
        //Remove failed
        context.handleClickOpenSnackBar('Unable to Delete Player!');
      });
  };

  render(){
    return (
      <div className="--table-players  --matches-table-body">
        <span className="--table-first-col">{this.props.data.firstname}</span>
        <span>{this.props.data.lastname}</span>
        <span>{this.props.data.jerseyNo}</span>
        <span>{this.props.data.position}</span>
        <span>
        <MyContext.Consumer>
            {(context) => (
              <IconButton color="secondary" onClick={() => this.deletePlayer(context,this.props.data.id)} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            )}
        </MyContext.Consumer>
      </span>
      </div>
    )
  }
}

export default Matches;