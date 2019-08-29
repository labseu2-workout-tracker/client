import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class WorkoutView extends Component {
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
   currentWorkout: state.currentWorkout.currentWorkout,
  };
};
 
export default connect(mapStateToProps)(WorkoutView);