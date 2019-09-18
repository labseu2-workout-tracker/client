import React from 'react';
import { connect } from 'react-redux';
import { fetchWorkoutDetails, deleteWorkout } from '../../../store/actions/workoutsActions';
import { Empty, Button } from 'antd';

import WorkoutCard from '../../../components/WorkoutCard/WorkoutCard';

import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
`;

class WorkoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StyledDiv>
        {this.props.myWorkouts 
        ? (this.props.myWorkouts.map((workout, index) => {
          return (
            <WorkoutCard
              key={index}
              image={workout.image_url}
              name={workout.workout_name}
              description={workout.workout_description}
              startWorkout={() => this.props.fetchWorkoutDetails(workout.id)}
              deleteWorkout={() => this.props.deleteWorkout(workout.id)}
              myWorkout={true}
            />
          )
        }))
        : <Empty
            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
            imageStyle={{ height: 60 }}
            description={
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span > 
                  Custom and saved workouts will appear here!
                </span>
                <Button type="primary" size="large" style={{fontWeight: 'bold'}}> 
                  Create Custom Workouts
                </Button>
              </div>
            }
      >
        {/* <Button type="primary"> Now</Button> */}
      </Empty>
        
        }
      </StyledDiv>
    )
  }
}

const mapStateToProps = state => {
  return {
    myWorkouts: state.workouts.myWorkouts
  };
};

export default connect(
  mapStateToProps,
  { fetchWorkoutDetails, deleteWorkout }
)(WorkoutView);
