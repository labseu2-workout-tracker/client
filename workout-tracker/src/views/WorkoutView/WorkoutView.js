import React from "react";
import Watch from '../../components/Watch/Watch';
import { connect } from "react-redux";
import { fetchWorkoutDetails } from "../../store/actions/workoutsActions";
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
  this.props.fetchWorkoutDetails();
  };

  render() {
    return (
      <StyledWorkoutView>
        {this.props.workoutDetails ? () : null}
        <Watch/>

        </StyledWorkoutView>
    );
  }
}

const mapStateToProps = state => {
  return {
    workoutDetails: state.workouts.workoutDetails
  };
};

export default connect(mapStateToProps, { fetchWorkoutDetails })(WorkoutView);
