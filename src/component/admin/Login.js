import React from 'react';
import TextField from "@material-ui/core/es/TextField/TextField";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from "@material-ui/core/Button";
import {auth} from '../../firebase/firebase';
import {Redirect} from "react-router-dom";


class Login extends React.Component{
  state = {
    password: '',
    email: '',
    showPassword: false,
    errorMessage: '',
    isAuthenticating: true
  };

  componentDidMount(){
    this.subscribed = auth.onAuthStateChanged((user) => {
      if (user)
        this.setState({ isAuthenticating: false });
      else
        this.setState({ isAuthenticating: false });
    });
  }

  componentWillUnmount(){
    this.subscribed();
    console.log("unsubscribe");
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  login = () => {
    auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((success) => {
      localStorage.setItem("authSecret", JSON.stringify({uid : auth.currentUser.uid}));
      this.props.history.push('/dashboard');
    })
      .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(`${errorCode} ${errorMessage}`);
      this.setState({
        errorMessage,
        password: ''
      });
    });
  };

  render(){
    console.log("Login Auth  : " + JSON.stringify(auth.currentUser));
    //if(this.state.isAuthenticating) return null;
    return(
      <div>
        {
          (auth.currentUser) ? (
            <Redirect to='/dashboard'/>
          ) : (
            <div className="login">
              <div className="login_header">
                Please Login
              </div>
              <TextField
                id="outlined-email-input"
                label="Email"
                className="login_email"
                value={this.state.email}
                onChange={this.handleChange('email')}
                type="email"
                name="email"
                autoComplete="on"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-adornment-password"
                className="login_password"
                variant="outlined"
                type={this.state.showPassword ? 'text' : 'password'}
                label="Password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {this.state.errorMessage && (<div className="login_error">{this.state.errorMessage}</div>)}
              <Button variant="contained" className="login_btn" onClick={this.login}>
                Login
              </Button>
            </div>
          )
        }
      </div>
    )
  }
}

export default Login;