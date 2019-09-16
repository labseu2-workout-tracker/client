import React from 'react';
import styled from 'styled-components';
import { Row, Col, PageHeader } from "antd";
import "antd/dist/antd.css";

import Workouts from './Workouts';
import WorkoutPage from '../customWorkout/WorkoutPage';
import MyWorkouts from '../UserPage/MyWorkouts/MyWorkouts';

class WorkoutContainer extends React.Component {
  

  render() {
    return (
      <StyledContainer>
        <Row type="flex" justify="end">
          <Col span={8} offset={8}>
            <WorkoutPage />
          </Col>
        </Row>
        <Row>
          <PageHeader title="My Saved Workouts" style={{padding: '0'}}/>
        </Row>
        <Row type="flex" gutter={16}>
          <MyWorkouts />
        </Row>
        <Row>
          <PageHeader title="Choose from our pre-made workouts" style={{padding: '0'}}/>
        </Row>
        <Row type="flex" gutter={16}>
          <Workouts />
        </Row>
      </StyledContainer>
    )
  }
}

const StyledContainer = styled.div`
  padding: 2rem;
  background: #ECECEC;

  .ant-row-flex:first-child {
    background-color: transparent;
    padding: 0;
  }

  .ant-row-flex {
    background-color: white ;
    padding: 30px;
    overflow-x: auto;
    max-height: 480px;
    flex-wrap: nowrap;
    margin: 1rem 0;
    justify-content: center;
  }
`

export default WorkoutContainer;