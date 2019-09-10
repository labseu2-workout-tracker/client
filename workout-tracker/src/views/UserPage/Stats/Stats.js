import React from "react";
import ChartContainer from "./Charts/ChartContainer";
import UserHistory from "./UserHistory/UserHistory";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledStats = styled.div``;

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StyledStats>
        <Row>
          <Col span={12}>
            <ChartContainer />
          </Col>
          <Col span={12}>
            <UserHistory />
          </Col>
        </Row>
      </StyledStats>
    );
  }
}

export default Stats;
