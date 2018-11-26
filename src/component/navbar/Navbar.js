import React from 'react';
import mc_logo from '../../images/logos/manchester_city_logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={mc_logo} alt="Manchester City Logo"/>
      </div>
      <div className="nav_link">
        <div className="links">Team</div>
        <div className="links">Matches</div>
        <div className="links">Admin</div>
      </div>
    </div>
  )
};

export default Navbar;