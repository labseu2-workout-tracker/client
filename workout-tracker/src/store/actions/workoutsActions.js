import { axiosWithAuth } from '../axiosWithAuth';
import axios from 'axios';

// actions
export const FETCH_WORKOUTS = 'FETCH_WORKOUTS';
export const FETCH_WORKOUT_DETAILS = 'FETCH_WORKOUT_DETAILS';


const workouts = `${process.env.REACT_APP_BASE_URL}/workouts`;

// action dispatcher
export const fetchWorkouts = () => dispatch => {
  // type LOADING needs to be added (also for the redux state) 
  axiosWithAuth().get(workouts)
    .then(res => {
      dispatch({ type: FETCH_WORKOUTS, workouts: res.data });
    })
    .catch(err => {
   // type ERROR needs to be added (also for the redux state)
    });
};

export const fetchWorkoutDetails = () => dispatch => {
  // type LOADING needs to be added (also for the redux state) 
  
  //the one in the get request will be later changed to from the user choosed
  // workout (workout_id)
  axiosWithAuth().get(`${workouts}/1`)
  //Prototype until backend is done 
  // changed backend on my files to get data back
    .then(res => {
      debugger
      dispatch({ type: FETCH_WORKOUT_DETAILS, workoutDetails: res.data });
    })
    .catch(err => {
   // type ERROR needs to be added (also for the redux state)
   debugger
    });
};