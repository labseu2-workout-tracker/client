import React from "react";
import ChartContainer from "./Charts/ChartContainer";
import UserHistory from "./UserHistory/UserHistory";
import Calendar from "./Calendar/Calendar";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledStats = styled.div`
  .column {
    width: 50%;
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
