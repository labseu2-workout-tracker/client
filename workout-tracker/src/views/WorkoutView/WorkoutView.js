import React from "react";
import Watch from '../../components/Watch/Watch';
import { connect } from "react-redux";
import { fetchWorkoutStart } from "../../store/actions/workoutsActions";
import styled from "styled-components";

const StyledWorkoutView = styled.div`
 font-size:1rem;
`;

class WorkoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount = () => {
  this.props.fetchWorkoutStart();
  };

  render() {
    return (
      <StyledWorkoutView>
        <Watch/>
        </StyledWorkoutView>
    );
  }
}

const mapStateToProps = state => {
  return {
    // currentWorkout: state.currentWorkout.currentWorkout
  };
};

export default connect(mapStateToProps, { fetchWorkoutStart })(WorkoutView);
