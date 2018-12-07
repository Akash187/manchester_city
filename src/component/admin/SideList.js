import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";

class SideList extends React.Component{
  render() {
    return (
      <div className={this.props.list}>
        <List>
          <ListItem button>
            <ListItemText>
              <Link to="/dashboard/matches" className="adminSideList">Matches</Link>
            </ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemText>
              <Link to="/dashboard/add_match" className="adminSideList">Add Match</Link>
            </ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemText>
              <Link to="/dashboard/players" className="adminSideList">Players</Link>
            </ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemText>
              <Link to="/dashboard/add_player" className="adminSideList">Add Player</Link>
            </ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={this.props.logout}>
            <ListItemText>
              <span className="adminSideList">Logout</span>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default SideList;