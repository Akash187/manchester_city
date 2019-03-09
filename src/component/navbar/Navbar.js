import React from 'react';
import mc_logo from '../../images/logos/manchester_city_logo.png';
import {NavLink} from "react-router-dom";
import SnackBar from "../global/SnackBar";
import {MyContext} from '../contextAPI/MyProvider';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <NavLink to="/">
          <img src={mc_logo} alt="Manchester City Logo" className="logo"/>
        </NavLink>
      </div>
      <div className="nav_link">
        <NavLink to="/the_team" className={'link'}>The Team</NavLink>
        <NavLink to="/matches" className={'link'}>Matches</NavLink>
        <NavLink to="/login" className={'link'}>Admin</NavLink>
      </div>
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <SnackBar message={context.state.snackbarMessage} open={context.state.openSnackbar} handleClose={context.handleCloseSnackBar}/>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    </div>
  )
};

export default Navbar;