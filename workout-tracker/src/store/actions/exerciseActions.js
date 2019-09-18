import axios from "axios";

export const FETCH_EXERCISES = "FETCH_EXERCISES";
export const SHOW_MUSCLE_GROUP = "SHOW_MUSCLE_GROUP";
export const SHOW_SINGLE_EXERCISE = "SHOW_SINGLE_EXERCISE";
export const CLOSE_SINGLE_EXERCISE = "CLOSE_SINGLE_EXERCISE";
export const LOAD_MORE = "LOAD_MORE";
export const SEARCH_EXERCISE = "SEARCH_EXERCISE";
export const SHOW_EQUIPMENT = "SHOW_EQUIPMENT";
export const FETCH_EXERCISES_ERROR = "FETCH_EXERCISES_ERROR";
export const FETCH_EXERCISES_LOADING = "FETCH_EXERCISES_LOADING";
export const ADD_TO_SELECTED_EXERCISES = "ADD_TO_SELECTED_EXERCISES";
export const REMOVE_FROM_SELECTED_EXERCISES = "REMOVE_FROM_SELECTED_EXERCISES";
export const SELECT_MUSCLE = "SELECT_MUSCLE";
export const REMOVE_MUSCLE = "REMOVE_MUSCLE";
export const SELECT_EQUIPMENT = "SELECT_EQUIPMENT";
export const REMOVE_EQUIPMENT = "REMOVE_EQUIPMENT";

const exercises = `${process.env.REACT_APP_BASE_URL}/exercises`;
// adress get's changed later

export const filterMuscles = (muscle, status) => {
  if (status) {
    return {
      type: SELECT_MUSCLE,
      payload: muscle
    };
  }
  return {
    type: REMOVE_MUSCLE,
    payload: muscle
  };
};

export const filterEquipment = (equipment, status) => {
  if (status) {
    return {
      type: SELECT_EQUIPMENT,
      payload: equipment
    };
  }
  return {
    type: REMOVE_EQUIPMENT,
      payload: equipment
  };
};

export const addToSelectedExercises = exercise => {
  return { type: ADD_TO_SELECTED_EXERCISES, payload: exercise };
};

export const removeFromSelectedExercises = exercise => {
  return { type: REMOVE_FROM_SELECTED_EXERCISES, payload: exercise };
};

export const fetchExercises = () => dispatch => {
  // type LOADING needs to be added (also for the redux state)
  dispatch({
    type: FETCH_EXERCISES_LOADING
  });
  return axios
    .get(exercises)
    .then(res => {
      dispatch({ type: FETCH_EXERCISES, exercises: res.data });
    })
    .catch(err => {
      // type ERROR needs to be added (also for the redux state)
      dispatch({
        type: FETCH_EXERCISES_ERROR,
        payload: "Error fetching exercises"
      });
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

export const showEquipment = equipment => {
  return { type: SHOW_EQUIPMENT, equipment: equipment };
};
