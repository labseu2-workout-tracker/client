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
        {this.props.workoutDetails ? (this.props.workoutDetail.exercises.reduce((acc, current) => {
  const x = acc.find(item => item.name === current.name);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, [])
.map((exercise, index) => {
return <div key={index}>

</div>
        })) : null}
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