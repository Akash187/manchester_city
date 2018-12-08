import React from 'react';
import jersey from '../../images/jersey.jpg';
import Zoom from 'react-reveal/Zoom';
import {database} from "../../firebase/firebase";
import {MyContext} from '../contextAPI/MyProvider';

class Extra extends React.Component{
  state = {
    email: ''
  };

  handleChangeInput = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitEmail = (context) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(this.state.email.toLowerCase())) {
      database.ref(`/emails`).push({
        email: this.state.email,
      }).then((success) => {
        context.handleClickOpenSnackBar('Email Added Successfully!');
        this.setState({
          email: ''
        });
      }).catch((err) => {
        context.handleClickOpenSnackBar("Error Saving Email!");
      });
    }else{
      context.handleClickOpenSnackBar('Email is not Correct');
    }
  };

  render(){
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
              <input type="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleChangeInput('email')}/>
            </div>
            <MyContext.Consumer>
              {(context) => (
                <button className="enroll_btn" onClick={() => this.submitEmail(context)}>Enroll</button>
              )}
            </MyContext.Consumer>
            <div className="extra_form_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda culpa cupiditate dolorem.
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Extra;