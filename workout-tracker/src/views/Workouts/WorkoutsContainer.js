import React from 'react';
import styled from 'styled-components';
import { Row, Col } from "antd";

import Workouts from './Workouts';
import WorkoutPage from '../customWorkout/WorkoutPage';
import MyWorkouts from '../UserPage/MyWorkouts/MyWorkouts';

class WorkoutContainer extends React.Component {
  

  render() {
    return (
      <>
        <Row>
          <Col span={8}>
          </Col>
          <Col span={8} offset={8}>
            <WorkoutPage />
          </Col>
        </Row>
        <Row>
          <MyWorkouts />
        </Row>
        <Row>
          <Workouts />
        </Row>
      </>
    )
  }
}

const StyledContainer = styled.div`

`

export default WorkoutContainer;