import React from 'react';
import mc_logo from '../../images/logos/manchester_city_logo.png';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={mc_logo} alt="Manchester City Logo" className="logo"/>
      </div>
      <div className="nav_link">
        <NavLink to="/the_team" className={'link'}>The Team</NavLink>
        <NavLink to="/matches" className={'link'}>Matches</NavLink>
        <div className="link">Admin</div>
      </div>
    </div>
  )
};

export default Navbar;