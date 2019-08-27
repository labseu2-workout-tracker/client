import axios from 'axios';

export const FETCH_EXERCISES = 'FETCH_EXERCISES';

const exercises = 'http://localhost:5000/exercises';
// adress get's changed later

export const fetchExercises = () => dispatch => {
  return axios.get(exercises)
    .then(res => {
      debugger
      dispatch({ type: FETCH_EXERCISES, exercises: res.data });
    })
    .catch(err => {
     debugger
    })
};