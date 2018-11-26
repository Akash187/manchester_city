import React from 'react';
import jersey from '../../images/jersey.jpg';

const Extra = () => {
  return(
    <div className="extra">
      <div>
        <div className="extra_header">
          Win a Jersey
        </div>
        <img src={jersey} alt="jersey" className="jersey_img"/>
      </div>
      <div className="extra_form">
        <div>Enter your email</div>
        <input type="text" placeholder="Enter your email"/>
        <button>Enroll</button>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda culpa cupiditate dolorem.
        </div>
      </div>
    </div>
  );
};

export default Extra;