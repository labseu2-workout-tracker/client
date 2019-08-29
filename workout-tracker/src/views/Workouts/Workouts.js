import React from 'react';
import { connect } from 'react-redux';

class Workouts  extends React.Component {

  // calling the action fetch workout with lifecycle msg
  componentDidMount() {
    this.props.fetchWorkouts();
  }
  render() {
    return(
      <div>
      {/* array- mappin over each workout */}
      {this.props.workouts.map(workout =>{
        return <div> 
          <h2>{workout.workout_name}</h2>
          <p>{workout.workout_description}</p>
          <img src={workout.image_url} alt="workout" />
        </div> 
      })}
    </div>
    )
  }
}

 
const mapStateToProps = state => {
  return{
    workouts:state.workouts.workouts,

  }
}
export default connect(mapStateToProps)(Workouts);
