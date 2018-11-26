import React from 'react';
import mc_logo from '../../images/logos/manchester_city_logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={mc_logo} alt="Manchester City Logo" className="logo"/>
      </div>
      <div className="nav_link">
        <div className="link">The Team</div>
        <div className="link">Matches</div>
        <div className="link">Admin</div>
      </div>
    </div>
  )
};

export default Navbar;