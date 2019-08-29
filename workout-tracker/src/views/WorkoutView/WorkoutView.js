import React from "react";
import Watch from '../../components/Watch/Watch';
import { connect } from "react-redux";
import styled from "styled-components";

const StyledWorkoutView = styled.div``;

class WorkoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // currentWorkout: state.currentWorkout.currentWorkout
  };
};

export default connect(mapStateToProps)(WorkoutView);
