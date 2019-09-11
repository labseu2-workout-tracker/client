import React from "react";
import ChartContainer from "./Charts/ChartContainer";
import UserHistory from "./UserHistory/UserHistory";
import DesktopCalendar from "./Calendar/DesktopCalendar";
import styled from "styled-components";
import { Row } from "antd";

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
        <Row>
          <DesktopCalendar />
        </Row>
        <Row>
          <ChartContainer />
        </Row>
        <Row>
          <UserHistory />
        </Row>
      </StyledStats>
    );
  }
}

export default Stats;
