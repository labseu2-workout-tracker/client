import React from 'react';
import styled from 'styled-components';
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import Workouts from './Workouts';
import WorkoutPage from '../customWorkout/WorkoutPage';
import MyWorkouts from '../UserPage/MyWorkouts/MyWorkouts';

class WorkoutContainer extends React.Component {
  

  render() {
    return (
      <StyledContainer>
        <Row>
          <Col span={8}>
          </Col>
          <Col span={8} offset={8}>
            <WorkoutPage />
          </Col>
        </Row>
        <Row 
          type="flex"
        >
          <MyWorkouts />
        </Row>
        <Row>
          <Workouts />
        </Row>
      </StyledContainer>
    )
  }
}

const StyledContainer = styled.div`
  padding: 2rem;
  background: #ECECEC;
  
  .ant-row-flex {
    padding: 30px;
    overflow-x: auto;
    max-height: 400px;
    flex-wrap: nowrap;
  }
`

export default WorkoutContainer;