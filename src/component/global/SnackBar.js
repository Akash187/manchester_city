import React, {Component} from 'react';
import Snackbar from "@material-ui/core/Snackbar";

class SnackBar extends Component{
  render(){
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
        open={this.props.open}
        onClose={this.props.handleClose}
        autoHideDuration={2000}
        message={<span id="message-id">{this.props.message}</span>}
      />
    );
  }
}

export default SnackBar;