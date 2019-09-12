import React from "react";
// import ChartContainer from "./Charts/ChartContainer";
import WeeklyChart from "./Charts/WeeklyChart";
import MonthlyChart from "./Charts/MonthlyChart";
import YearlyChart from "./Charts/YearlyChart";
import UserHistory from "./UserHistory/UserHistory";
import WorkoutCalendar from "./Calendar/WorkoutCalendar";
import MonthlyGraph from "./Charts/MonthlyGraph";
import styled from "styled-components";

const StyledStats = styled.div`
  padding: 1.5rem 3rem;

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
    box-shadow: 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.14);
    margin-top: 3rem;
    border-radius: 0.6rem;
    margin-bottom: 3rem;
    flex-direction: column;
  }

  .calendar,
  .history {
    color: rgba(0, 0, 0, 0.87);
    width: 100%;
    border: 0;
    display: flex;
    position: relative;
    font-size: 0.875rem;
    min-width: 0;
    word-wrap: break-word;
    background: #fff;
    box-shadow: 0.1rem 0.4rem 0.1rem 0.4rem rgba(0, 0, 0, 0.14);
    padding: 3rem;
    border-radius: 0.6rem;
    margin-bottom: 3rem;
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
        <MonthlyGraph />
        <div>
          <UserHistory />
        </div>
      </StyledStats>
    );
  }
}

export default Stats;
