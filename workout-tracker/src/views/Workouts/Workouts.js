import React from 'react';
import { connect } from 'react-redux';
import {fetchWorkouts } from '../../store/actions/workoutsActions';
import { Link } from 'react-router-dom';


class Workouts  extends React.Component {

  // calling the action fetch workout with lifecycle msg
  componentDidMount() {
    this.props.fetchWorkouts();
  }
  render() {
    return(
      <div className="land-wrapper">

      {/* array- mappin over each workout */}
      {/* check if null or not then return  */}
      {this.props.workouts ? (this.props.workouts.map(workout =>{
        return <div className="workout-card"> 
          <img src={workout.image_url} alt="workout" className="workout-img"/>
          <h1>{workout.workout_name}</h1>
          <p>{workout.workout_description}</p>
          <Link to="#" className="btn">
                Add Workout
              </Link>
        </div> 
      })) : null}
    </div>
    )
  }
}

 
const mapStateToProps = state => {
  return{
    workouts:state.workouts.workouts,

  }
}
export default connect(mapStateToProps, {fetchWorkouts})(Workouts);
