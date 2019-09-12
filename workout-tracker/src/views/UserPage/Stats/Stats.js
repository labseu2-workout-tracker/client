import React from "react";
import ChartContainer from "./Charts/ChartContainer";
import WeeklyChart from "./Charts/WeeklyChart";
import MonthlyChart from "./Charts/MonthlyChart";
import YearlyChart from "./Charts/YearlyChart";
import UserHistory from "./UserHistory/UserHistory";
import WorkoutCalendar from "./Calendar/WorkoutCalendar";
import styled from "styled-components";
import { Row, Card } from "antd";

const StyledStats = styled.div`
  overflow: hidden;
`;

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StyledStats>
        <Card style={{ width: 750 }}>
          <WeeklyChart />
        </Card>
        <Card style={{ width: 750 }}>
          <MonthlyChart />
        </Card>
        <Card style={{ width: 750 }}>
          <YearlyChart />
        </Card>
        <Row>
          <WorkoutCalendar />
        </Row>
        <Row></Row>
        <Row>
          <UserHistory />
        </Row>
      </StyledStats>
    );
  }
}

export default Stats;
