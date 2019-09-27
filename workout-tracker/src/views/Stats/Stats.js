import React from "react";
import WeeklyChart from "./Charts/WeeklyChart";
import MonthlyChart from "./Charts/MonthlyChart";
import YearlyChart from "./Charts/YearlyChart";
import UserHistory from "./UserHistory/UserHistory";
import WorkoutCalendar from "./Calendar/WorkoutCalendar";
import styled from "styled-components";
import { fetchWorkouts } from "../../store/actions/workoutsActions";
import { fetchWorkoutsHistory } from "../../store/actions/historyActions";
import {
  calculateWeeklyChart,
  calculateMonthlyChart,
  calculateYearlyChart
} from "../../store/actions/chartActions";
import { connect } from "react-redux";

const StyledStats = styled.div`
  padding: 1.5rem 3rem;

  @media (max-width: 1000px) {
    padding: 0.5rem 2rem;
  }

  @media (max-width: 720px) {
    padding: 0.5rem 0rem;
  }

  .legend {
    display: flex;
    justify-content: center;
    color: white;
    font-weight: bold;
    /* font-size: 1rem; */
    flex-wrap: wrap;

    p {
      margin: 0;
      padding: 0;
    }
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
    border-radius: 0.6rem;
    margin-bottom: 3rem;
    flex-direction: column;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    @media (max-width: 1000px) {
      width: 60%;
      margin: 1rem;
    }

    @media (max-width: 800px) {
      width: 70%;
    }

    @media (max-width: 600px) {
      width: 80%;
    }
  }

  .ant-card-head-title {
    text-align: left;
  }

  .calendar,
  .history {
    color: rgba(0, 0, 0, 0.87);
    width: 70%;
    border: 0;
    font-size: 0.875rem;
    text-align: center;
    position: relative;
    min-width: 0;
    word-wrap: break-word;
    padding: 3rem;
    border-radius: 0.6rem;
    margin-bottom: 3rem;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 720px) {
      padding: 0;
    }

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    i {
      font-size: 1.2rem;
      color: green;
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
    this.props.calculateWeeklyChart(this.props.history, this.props.workouts);
    this.props.calculateMonthlyChart(this.props.history, this.props.workouts);
    this.props.calculateYearlyChart(this.props.history, this.props.workouts);
  };

  render() {
    return (
      <StyledStats>
        <div className="legend">
          {this.props.weeklyChart.labels.map((workout, index) => (
            <p
              key={index}
              style={{ backgroundColor: `${this.props.color[index]}` }}
            >
              {workout}
            </p>
          ))}
        </div>
        <div className="chart-row">
          <WeeklyChart />

          <MonthlyChart />

          <YearlyChart />
        </div>

        <div className="calendar-container">
          <WorkoutCalendar />
        </div>
        <div className="history-container">
          <UserHistory />
        </div>
      </StyledStats>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history.history,
    workouts: state.workouts.workouts,
    weeklyChart: state.charts.weeklyChart,
    color: state.charts.color
  };
};

export default connect(
  mapStateToProps,
  {
    fetchWorkouts,
    fetchWorkoutsHistory,
    calculateWeeklyChart,
    calculateMonthlyChart,
    calculateYearlyChart
  }
)(Stats);
