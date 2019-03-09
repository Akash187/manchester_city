import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {database} from "../../firebase/firebase";
import {MyContext} from "../contextAPI/MyProvider";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default class UpdateMatchScore extends React.Component {
  state={
    teamA_score: '',
    teamB_score: ''
  };

  handleChangeInput = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updateMatchScore = (context, id) => {
    if(this.state.teamA_score !== '' && this.state.teamB_score !== ''){
      database.ref(`matches/${id}`).update({
        status : 'Final',
        teamA_score: this.state.teamA_score,
        teamB_score: this.state.teamB_score
        });
      context.handleClickOpenSnackBar('Updated Match Score!');
    }
    else{
      context.handleClickOpenSnackBar('Unable to Update Score!');
    }
    this.props.handleCloseUpdateModal();
  };

  render() {
    return (
      <div>
        <Dialog
          TransitionComponent={Transition}
          open={this.props.openUpdateModal}
          onClose={this.props.handleCloseUpdateModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update Score</DialogTitle>
          <DialogContent>
            <div className="form_input_score_field">
              <TextField
                onChange={this.handleChangeInput('teamA_score')}
                type="number"
                variant="outlined"
                placeholder="Local Team"
              />
              <div>-</div>
              <TextField
                onChange={this.handleChangeInput('teamB_score')}
                type="number"
                variant="outlined"
                placeholder="Away Team"
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleCloseUpdateModal} color="secondary">
              Cancel
            </Button>
            <MyContext.Consumer>
              {(context) => (
                <Button onClick={() => this.updateMatchScore(context, this.props.id)} color="primary">
                  Update
                </Button>
              )}
            </MyContext.Consumer>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}