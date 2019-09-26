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
            <WorkoutPage {...this.props} />
          </Col>
        </Row>
        <Row>
          <PageHeader title="My Saved Workouts" style={{padding: '0'}}/>
        </Row>
        <Row type="flex" gutter={16}>
          <MyWorkouts {...this.props} />
        </Row>
        <Row>
          <PageHeader title="Choose from our pre-made workouts" style={{padding: '0'}}/>
        </Row>
        <Row type="flex" gutter={16}>
          <Workouts  />
        </Row>
      </StyledContainer>
    )
  }
}

const StyledContainer = styled.div`
  padding: 2rem;
  background: #fff;

  .ant-row-flex:first-child {
    background-color: transparent;
    padding: 0;
    justify-content: flex-end;
    color: transparent;
    border-radius: 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }

  }

  .ant-row-flex {
    padding: 30px;
    justify-content: center;
    margin: 1rem 0;
    color: rgba(0, 0, 0, 0.87);
    width: 100%;
    border: 0;
    border-radius: 0.6rem;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  }

  .ant-col .ant-card-bordered{
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }

  .ant-card-meta-description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
`

export default WorkoutContainer;