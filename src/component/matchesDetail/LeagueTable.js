import React, {Component} from 'react';
const tabletojson = require("tabletojson");

class LeagueTable extends Component{

  state = {
    leagueTable: []
  };

  componentDidMount(){

    let self = this;
    tabletojson.convertUrl(
      'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/Template:2018-19_Premier_League_table',{ useFirstRowForHeadings: true },
      function(tablesAsJson) {
        //console.log(tablesAsJson[0]);
        self.setState({
          leagueTable: tablesAsJson[0].slice(1)
        });
      }
    );
  }

  render(){
    return (
      <div className="league_table">
        <div className="league_table_header">
          <span>League Table</span>
        </div>
        <div className="--league-table">
          <div className="--league-table-header">
            <div>Pos</div>
            <div>Team</div>
            <div>W</div>
            <div>D</div>
            <div>L</div>
            <div>Pts</div>
          </div>
          {this.state.leagueTable.map((row) => {
            return <PointsTableData data={row} key={row.Pos}/>
          })}
        </div>
      </div>
    );
  }
}

const PointsTableData = (props) => {
  return (
    <div className="--league-table-body">
      <div>{props.data['Pos']}</div>
      <div>{props.data['Team[ vte ]']}</div>
      <div>{props.data['W']}</div>
      <div>{props.data['D']}</div>
      <div>{props.data['L']}</div>
      <div>{props.data['Pts']}</div>
    </div>
  )
};

export default LeagueTable;
