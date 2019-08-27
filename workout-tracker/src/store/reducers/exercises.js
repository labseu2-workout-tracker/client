import * as type from "../actions";
import { bindActionCreators } from "../../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";

const initialState = {
  exercises: null,
  copyOfExercises: null,
  currentMuscleGroup: null,
  postsPerPage: 10,
  pageNumbers: null
};

const exercises = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_EXERCISES:
      const filterExercisesWithoutRating = action.exercises.filter(
        exercise => exercise.exercise_ratings !== "n/a"
      );

      return {
        ...state,
        exercises: filterExercisesWithoutRating,
        copyOfExercises: filterExercisesWithoutRating
      };

    case type.SHOW_MUSCLE_GROUP:
      let searchResultForMuscleGroup = state.copyOfExercises.filter(
        exercise => exercise.muscle === action.muscleGroup
      );

      const indexOfLastPost = 1 * state.postsPerPage;

      const indexOfFirstPost = indexOfLastPost - state.postsPerPage;

      const currentPosts = searchResultForMuscleGroup.slice(
        indexOfFirstPost,
        indexOfLastPost
      );

      const totalPosts = searchResultForMuscleGroup.length;

      for (let i = 1; i <= Math.ceil(totalPosts / state.postsPerPage); i++) {
        pageNumbers.push(i);
      }

      return {
        ...state,
        exercises: currentPosts,
        pageNumbers: pageNumbers,
        currentMuscleGroup: action.muscleGroup
      };

    default:
      return state;
  }
};

export default exercises;
