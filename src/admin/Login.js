import React from 'react';
import TextField from "@material-ui/core/es/TextField/TextField";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from "@material-ui/core/Button";


class Login extends React.Component{
  state = {
    password: '',
    email: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render(){
    return(
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
          autoComplete="off"
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
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" className="login_btn">
          Login
        </Button>
      </div>
    )
  }
}

export default Login;