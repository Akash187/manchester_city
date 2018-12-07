import React from 'react';
import mc_logo from '../../images/logos/manchester_city_logo.png';
import {NavLink} from "react-router-dom";

const Footer = () => {
  return(
    <div className="footer" id="footer">
      <div>
        <NavLink to="/">
          <img src={mc_logo} alt="Manchester City Logo" className="logo"/>
        </NavLink>
      </div>
      <div>
Manchester City 2018. All rights reserved.
      </div>
    </div>
  )
};

export default Footer;