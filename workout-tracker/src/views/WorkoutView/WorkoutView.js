import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledWorkoutView = styled.div``;

class WorkoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  startWorkout = () => {
    setInterval(
      () =>
        this.setState(prevState => {
          return {
            time: prevState.time + 1,
          };
        }),
      1000
    );
  };

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
        <button onClick={this.startWorkout}>Start</button>
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
