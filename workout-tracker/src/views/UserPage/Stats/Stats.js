import React from "react";
// import ChartContainer from "./Charts/ChartContainer";
import WeeklyChart from "./Charts/WeeklyChart";
import MonthlyChart from "./Charts/MonthlyChart";
import YearlyChart from "./Charts/YearlyChart";
import UserHistory from "./UserHistory/UserHistory";
import WorkoutCalendar from "./Calendar/WorkoutCalendar";
import styled from "styled-components";

const StyledStats = styled.div`
  padding: 15px 30px;

  .chart-row {
    display: flex;
    justify-content: space-between;
  }

  .chart {
    width: 50%;
    border: 0;
    display: flex;
    font-size: 0.875rem;
    min-width: 0;
    word-wrap: break-word;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    margin-top: 30px;
    border-radius: 6px;
    margin-bottom: 30px;
    flex-direction: column;
  }

  .calendar {
    color: rgba(0, 0, 0, 0.87);
    width: 50%;
    border: 0;
    display: flex;
    position: relative;
    font-size: 0.875rem;
    min-width: 0;
    word-wrap: break-word;
    background: #fff;
    box-shadow: 1px 4px 1px 4px rgba(0, 0, 0, 0.14);
    padding: 30px;
    border-radius: 6px;
    margin-bottom: 30px;
    flex-direction: column;
  }
`;

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StyledStats>
        <div className="chart-row">
          <WeeklyChart />
          
          <MonthlyChart />
        
          <YearlyChart />
          
        </div>

        <div>
        <WorkoutCalendar />
      
          </div>
       

        <div>
          <UserHistory />
        </div>
      </StyledStats>
    );
  }
}

export default Stats;
