import React from "react";
import AllExercises from "../../components/Exercises/AllExercises";
import SingleExercise from "../../components/Exercises/SingleExercise";
import { fetchExercises, showMuscleGroup, showSingleExercise, closeSingleExercise} from "../../store/actions/exerciseActions";
import { connect } from "react-redux";

class ExerciseLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.fetchExercises();
  }

  render() {
    if (this.props.singleExercise) {
      return (
        <SingleExercise 
        exercise={this.props.singleExercise[0]}
        closeExercise={this.props.closeSingleExercise} />
       )
    }
    return (
      <AllExercises
        exercises={this.props.exercises}
        showMuscleGroup={e => this.props.showMuscleGroup(e.target.textContent)}
        showSingleExercise={(e) => this.props.showSingleExercise(e.target.textContent)}
        loadMore={this.props.loadMore}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises.exercises,
    singleExercise: state.exercises.singleExercise,
  };
};

export default connect(
  mapStateToProps,
  { fetchExercises, showMuscleGroup, showSingleExercise, closeSingleExercise }
)(ExerciseLibrary);
