import React from "react";
import AllExercises from "../../components/Exercises/AllExercises";
import SingleExercise from "../../components/Exercises/SingleExercise";
import { closeSingleExercise } from "../../store/actions/exerciseActions";
import { connect } from "react-redux";

class ExerciseLibrary extends React.Component {
  render() {
    if (this.props.singleExercise) {
      return (
        <SingleExercise
          exercise={this.props.singleExercise[0]}
          closeExercise={this.props.closeSingleExercise}
        />
      );
    }
    return <AllExercises />;
  }
}

const mapStateToProps = state => {
  return {
    singleExercise: state.exercises.singleExercise,
  };
};

export default connect(
  mapStateToProps,
  {
    closeSingleExercise
  }
)(ExerciseLibrary);
