import React from 'react';
import { connect } from 'react-redux';
import { fetchWorkoutDetails, deleteWorkout } from '../../../store/actions/workoutsActions';
import { Card } from 'antd';
import WorkoutCard from '../../../components/WorkoutCard/WorkoutCard';

// import styled from 'styled-components';

// const StyledWorkoutView = styled.div``;

class WorkoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.myWorkouts ? (this.props.myWorkouts.map((workout, index) => {
          return (
            <WorkoutCard
              key={index}
              image={workout.image_url}
              name={workout.workout_name}
              description={workout.workout_description}
              startWorkout={() => this.props.fetchWorkoutDetails(workout.id)}
              deleteWorkout={() => this.props.deleteWorkout(workout.id)}
              workout={workout}
            />
          )
        })) : <h1>You have no workouts yet</h1>}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    myWorkouts: state.workouts.myWorkouts
  };
};

export default connect(
  mapStateToProps,
  { fetchWorkoutDetails, deleteWorkout }
)(WorkoutView);
