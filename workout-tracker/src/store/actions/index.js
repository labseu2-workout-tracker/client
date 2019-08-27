import axios from 'axios';

export const FETCH_EXERCISES = 'FETCH_EXERCISES';
export const SHOW_MUSCLE_GROUP = 'SHOW_MUSCLE_GROUP';

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

export const showMuscleGroup = (muscleGroup) => {
  return { type: SHOW_MUSCLE_GROUP, muscleGroup: muscleGroup };   
};