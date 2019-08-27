import React from "react";
import AllExercises from "./AllExercises";
import { fetchExercises, showMuscleGroup } from "../../store/actions";
import { connect } from "react-redux";

class ExerciseLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.fetchExercises();
    
    setTimeout(() => this.props.showMuscleGroup('Chest'), 1000);// That we dont see all exercises at the start
  };

  render() {
    return (
      <AllExercises
        exercises={this.props.exercises}
        pageNumbers={this.props.pageNumbers}
        showMuscleGroup={e =>
           this.props.showMuscleGroup(e.target.textContent)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises.exercises,
    pageNumbers: state.pageNumbers,
  };
};

export default connect(
  mapStateToProps,
  { fetchExercises,
  showMuscleGroup }
)(ExerciseLibrary);
