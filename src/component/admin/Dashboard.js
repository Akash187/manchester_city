import React, {Component} from 'react';
import {auth} from "../../firebase/firebase";
import {Redirect} from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";
import Matches from "./Matches";
import SideList from "./SideList";
import AdminAddMatch from "./AdminAddMatch";
import AdminPlayers from "./AdminPlayers";
import AdminAddPlayer from "./AdminAddPlayer";

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

    document.getElementById("footer").style.width = "calc(100% - 12rem)";
    document.getElementById("footer").style.marginLeft = "12rem";
  }

  componentWillUnmount(){
    this.subscribed();
    console.log("unsubscribe");
    document.getElementById("footer").style.width = "100%";
    document.getElementById("footer").style.marginLeft = "0";
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
    console.log("Dashboard Location : " + JSON.stringify(this.props.location));
    if(this.state.isAuthenticating) return null;
    return (
      <div>
        {
          (!auth.currentUser) ? (
            <Redirect to='/login'/>
          ) : (
            <div className="dashboard">
              <div className="admin-nav">
                <div className="drawer-btn">
                  <TemporaryDrawer logout={this.logout} className="drawer-btn"/>
                </div>
                <div className="sidenav">
                  <SideList logout={this.logout}/>
                </div>
              </div>
              <div className="admin-Content">
                {(this.props.location.pathname === "/dashboard") && (
                  <div className="dashboard_intro">
                    This is your dashboard
                  </div>
                )}
                {(this.props.location.pathname === "/dashboard/matches") && <Matches/>}
                {(this.props.location.pathname === "/dashboard/add_match") && <AdminAddMatch/>}
                {(this.props.location.pathname === "/dashboard/players") && <AdminPlayers/>}
                {(this.props.location.pathname === "/dashboard/add_player") && <AdminAddPlayer/>}
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Dashboard;
