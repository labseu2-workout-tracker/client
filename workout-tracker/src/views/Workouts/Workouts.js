import React from "react";
import { connect } from "react-redux";
import {
  fetchWorkouts,
  fetchWorkoutDetails,
  addWorkout,
} from "../../store/actions/workoutsActions";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { message, notification } from 'antd';

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
  font-size: 3rem;
  transition: .6s ease-in-out;

  &:hover{
    color: red;
  }
}
`;


class Workouts extends React.Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }

  addWorkout = (type, workout_id, workout_name) => {
    notification[type]({
      message: 'Successful!',
      description:
      `The workout ${workout_name} got added to your list.`,
    });

    this.props.addWorkout(workout_id);
  };
  
  render() {
    return (
      <StyledWorkouts>
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
                      className="btn"                    
                    onClick={() => this.addWorkout("success", workout.id, workout.workout_name)}>Add Workout</p>
                  </div>
                );
              })
            : null}
        </div>
      </StyledWorkouts>
    );
  }
}

const mapStateToProps = state => {
  return {
    workouts: state.workouts.workouts,
  };
};
export default connect(
  mapStateToProps,
  { fetchWorkouts, fetchWorkoutDetails, addWorkout }
)(Workouts);
