import React from "react";
import Watch from "../../components/Watch/Watch";
import { connect } from "react-redux";
import { fetchWorkoutDetails } from "../../store/actions/workoutsActions";
import styled from "styled-components";

const StyledWorkoutView = styled.div`
  font-size: 1rem;
`;

class WorkoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: this.props.workoutDetails ? this.props.workoutDetails.exercises : null,
    };
  }

  componentDidMount = () => {
    this.props.fetchWorkoutDetails();
  };
 
  chooseExercise = (e) => {
  
  }

  render() {
    return (
      <StyledWorkoutView>
        <Watch />

        <p>Choose exercise:</p>
        {/* Display Exercises(but without duplicates) */}
        {this.props.workoutDetails
          ? this.props.workoutDetails.exercises
              .reduce((acc, current) => {
                const x = acc.find(item => item.exercise_name === current.exercise_name);
                if (!x) {
                  return acc.concat([current]);
                } else {
                  return acc;
                }
              }, [])
              .map((exercise, index) => {
                return (
                  <div key={index}>
                    <p onClick={this.chooseExercise}>{exercise.exercise_name}</p>
                  </div>
                );
              })
          : null}
      </StyledWorkoutView>
    );
  }
}

const mapStateToProps = state => {
  return {
    workoutDetails: state.workouts.workoutDetails
  };
};

export default connect(
  mapStateToProps,
  { fetchWorkoutDetails }
)(WorkoutView);
