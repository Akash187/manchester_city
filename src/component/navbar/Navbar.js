import React from 'react';
import mc_logo from '../../images/logos/manchester_city_logo.png';
import {NavLink} from "react-router-dom";

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
    </div>
  )
};

export default Navbar;