import React, {Component} from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class SnackBar extends Component{
  render(){
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
        open={this.props.open}
        autoHideDuration={4000}
        onClose={this.props.handleClose}
        message={<span id="message-id">{this.props.message}</span>}
        action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={this.props.handleClose}
      >
        <CloseIcon />
      </IconButton>]}
      />
    );
  }
}

export default SnackBar;