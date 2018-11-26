import React from 'react';
import mc_logo from '../../images/logos/manchester_city_logo.png';

const Footer = () => {
  return(
    <div className="footer">
      <img src={mc_logo} alt="Manchester City" className="logo"/>
      <div>
Manchester City 2018. All rights reserved.
      </div>
    </div>
  )
};

export default Footer;