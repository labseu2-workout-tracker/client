import React from "react";
import ChartContainer from "./Charts/ChartContainer";
import WeeklyChart from "./Charts/WeeklyChart";
import MonthlyChart from "./Charts/MonthlyChart";
import YearlyChart from "./Charts/YearlyChart";
import UserHistory from "./UserHistory/UserHistory";
import WorkoutCalendar from "./Calendar/WorkoutCalendar";
import styled from "styled-components";
import { Row, Col, Card } from "antd";

const { Meta } = Card;

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

  .chart-one {
    background-color: #fff;
  }

  .chart-two {
    background-color: #fff;
  }

  .chart-three {
    background-color: #fff;
  }

  .calendar {
    background-color: #fff;
  }

  .calendar {
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
            <Card hoverable className="chart chart-one" cover={<WeeklyChart />}>
              <Meta title="Weekly Result" description="www.instagram.com" />
            </Card>
          </Col>

          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              className="chart chart-two"
              cover={<MonthlyChart />}
            >
              <Meta title="Monthly Result" description="www.instagram.com" />
            </Card>
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card className="chart chart-three" title="Yearly Result">
              <YearlyChart />
            </Card>
          </Col>
        </Row>
        <Row>
          <Card className="calendar" title="Calendar">
            <WorkoutCalendar />
          </Card>
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
