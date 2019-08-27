import React from 'react';
import { fetchExercises } from '../../store/actions';
import { connect } from 'react-redux';

class ExerciseLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  );
  }
}

const mapStateToProps = state => {
  return {
  exercises: state.exercises.exercises,
  };
};
 
export default connect(mapStateToProps, { fetchExercises })(ExerciseLibrary);