import React from 'react';
import styled from 'styled-components';
import { Row, Col, PageHeader } from "antd";
import "antd/dist/antd.css";

import Workouts from './Workouts';
import WorkoutPage from '../customWorkout/WorkoutPage'
import MyWorkouts from './MyWorkouts/MyWorkouts';

class WorkoutContainer extends React.Component {
  

  render() {
    return (
      <StyledContainer>
        <Row type="flex" justify="end" gutter={16}>
          <Col>
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
    justify-content: flex-end;
  }

  .ant-row-flex {
    background-color: white ;
    padding: 30px;
    justify-content: center;
    /* overflow-x: auto;
    overflow-y: hidden; */
    /* max-height: 480px; */
    /* flex-wrap: nowrap; */
    margin: 1rem 0;
  }
  .anticon.anticon-info-circle {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1.5rem;
  }
  .anticon.anticon-minus-circle, 
  .anticon.anticon-plus-circle {
    position: absolute;
    bottom: 0;
    right: 2rem;
    font-size: 1.5rem
  }

  .ant-card-meta-description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export default WorkoutContainer;