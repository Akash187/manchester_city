import React, {Component} from 'react';
import {auth} from "../../firebase/firebase";
import {Redirect} from "react-router-dom";

class Dashboard extends Component {

  state = {
    isAuthenticating: true
  };

  componentDidMount(){
    this.subscribed = auth.onAuthStateChanged((user) => {
      if (user)
        this.setState({ isAuthenticating: false });
      else
      this.setState({ isAuthenticating: false });
    });
  }

  componentWillUnmount(){
    this.subscribed();
    console.log("unsubscribe");
  }

  logout = () => {
    auth.signOut().then(() => {
      console.log("Sign-out successful.");
      this.props.history.push('/login');
    }).catch(function(error) {
      // An error happened.
      console.log("Error Signing out. " + error);
    });
  };

  render() {
    //console.log("Admin Auth  : " + JSON.stringify(auth.currentUser));
    if(this.state.isAuthenticating) return null;
    return (
      <div>
        {
          (!auth.currentUser) ? (
            <Redirect to='/login'/>
          ) : (
            <div className="dashboard">
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <div>Admin</div>
              <button onClick={this.logout}>Logout</button>
            </div>
          )
        }
      </div>
    )
  }
}

export default Dashboard;
