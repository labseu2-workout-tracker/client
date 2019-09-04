import React from "react";
import Watch from "../../components/Watch/Watch";
import { connect } from "react-redux";
import {
  chooseExercise,
  finishExercise,
  endWorkout
} from "../../store/actions/workoutsActions";
import styled from "styled-components";

const StyledWorkoutSession = styled.div`
  /* font-size: 1rem; */

  .top {
    display: flex;
  }

  .exercise-picture {
    width: 50%;
  }

  .text {
    width: 50%;
  }

  .picture-text {
    display: flex;
    width: 66%;
  }

  img {
    width: 100%;
  }
`;

class WorkoutSession extends React.Component {
  constructor(props) {
    super(props);
    this.props = {};
  }

  render() {
    return (
      <StyledWorkoutSession>
        <div className="top">
          {this.props.currentExercise ? (
            <div className="picture-text">
              <div className="exercise-picture">
                <img
                  src={this.props.currentExercise[0].picture_one}
                  alt="Exercise explanation"
                />
              </div>
              <div className="text">
                <p>{this.props.currentExercise[0].exercise_name}</p>
                <div className="row">
                  <p>Sets to complete:</p>
                  <p>{this.props.currentExercise.length}</p>
                </div>
                <div className="row">
                  <p>Reps for exercise:</p>
                  <p>{this.props.currentExercise[0].reps}</p>
                </div>
                <button
                  onClick={() =>
                    this.props.finishExercise(this.props.currentExercise[0].id)
                  }
                >
                  finish Exercise
                </button>
              </div>
            </div>
          ) : (
            <p>No choosed exercise</p>
          )}
          <Watch />
        </div>

<div className="exercise-text-and-names">

{this.props.currentExercise ? (
              <div className="description">
                <p>{this.props.currentExercise[0].description}</p>                
            </div>
          ) : (
            <p>No choosed exercise</p>
          )}

        {/* Display Exercises(but without duplicates) => filter all duplicates with reduce
         method and map over result to display exercise names with onClick */}
        {this.props.allExercises ? (
          <div>
            <p>Choose exercise:</p>
            {this.props.allExercises
              .reduce((acc, current) => {
                const x = acc.find(
                  item => item.exercise_name === current.exercise_name
                  );
                  if (!x) {
                    return acc.concat([current]);
                  } else {
                    return acc;
                  }
              }, [])
              .map((exercise, index) => {
                return (
                  <div key={index}>
                    <p
                      onClick={() =>
                        this.props.chooseExercise(exercise.exercise_name)
                      }
                      >
                      {exercise.exercise_name}
                    </p>
                  </div>
                );
              })}
          </div>
        ) : <button onClick={() => this.props.endWorkout(this.props.workoutId)}>Finish Workout</button>}
</div>

{this.props.currentExercise ? (
    <div className="video">
      <video width="320" height="240" controls>
        <source src={this.props.currentExercise[0].video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>               
  </div>
) : (
  <p>No choosed exercise</p>
)}
      </StyledWorkoutSession>
    );
  }
}

const mapStateToProps = state => {
  return {
    allExercises: state.workouts.allExercises,
    currentExercise: state.workouts.currentExercise,
    workoutId: state.workouts.workoutId
  };
};

export default connect(
  mapStateToProps,
  { chooseExercise, finishExercise, endWorkout }
)(WorkoutSession);

// description: "Lie back on an incline bench with a dumbbell in each hand atop your thighs. The palms of your hands will be facing each other. Then, using your thighs to help push the dumbbells up, lift the dumbbells one at a time so that you can hold them at shoulder width. Once you have the dumbbells raised to shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position. Be sure to keep full control of the dumbbells at all times. Then breathe out and push the dumbbells up with your chest. Lock your arms at the top, hold for a second, and then start slowly lowering the weight. Tip Ideally, lowering the weights should take about twice as long as raising them. Repeat the movement for the prescribed amount of repetitions. When you are done, place the dumbbells back on your thighs and then on the floor. This is the safest manner to release the dumbbells."
// duration: null
// equipment: "Dumbbell"
// exercise_name: "Incline Dumbbell Press"
// picture_one: "https://www.bodybuilding.com/exercises/exerciseImages/sequences/380/Male/l/380_1.jpg"
// picture_two: "https://www.bodybuilding.com/exercises/exerciseImages/sequences/380/Male/l/380_2.jpg"
// reps: 12
// video: "
