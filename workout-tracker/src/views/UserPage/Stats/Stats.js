import React from "react";
import ChartContainer from "./Charts/ChartContainer";
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
          <ChartContainer />
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
