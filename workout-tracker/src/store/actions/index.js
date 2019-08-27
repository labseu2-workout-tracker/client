import axios from 'axios';

export const FETCH_EXERCISES = 'FETCH_EXERCISES';

const exercises = 'http://localhost:5000/exercises';
// adress get's changed later

export const fetchExercises = () => dispatch => {
  // type LOADING needs to be added (also for the redux state) 

  return axios.get(exercises)
    .then(res => {
      dispatch({ type: FETCH_EXERCISES, exercises: res.data });
    })
    .catch(err => {
   // type ERROR needs to be added (also for the redux state)
    });
};