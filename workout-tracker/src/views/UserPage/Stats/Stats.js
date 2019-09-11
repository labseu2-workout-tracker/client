import React from "react";
import ChartContainer from "./Charts/ChartContainer";
import UserHistory from "./UserHistory/UserHistory";
import Calendar from "./Calendar/Calendar";
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
          <Calendar />
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
