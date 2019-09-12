import React from 'react';
import Watch from '../../components/Watch/Watch';
import { connect } from 'react-redux';
import {
  PageHeader,
  Statistic,
  Row,
  Col,
  Card,
  Icon,
  List,
  Button,
  Modal,
  Carousel,
  Alert
} from 'antd';
import {
  chooseExercise,
  finishExercise,
  endWorkout
} from '../../store/actions/workoutsActions';
import styled from 'styled-components';

const StyledWorkoutSession = styled.div``;

class WorkoutSession extends React.Component {
  componentDidMount = () => {
    // const startButton = document.querySelector(".btn-start");
    // startButton.click();
  };

  endWorkout = () => {
    this.props.endWorkout(this.props.workoutId);
  };

  state = {
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false
    });
  };

  componentWillUnmount() {
    this.setState({ initial: 0 });
    this.props.endWorkout(this.props.workoutId);
  }

  endWorkout = () => {
    this.props.endWorkout(this.props.workoutId, this.props.history);
  };
  render() {
    return (
      <StyledWorkoutSession>
        <Card title="Workout Session"
        style={{
          fontSize: 14,
          margin: 10,
          backgroundColor: 'rgba(13, 40, 90, 0.85)',
         }} >

          <Card //Top Card with picture / watch  and Details reps etc
            type="inner"
          >
            Inner Card content
          </Card>
          <Card    //Bottom Card with Exer & Instructions
            style={{ marginTop: 16 }}
            type="inner"
          >
            Inner Card content
          </Card>
        </Card>
        , ,
      </StyledWorkoutSession>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allExercises: state.workouts.allExercises,
    currentExercise: state.workouts.currentExercise,
    workoutId: state.workouts.workoutId,
    myWorkout: state.workouts.myWorkout
  };
};

export default connect(
  mapStateToProps,
  { chooseExercise, finishExercise, endWorkout }
)(WorkoutSession);
