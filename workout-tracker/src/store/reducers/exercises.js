import * as type from "../actions/exerciseActions";

const initialState = {
  exercises: null,
  copyOfExercises: null,
  singleExercise: null,
  currentMuscleGroup: null,
  exercisesPerPage: 5, 
};

const exercises = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_EXERCISES:
      const changeRatingOfExercise = action.exercises.map(exercise => {
        if (exercise.exercise_ratings === "n/a") {
          exercise.exercise_ratings = "5.0";
        }
        return exercise;
      });
      const filterOnlyGroupChest = changeRatingOfExercise.filter(
        exercise => exercise.muscle === "Chest"
      );
      const indexLastPost = state.exercisesPerPage;
      const indexFirstPost = indexLastPost - state.exercisesPerPage;
      const currentPosts = filterOnlyGroupChest.slice(
        indexFirstPost,
        indexLastPost
      );
     
      return {
        ...state,
        exercises: currentPosts,
        copyOfExercises: changeRatingOfExercise,
        currentMuscleGroup: "Chest"
      };

    case type.SHOW_MUSCLE_GROUP:
      let searchResultForMuscleGroup = state.copyOfExercises.filter(
        exercise => exercise.muscle === action.muscleGroup
      );
      const indexOfLastPost = state.exercisesPerPage;
     
      const currentExercises = searchResultForMuscleGroup.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
     
      return {
        ...state,
        exercises: currentExercises,
        currentMuscleGroup: action.muscleGroup
      };

    case type.SHOW_SINGLE_EXERCISE:
      const filterExercise = state.exercises.filter(
        exercise => exercise.exercise_name === action.exerciseName
      );
      return { ...state, singleExercise: filterExercise };

    case type.CLOSE_SINGLE_EXERCISE:
      return { ...state, singleExercise: null };

    case type.GO_FORWARD:
      let startButton = state.startButton + 5;
      let endButton = state.endButton + 5;
      let currentNumbers = [];
      if (endButton > state.pageNumbers[state.pageNumbers.length - 1]) {
        endButton = state.pageNumbers[state.pageNumbers.length - 1];

        if (startButton >= endButton) {
          startButton -= 5;
        }
      }
      for (let i = startButton; i <= endButton; i++) {
        currentNumbers.push(i);
      }
      return {
        ...state,
        currentButtons: currentNumbers,
        startButton: startButton,
        endButton: endButton
      };

    default:
      return state;
  }
};

export default exercises;
