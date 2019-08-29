import React from 'react';
import { connect } from 'react-redux';

const Workouts = () => {
  return ( 
    <div>
      
    </div>
   );
}
 
const mapStateToProps = state => {
  return{
    workouts:state.workouts.workouts,

  }
}
export default connect(mapStateToProps)(Workouts);
