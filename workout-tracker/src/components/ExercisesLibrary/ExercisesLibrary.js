import React from 'react';
import AllExercises from './AllExercises';
import { fetchExercises } from '../../store/actions';
import { connect } from 'react-redux';

class ExerciseLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount = () => {
  this.props.fetchExercises();
  };

  render() { 
    return ( 
      <AllExercises 
      exercises={this.props.exercises}
      showMuscleGroup={(e) =>
         this.props.showMuscleGroup(e.target.textContent)}  />
     );
  }
}

const mapStateToProps = state => {
  return {
  exercises: state.exercises.exercises,
  };
};
 
export default connect(mapStateToProps, { fetchExercises })(ExerciseLibrary);