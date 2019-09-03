import React from 'react';
import { connect } from 'react-redux';
import {fetchWorkouts } from '../../store/actions/workoutsActions';


class Workouts  extends React.Component {

  // calling the action fetch workout with lifecycle msg
  componentDidMount() {
    this.props.fetchWorkouts();
  }
  render() {
    return(
      <div>
        <h1>Hello World </h1>
      {/* array- mappin over each workout */}
      {/* check if null or not then return  */}
      {this.props.workouts ? (this.props.workouts.map(workout =>{
        return <div> 
          <h1>Hello World</h1>
          <h2>{workout.workout_name}</h2>
          <p>{workout.workout_description}</p>
          <img src={workout.image_url} alt="workout" />
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
