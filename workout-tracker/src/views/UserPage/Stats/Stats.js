import React from "react";
import ChartContainer from "./Charts/ChartContainer";
import styled from "styled-components";
import { Row, Col } from 'antd';

const StyledStats = styled.div`
`;

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <StyledStats>
 <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
      </StyledStats>
     );
  }
}
 
export default Stats;