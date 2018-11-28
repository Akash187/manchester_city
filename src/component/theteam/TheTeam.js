import React from 'react';
import Slide from 'react-reveal/Slide';
import Otamendi from '../../images/players/Otamendi.png';
import  ScrollToTopOnMount from '../../ScrollToTopOnMount';

class TheTeam extends React.Component{

  render(){
    return(
      <div className="the_team">
        <ScrollToTopOnMount/>
        <div className="the_team_header">
          Keepers
        </div>
        <div className="the_team_players">
          <Slide left>
            <div className="the_team_player">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Slide>
          <Slide left>
            <div className="the_team_player">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Slide>
          <Slide left>
            <div className="the_team_player">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Slide>
          <Slide left>
            <div className="the_team_player">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Slide>
          <Slide left>
            <div className="the_team_player">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Slide>
          <Slide left>
            <div className="the_team_player">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Slide>
        </div>
        <div className="the_team_header">
          Defence
        </div>
        <div className="the_team_players">
          <Slide left>
            <div className="the_team_player">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Slide>
        </div>
        <div className="the_team_header">
          Midfield
        </div>
        <div className="the_team_players">
          <Slide left>
            <div className="the_team_player">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Slide>
        </div>
        <div className="the_team_header">
          Strikers
        </div>
        <div className="the_team_players">
          <Slide left>
            <div className="the_team_player">
              <img src={Otamendi} alt="Otamendi"/>
              <div className="player_info">
                <div className="player_name">Nicolas Otamendi</div>
                <div className="player_jersey_no">30</div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}

export default TheTeam;