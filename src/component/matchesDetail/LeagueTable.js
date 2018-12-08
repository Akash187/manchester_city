import React, {Component} from 'react';
import scrapeIt from 'scrape-it';

class LeagueTable extends Component{

  state = {
    leagueTable: []
  };

  componentDidMount(){
    
    //Retrieving data:
    let text = localStorage.getItem("leagueTableJSON");
    let obj = JSON.parse(text);
    if(obj !== null){
      this.setState({
        leagueTable: obj
      });
    }

    scrapeIt("https://cors-anywhere.herokuapp.com/https://www.mancity.com/league-table/first-team", {
      tableBody: {
        listItem: ".table--body .table--data"
      }
    }).then(({ data, response }) => {
      //console.log(`Status Code: ${response.statusCode}`);
      let pointTable = [];
      let tableBody = data.tableBody;
      let tableRow = [];
      let x = 0;
      for (let i = 0; i < tableBody.length; i++) {
        if (i === x+1)
          tableRow.push(tableBody[i]);
        else if(i === x+3)
          tableRow.push(tableBody[i]);
        else if(i === x+5)
          tableRow.push(tableBody[i]);
        else if(i === x+6)
          tableRow.push(tableBody[i]);
        else if(i === x+7)
          tableRow.push(tableBody[i]);
        else if(i === x+12)
          tableRow.push(tableBody[i]);
        if(i % 13 === 0 && i !== 0){
          x = i;
          pointTable.push(tableRow);
          tableRow = [];
        }
      }
      this.setState({
        leagueTable: pointTable
      });
      //Storing data:
      let myJSON = JSON.stringify(pointTable);
      localStorage.setItem("leagueTableJSON", myJSON);
    })
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
            return <PointsTableData data={row} key={row[0]}/>
          })}
        </div>
      </div>
    );
  }
}

const PointsTableData = (props) => {
  return (
    <div className="--league-table-body">
      <div>{props.data[0]}</div>
      <div>{props.data[1]}</div>
      <div>{props.data[2]}</div>
      <div>{props.data[3]}</div>
      <div>{props.data[4]}</div>
      <div>{props.data[5]}</div>
    </div>
  )
};

export default LeagueTable;