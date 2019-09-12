import React from "react";
// import ChartContainer from "./Charts/ChartContainer";
import WeeklyChart from "./Charts/WeeklyChart";
import MonthlyChart from "./Charts/MonthlyChart";
import YearlyChart from "./Charts/YearlyChart";
import UserHistory from "./UserHistory/UserHistory";
import WorkoutCalendar from "./Calendar/WorkoutCalendar";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledStats = styled.div`
  overflow: hidden;

  .chart {
    width: 100%;
    border: 0;
    display: flex;
    position: relative;
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
`;

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StyledStats>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <WeeklyChart />
          </Col>

          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <MonthlyChart />
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <YearlyChart />
          </Col>
        </Row>

        <Row>
            <WorkoutCalendar />
        </Row>

        <Row>
          <UserHistory />
        </Row>
      </StyledStats>
    );
  }
}

export default Stats;
