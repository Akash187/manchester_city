import React from 'react';
import AllMatches from "./AllMatches";
import LeagueTable from "./LeagueTable";
import ScrollToTopOnMount from "../../ScrollToTopOnMount";

const MatchesDetail = () => {
  return (
    <div className="matches_detail">
      <ScrollToTopOnMount/>
      <AllMatches/>
      <LeagueTable/>
    </div>
  );
};

export default MatchesDetail;