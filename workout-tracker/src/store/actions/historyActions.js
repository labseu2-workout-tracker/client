import { axiosWithAuth } from '../axiosWithAuth';

export const FETCH_WORKOUTS_HISTORY = 'FETCH_WORKOUTS_HISTORY';

export const fetchWorkoutsHistory = () => dispatch => {
  
    // type LOADING needs to be added (also for the redux state) 
    axiosWithAuth().get(`${process.env.REACT_APP_BASE_URL}/workouts/history/`)
      .then(res => {
  
        dispatch({ type: FETCH_WORKOUTS_HISTORY, session: res.data.workoutHistory });
      })
      .catch(err => {
     // type ERROR needs to be added (also for the redux state)
      });
  };