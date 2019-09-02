import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledWorkoutView = styled.div``;

class WorkoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
          <h1>
            My Workouts
            </h1>
            </div>;
  }
}

const mapStateToProps = state => {
  return {
    // currentWorkout: state.currentWorkout.currentWorkout
  };
};

export default connect(mapStateToProps)(WorkoutView);
