import axios from 'axios';

// actions
export const FETCH_WORKOUTS = 'FETCH_WORKOUTS';


const workouts = `${process.env.REACT_APP_BASE_URL}/workouts`;

// action dispatcher
export const fetchWorkouts = () => dispatch => {
  const token = localStorage.getItem("token");

  // type LOADING needs to be added (also for the redux state) 
  return axios.get(workouts, {headers: {
    Authorization: `Bearer ${token}`,
  }})
    .then(res => {
      dispatch({ type: FETCH_WORKOUTS, workouts: res.data });
    })
    .catch(err => {
   // type ERROR needs to be added (also for the redux state)
    });
};
