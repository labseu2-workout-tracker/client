import axios from "axios";

export const FETCH_EXERCISES = "FETCH_EXERCISES";
export const SHOW_MUSCLE_GROUP = "SHOW_MUSCLE_GROUP";
export const SHOW_SINGLE_EXERCISE = "SHOW_SINGLE_EXERCISE";
export const CLOSE_SINGLE_EXERCISE = "CLOSE_SINGLE_EXERCISE";
export const LOAD_MORE = "LOAD_MORE";
export const SEARCH_EXERCISE = "SEARCH_EXERCISE";
export const SHOW_EQUIPMENT = "SHOW_EQUIPMENT";

const exercises = `${process.env.REACT_APP_BASE_URL}/exercises`;
// adress get's changed later

export const fetchExercises = () => dispatch => {
  // type LOADING needs to be added (also for the redux state)
  return axios
    .get(exercises)
    .then(res => {
      dispatch({ type: FETCH_EXERCISES, exercises: res.data });
    })
    .catch(err => {
      // type ERROR needs to be added (also for the redux state)
    });
};

export const showMuscleGroup = muscleGroup => {
  return { type: SHOW_MUSCLE_GROUP, muscleGroup: muscleGroup };
};

export const showSingleExercise = exercise_id => {
  return { type: SHOW_SINGLE_EXERCISE, exercise_id: exercise_id };
};

export const closeSingleExercise = () => {
  return { type: CLOSE_SINGLE_EXERCISE };
};

export const loadMore = () => {
  return { type: LOAD_MORE };
};

export const searchExercise = exercise => {
  return { type: SEARCH_EXERCISE, exercise: exercise };
};
