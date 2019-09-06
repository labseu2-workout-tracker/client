import React from "react";
import AllExercises from "../../components/Exercises/AllExercises";
import SingleExercise from "../../components/Exercises/SingleExercise";
import {
  fetchExercises,
  showMuscleGroup,
  showSingleExercise,
  closeSingleExercise,
  loadMore,
  searchExercise,
  showEquipment
} from "../../store/actions/exerciseActions";
import { connect } from "react-redux";

class ExerciseLibrary extends React.Component {

  componentDidMount = () => {
    this.props.fetchExercises();
  };

  render() {
    if (this.props.singleExercise) {
      return (
        <SingleExercise
          exercise={this.props.singleExercise[0]}
          closeExercise={this.props.closeSingleExercise}
        />
      );
    }
    return (
      <AllExercises
        exercises={this.props.exercises}
        showMuscleGroup={e => this.props.showMuscleGroup(e.target.textContent)}
        showSingleExercise={this.props.showSingleExercise}
        loadMore={this.props.loadMore}
        searchForName={(exercise_name) => this.props.searchExercise(exercise_name)}
        showEquipment={e => this.props.showEquipment(e.target.textContent)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises.exercises,
    singleExercise: state.exercises.singleExercise
  };
};

export default connect(
  mapStateToProps,
  {
    fetchExercises,
    showMuscleGroup,
    showSingleExercise,
    closeSingleExercise,
    loadMore,
    searchExercise,
    showEquipment
  }
)(ExerciseLibrary);
