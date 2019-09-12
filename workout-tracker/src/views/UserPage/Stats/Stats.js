import React from "react";
import ChartContainer from "./Charts/ChartContainer";
import WeeklyChart from "./Charts/WeeklyChart";
import MonthlyChart from "./Charts/MonthlyChart";
import YearlyChart from "./Charts/YearlyChart";
import UserHistory from "./UserHistory/UserHistory";
import WorkoutCalendar from "./Calendar/WorkoutCalendar";
import styled from "styled-components";
import { Row, Col, Card } from "antd";

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
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
            title="Weekly Result" 
            style={{ backgroundColor: "#11B8CC" }}
            >
              <WeeklyChart />
            </Card>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card 
            title="Monthly Result" 
            style={{ backgroundColor: "#FC940C" }}
            >
              <MonthlyChart />
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card 
            title="Yearly Result" 
            style={{ backgroundColor: "#E94340" }}
            >
              <YearlyChart />
            </Card>
          </Col>
        </Row>
        ,
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
