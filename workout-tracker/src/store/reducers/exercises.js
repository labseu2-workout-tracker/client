import * as type from "../actions";

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

      const indexOfLastPost = state.postsPerPage;

      const indexOfFirstPost = indexOfLastPost - state.postsPerPage;

      const currentExercises = searchResultForMuscleGroup.slice(
        indexOfFirstPost,
        indexOfLastPost
      );

      const totalPosts = searchResultForMuscleGroup.length;

      let pageNumbers = [];

      for (let i = 1; i <= Math.ceil(totalPosts / state.postsPerPage); i++) {
        pageNumbers.push(i);
      }

      return {
        ...state,
        exercises: currentExercises,
        pageNumbers: pageNumbers,
        currentMuscleGroup: action.muscleGroup
      };

    case type.PAGINATE:
      let searchForMuscleGroup = state.copyOfExercises.filter(
        exercise => exercise.muscle === state.currentMuscleGroup
      );

      const indexOfTheLastPost = action.num * state.postsPerPage;

      const indexOfTheFirstPost = indexOfTheLastPost - state.postsPerPage;

      const theCurrentExercises = searchForMuscleGroup.slice(
        indexOfTheFirstPost,
        indexOfTheLastPost
      );

      return { ...state, exercises: theCurrentExercises };

    default:
      return state;
  }
};

export default exercises;
