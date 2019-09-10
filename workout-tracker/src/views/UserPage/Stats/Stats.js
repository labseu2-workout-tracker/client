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
          <Col className="column" span={12}>
            <ChartContainer />
          </Col>
          <Col className="column" span={12}>
          <Calendar/>
          </Col>
        </Row>
            <UserHistory />
      </StyledStats>
    );
  }
}

export default Stats;
