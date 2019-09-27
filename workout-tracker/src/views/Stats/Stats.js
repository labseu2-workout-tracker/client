import React from "react";
import WeeklyChart from "./Charts/WeeklyChart";
import MonthlyChart from "./Charts/MonthlyChart";
import YearlyChart from "./Charts/YearlyChart";
import UserHistory from "./UserHistory/UserHistory";
import WorkoutCalendar from "./Calendar/WorkoutCalendar";
import styled from "styled-components";
import { fetchWorkouts } from "../../store/actions/workoutsActions";
import { fetchWorkoutsHistory } from "../../store/actions/historyActions";
import { connect } from "react-redux";

const StyledStats = styled.div`
  padding: 1.5rem 3rem;

  @media (max-width: 1000px) {
    padding: 0.5rem 2rem;
  }

  @media (max-width: 720px) {
    padding: 0.5rem 0rem;
  }

  .chart-row {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  }

  .chart {
    text-align: center;
    width: 30%;
    border: 0;
    display: flex;
    font-size: 0.875rem;
    min-width: 0;
    word-wrap: break-word;
    background: #fff;
    margin-top: 3rem;
    padding:2rem;
    border-radius: 0.6rem;
    margin-bottom: 3rem;
    flex-direction: column;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    @media (max-width: 1000px) {
      width: 80%;
      margin: 1rem;
    }
  }

  .ant-card-head-title {
    text-align: left;
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
    padding: 3rem;
    border-radius: 0.6rem;
    margin-bottom: 3rem;
    flex-direction: column;
    text-align: center;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    @media (max-width: 720px) {
      padding: 0;
    }

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
`;

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.fetchWorkouts();
    this.props.fetchWorkoutsHistory();
  };

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

export default connect(
  null,
  { fetchWorkouts, fetchWorkoutsHistory }
)(Stats);
