import React from "react";
import { connect } from "react-redux";
import {
  fetchWorkouts,
  fetchWorkoutDetails,
  addWorkout,
  closeWindow
} from "../../store/actions/workoutsActions";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Icon } from 'antd'
import AddWorkoutButton from "../../utils/AddWorkoutButton";


class Workouts extends React.Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }
  
  render() {
    return (
      <StyledWorkouts>
        <div className={this.props.addedWorkout ? "added-workout" : "off"}>
          <div className="close">
            <i onClick={this.props.closeWindow} className="fa fa-times" />
          </div>
          <h1>You added a workout to your workout gallery</h1>
        </div>

        <h1 className="coolstuff">Choose from our Workouts</h1>
        <div className="land-wrapper">
          {this.props.workouts
            ? this.props.workouts.map((workout, index) => {
                return (
                  <div key={index} className="workout-card">
                    <img
                      src={workout.image_url}
                      alt="workout"
                      className="workout-img"
                    />
                    <h1>{workout.workout_name}</h1>
                    <p>{workout.workout_description}</p>
                    <Link
                      onClick={() => this.props.fetchWorkoutDetails(workout.id)}
                      to="Workout_session"
                      className="btn"
                    >
                      Start Workout
                    </Link>
                    <p
                      onClick={() => this.props.addWorkout(workout.id)}
                      className="btn"
                    >
                      Add Workout
                    </p>
                  </div>
                );
              })
            : null}
        </div>
        <AddWorkoutButton />
      </StyledWorkouts>
    );
  }
}

const StyledWorkouts = styled.div`
text-align: center;

.off {
display: none;
}

.added-workout {
  background: linear-gradient(45deg, rgb(106, 120, 209), rgb(0, 164, 189));

top: 50%;
left: 50%;
position: fixed;
transform: translate(-50%, -50%);
width: 50%;
height: 50%;
border-radius: .5rem;
}

.close {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

i {
  /* font-size: 3rem; */
  transition: .6s ease-in-out;

  &:hover{
    color: red;
  }
}

`;

const mapStateToProps = state => {
  return {
    workouts: state.workouts.workouts,
    addedWorkout: state.workouts.addedWorkout
  };
};
export default connect(
  mapStateToProps,
  { fetchWorkouts, fetchWorkoutDetails, addWorkout, closeWindow }
)(Workouts);
