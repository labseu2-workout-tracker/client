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
      currentExercise: null,
      set: "",
      reps: "",
      time: "", 
      weight: ""
    };
  }

  componentDidMount = () => {
    this.props.fetchWorkoutDetails();
  };

  chooseExercise = e => {
    const filterCurrentExercise = [this.props.workoutDetails][0].exercises.filter(
    exercise => exercise.exercise_name === e.target.textContent
    );

    this.setState({
      currentExercise: filterCurrentExercise,
    });
  };

  handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value,
  });
  };

  render() {
    return (
      <StyledWorkoutView>
        {this.state.currentExercise ? (
          <div>
            <div className="exercise-picture">
            <img src={this.state.currentExercise[0].picture_one} alt="Exercise explanation"/>
            </div>
            <div>
              <div className="row">
              <p>Set</p>
              <input type="number" value={this.state.set} onChange={this.handleChange} placeholder={this.state.currentExercise.length}  name="set"/> 
              </div>
              <div className="row">
              <p>Reps</p>
              <input type="number" value={this.state.reps} onChange={this.handleChange} placeholder={this.state.currentExercise[0].reps}  name="reps"/> 
              </div>
              {/* <div className="row">
              <p>Time</p>
              <input type="number" value={this.state.time} onChange={this.handleChange} placeholder={this.state.currentExercise.length}  name="time"/> 
              </div> */}
              <div className="row">
              <p>Weight</p>
              <input type="number" value={this.state.weight} onChange={this.handleChange} placeholder="How many KG's ?"  name="weight"/> 
              </div>
            </div>
          </div>
        ) : null}
        <Watch />

        <p>Choose exercise:</p>
        {/* Display Exercises(but without duplicates) */}
        {this.props.workoutDetails
          ? this.props.workoutDetails.exercises
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
                    <p onClick={this.chooseExercise}>
                      {exercise.exercise_name}
                    </p>
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


// description: "Lie back on an incline bench with a dumbbell in each hand atop your thighs. The palms of your hands will be facing each other. Then, using your thighs to help push the dumbbells up, lift the dumbbells one at a time so that you can hold them at shoulder width. Once you have the dumbbells raised to shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position. Be sure to keep full control of the dumbbells at all times. Then breathe out and push the dumbbells up with your chest. Lock your arms at the top, hold for a second, and then start slowly lowering the weight. Tip Ideally, lowering the weights should take about twice as long as raising them. Repeat the movement for the prescribed amount of repetitions. When you are done, place the dumbbells back on your thighs and then on the floor. This is the safest manner to release the dumbbells."
// duration: null
// equipment: "Dumbbell"
// exercise_name: "Incline Dumbbell Press"
// picture_one: "https://www.bodybuilding.com/exercises/exerciseImages/sequences/380/Male/l/380_1.jpg"
// picture_two: "https://www.bodybuilding.com/exercises/exerciseImages/sequences/380/Male/l/380_2.jpg"
// reps: 12
// video: "