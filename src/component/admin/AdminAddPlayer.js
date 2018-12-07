import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {MyContext} from '../contextAPI/MyProvider';
import {database,storage} from '../../firebase/firebase';
import SnackBar from "../global/SnackBar";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FileUploader from "react-firebase-file-uploader";

class AdminAddMatch extends Component{

  state={
    firstname: '',
    lastname: '',
    jerseyNo: '',
    position: '',
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };

  handleChangeInput = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
      storage.ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  submitPlayer = (context) => {
    if(
      this.state.firstname && this.state.lastname && this.state.jerseyNo && this.state.position && this.state.avatarURL
    ) {
      database.ref(`/players`).push({
        firstname: this.state.firstname.trim().replace(/\b\w/g, l => l.toUpperCase()),
        lastname: this.state.lastname.trim().replace(/\b\w/g, l => l.toUpperCase()),
        jerseyNo: this.state.jerseyNo,
        position: this.state.position,
        avatarURL: this.state.avatarURL.trim()
      }).then((success) => {
        context.handleClickOpenSnackBar('Player Added Successfully!');
        this.setState({
          firstname: '',
          lastname: '',
          jerseyNo: '',
          position: '',
          avatar: "",
          isUploading: false,
          progress: 0,
          avatarURL: ""
        });
      }).catch((err) => {
        console.log("Add Player Error : " + err);
        context.handleClickOpenSnackBar("Error Saving Form!");
      });
    }else{
      context.handleClickOpenSnackBar('Check the form. Each Field is required!');
    }
  };

  render(){
    return (
      <div className="admin_form">
        <div className="admin_form_header">
          <span>Add Player</span>
        </div>
        <form>
          <div className="form_field upload-image">
            <div className="form_field_header"><span>Player Image</span></div>
            <FileUploader
              accept="image/*"
              name="avatar"
              storageRef={storage.ref("images")}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
            <label htmlFor="outlined-button-file" style={{position: 'relative', top: '-30px', zIndex: '-1', display: 'block'}}>
              <Button variant="contained" color="default" >
                Upload
                <CloudUploadIcon/>
              </Button>
              {this.state.isUploading && <span>Progress: {this.state.progress}</span>}
              <span style={{marginLeft: 4}}>{this.state.avatar}</span>
            </label>
          </div>
          <div className="form_field">
            <div className="form_field_header"><span>First Name</span></div>
            <TextField
              value={this.state.firstname}
              onChange={this.handleChangeInput('firstname')}
              variant="outlined"
              className="form_input_field"
            />
          </div>
          <div className="form_field">
            <div className="form_field_header"><span>Last Name</span></div>
            <TextField
              value={this.state.lastname}
              onChange={this.handleChangeInput('lastname')}
              variant="outlined"
              className="form_input_field"
            />
          </div>
          <div className="form_field">
            <div className="form_field_header"><span>Jersey Number</span></div>
            <TextField
              type="number"
              value={this.state.jerseyNo}
              onChange={this.handleChangeInput('jerseyNo')}
              variant="outlined"
              className="form_input_field"
            />
          </div>
          <div className="form_field">
            <div className="form_field_header"><span>Select a Position</span></div>
            <FormControl variant="outlined" className="form_input_field">
              <InputLabel ref={ref => {
                this.InputLabelRef = ref;
              }} htmlFor="outlined-teamA-simple">
                Select One
              </InputLabel>
              <Select
                value={this.state.position}
                onChange={this.handleChange}
                input={
                  <OutlinedInput
                    labelWidth={90}
                    name="position"
                    id="outlined-position-simple"
                  />
                }
              >
                <MenuItem value={"keeper"}>Keeper</MenuItem>
                <MenuItem value={"defence"}>Defence</MenuItem>
                <MenuItem value={"midfield"}>Midfield</MenuItem>
                <MenuItem value={"striker"}>Striker</MenuItem>
              </Select>
            </FormControl>
          </div>
          <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                <SnackBar message={context.state.snackbarMessage} open={context.state.openSnackbar}
                          handleClose={context.handleCloseSnackBar}/>
                <Button variant="contained" color="primary" className="submit_btn" style={{marginTop: 16}} onClick={() => this.submitPlayer(context)}>
                  Add Player
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

