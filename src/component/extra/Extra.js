import React from 'react';
import jersey from '../../images/jersey.jpg';
import Zoom from 'react-reveal/Zoom';

const Extra = () => {
  return (
    <div className="extra">
      <div className="container">
        <div className="extra_container">
          <div className="extra_header">
            <Zoom left>
              Win a Jersey
            </Zoom>
          </div>
          <Zoom right>
            <img src={jersey} alt="jersey" className="jersey_img"/>
          </Zoom>
        </div>
        <div className="extra_form">
          <div>Enter your email</div>
          <div>
            <input type="text" placeholder="Enter your email"/>
          </div>
          <button className="enroll_btn">Enroll</button>
          <div className="extra_form_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda culpa cupiditate dolorem.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;