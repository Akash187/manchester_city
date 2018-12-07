import React, {Component} from 'react';

// first we will make a new context
const MyContext = React.createContext({});

// Then create a provider Component
class MyProvider extends Component {
  state = {
    openSnackbar: false,
    snackbarMessage: ''
  };

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        handleClickOpenSnackBar: (msg) => {
          this.setState({snackbarMessage: msg, openSnackbar: true});
        },
        handleCloseSnackBar: () => {
          //console.log('close Snackbar fired');
          this.setState({openSnackbar: false});
        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {
  MyProvider,
  MyContext
};
