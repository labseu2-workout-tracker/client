import React from 'react';
import AllExercises from '../../components/Exercises/AllExercises';
import SingleExercise from '../../components/Exercises/SingleExercise';
import {
  fetchExercises,
  showMuscleGroup,
  showSingleExercise,
  closeSingleExercise,
  loadMore,
  searchExercise,
  showEquipment
} from '../../store/actions/exerciseActions';
import { connect } from 'react-redux';

class ExerciseLibrary extends React.Component {

  componentDidMount = () => {
    this.props.fetchExercises();
  };

  showMuscleGroup = exercise_name => {
    this.props.showMuscleGroup(exercise_name);

    const muscleButton = document.querySelector(".muscles");
    const equipmentButton = document.querySelector(".equipment");
    muscleButton.click();

    setTimeout(() => equipmentButton.click() ,1000)

  }

  showEquipment = equipment => {

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
        showMuscleGroup={this.showMuscleGroup}
        showSingleExercise={this.props.showSingleExercise}
        loadMore={this.props.loadMore}
        searchForName={(exercise_name) => this.props.searchExercise(exercise_name)}
        showEquipment={this.showEquipment}
        indexOfLastExercise={this.props.indexOfLastExercise}
        arrayOfCurrentExercises={this.props.arrayOfCurrentExercises}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises.exercises,
    singleExercise: state.exercises.singleExercise,
    indexOfLastExercise: state.exercises.indexOfLastExercise,
    arrayOfCurrentExercises: state.exercises.arrayOfCurrentExercises
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
