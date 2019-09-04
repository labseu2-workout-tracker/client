import React from "react";
import AllExercises from "../../components/Exercises/AllExercises";
import SingleExercise from "../../components/Exercises/SingleExercise";
import { fetchExercises, showMuscleGroup, showSingleExercise, closeSingleExercise, loadMore} from "../../store/actions/exerciseActions";
import { connect } from "react-redux";

class ExerciseLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    searchName: '',
    };
  }

  componentDidMount = () => {
    this.props.fetchExercises();
  };

  handleChange = (e) => {

    this.setState({
      searchName: e.target.value,
    });
  };

  searchForName = () => {

  };

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
        showSingleExercise={this.props.showSingleExercise}
        loadMore={this.props.loadMore}
        searchName={this.state.searchName}
        handleChange={this.handleChange}
        searchForName={this.searchForName}
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
  { fetchExercises, showMuscleGroup, showSingleExercise, closeSingleExercise, loadMore }
)(ExerciseLibrary);
