import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import teams from '../global/teams';
import {MyContext} from '../contextAPI/MyProvider';
import {database} from '../../firebase/firebase';
import Radio from '@material-ui/core/Radio';
import SnackBar from "../global/SnackBar";

class AdminAddMatch extends Component{

  state={
    date: '',
    teamA : 'Manchester City',
    teamB : 'Manchester City',
    referee: '',
    stadium: '',
    teamA_score: '',
    teamB_score: '',
    status: 'Yet to Play'
  };

  handleChangeInput = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitMatch = (context) => {
    if(
      this.state.date && this.state.teamA !== this.state.teamB &&  this.state.referee && this.state.stadium
    ) {
      database.ref(`/matches`).push({
        date: this.state.date,
        teamA : this.state.teamA,
        teamB : this.state.teamB,
        referee: this.state.referee.trim().replace(/\b\w/g, l => l.toUpperCase()),
        stadium: this.state.stadium.trim().replace(/\b\w/g, l => l.toUpperCase()),
        teamA_score: this.state.teamA_score,
        teamB_score: this.state.teamB_score,
        status: this.state.status
      }).then((success) => {
        context.handleClickOpenSnackBar('Match Added Successfully!');
        this.setState({
          date: '',
          teamA : 'Manchester City',
          teamB : 'Manchester City',
          referee: '',
          stadium: '',
          teamA_score: '',
          teamB_score: '',
          status: 'Yet to Play'
        });
      }).catch((err) => {
        context.handleClickOpenSnackBar("Error Saving Form!");
      });
    }else{
      context.handleClickOpenSnackBar('Check the form. Each Field is required!');
    }
  };

  render(){
    console.log(this.state);
    return (
      <div className="admin_form">
        <div className="admin_form_header">
          <span>Add Match</span>
        </div>
        <form>
          <div className="form_field">
            <div className="form_field_header"><span>Event date</span></div>
            <TextField
              name="date"
              id="date"
              type="date"
              onChange={this.handleChange}
              className="form_input_field"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="form_field">
            <div className="form_field_header"><span>Local</span></div>
            <FormControl variant="outlined" className="form_input_field">
              <InputLabel ref={ref => {
                this.InputLabelRef = ref;
              }} htmlFor="outlined-teamA-simple">
                Select One
              </InputLabel>
              <Select
                value={this.state.teamA}
                onChange={this.handleChange}
                input={
                  <OutlinedInput
                    labelWidth={90}
                    name="teamA"
                    id="outlined-teamA-simple"
                  />
                }
              >
                {
                  teams.map(team => {
                    return <MenuItem value={team} key={team}>{team}</MenuItem>;
                  })
                }
              </Select>
            </FormControl>
          </div>
          <div className="form_field">
            <div className="form_field_header"><span>Away</span></div>
            <FormControl variant="outlined" className="form_input_field">
              <InputLabel ref={ref => {
                this.InputLabelRef = ref;
              }} htmlFor="outlined-teamB-simple">
                Select One
              </InputLabel>
              <Select
                value={this.state.teamB}
                onChange={this.handleChange}
                input={
                  <OutlinedInput
                    labelWidth={90}
                    name="teamB"
                    id="outlined-teamB-simple"
                  />
                }
              >
                {
                  teams.map(team => {
                    return <MenuItem value={team} key={team}>{team}</MenuItem>;
                  })
                }
              </Select>
            </FormControl>
          </div>
          <div className="form_field">
            <div className="form_field_header"><span>Referee</span></div>
            <TextField
              value={this.state.referee}
              onChange={this.handleChangeInput('referee')}
              variant="outlined"
              className="form_input_field"
            />
          </div>
          <div className="form_field">
            <div className="form_field_header"><span>Stadium</span></div>
            <TextField
              value={this.state.stadium}
              onChange={this.handleChangeInput('stadium')}
              variant="outlined"
              className="form_input_field"
            />
          </div>
          <div className="form_field">
            <div className="form_field_header"><span>Match Status</span></div>
            <Radio
              checked={this.state.status === 'Yet to Play'}
              onChange={this.handleChange}
              value="Yet to Play"
              name="status"
              aria-label="Yet to Play"

            />
            <span>Yet to Play</span>
            <Radio
              checked={this.state.status === 'Final'}
              onChange={this.handleChange}
              value="Final"
              name="status"
              aria-label="Final"
            />
            <span>Final</span>
          </div>
          {this.state.status === 'Final' && (
            <div className="form_field">
              <div className="form_field_header"><span>Team Result</span></div>
              <div className="form_input_score_field">
                <TextField
                  value={this.state.teamA_score}
                  onChange={this.handleChangeInput('teamA_score')}
                  type="number"
                  variant="outlined"
                  placeholder="Local Team"
                />
                <div>-</div>
                <TextField
                  value={this.state.teamB_score}
                  onChange={this.handleChangeInput('teamB_score')}
                  type="number"
                  variant="outlined"
                  placeholder="Away Team"
                />
              </div>
            </div>
          )}
          <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                <SnackBar message={context.state.snackbarMessage} open={context.state.openSnackbar}
                          handleClose={context.handleCloseSnackBar}/>
                <Button variant="contained" color="primary" className="submit_btn" style={{marginTop: 16}} onClick={() => this.submitMatch(context)}>
                  Add Match
                </Button>
              </React.Fragment>
            )}
          </MyContext.Consumer>
        </form>
      </div>
    )
  }
}

export default AdminAddMatch;

