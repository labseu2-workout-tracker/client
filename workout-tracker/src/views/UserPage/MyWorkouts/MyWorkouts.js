import React from 'react';
import { connect } from 'react-redux';
import { fetchWorkoutDetails, deleteWorkout } from '../../../store/actions/workoutsActions';
<<<<<<< HEAD
import {Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Empty } from 'antd';
=======
import { Link } from 'react-router-dom';
import WorkoutPage from '../../customWorkout/WorkoutPage'
>>>>>>> cdf9a6b3ddf3124ba1e3d4f9da397ebe6538cd88
// import styled from 'styled-components';

// const StyledWorkoutView = styled.div``;

class WorkoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};



  }
  render() {
   
    return <div>
      <h1>
        My Workouts
            </h1>
      <div className='land-wrapper'>
        {this.props.myWorkouts ? (this.props.myWorkouts.map((workout, index) => {
          return <div key={index} className='workout-card'>
            <img src={workout.image_url} alt='workout' className='workout-img' />
            <h1>{workout.workout_name}</h1>
            <p>{workout.workout_description}</p>
            <Link onClick={() => this.props.fetchWorkoutDetails(workout.id)} to='/Workout_session' className='btn'>
              Start Workout
              </Link>
            <p onClick={() => this.props.deleteWorkout(workout.id)} className='btn'>
              Delete Workout
              </p>
<<<<<<< HEAD
        </div> 
      })) : (<Link to='/Workouts'><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Add some workouts'}/></Link>)}
    </div>
            </div>;
=======
          </div>
        })) : <h1>You have no workouts yet</h1>}
      </div>
      <WorkoutPage /> 
     
    </div>;
>>>>>>> cdf9a6b3ddf3124ba1e3d4f9da397ebe6538cd88
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
