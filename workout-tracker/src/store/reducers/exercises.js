import * as type from "../actions/exerciseActions";

const initialState = {
  exercises: null,
  copyOfExercises: null,
  singleExercise: null,
  currentMuscleGroup: null,
  indexOfLastExercise: 5,
  indexFirstExercise: 0
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

      const indexLastExercise = state.indexOfLastExercise;

      const currentExercises = filterOnlyGroupChest.slice(
        state.indexFirstExercise,
        indexLastExercise
      );

      return {
        ...state,
        exercises: currentExercises,
        copyOfExercises: changeRatingOfExercise,
        currentMuscleGroup: "Chest"
      };

    case type.SHOW_MUSCLE_GROUP:
      let searchResultForMuscleGroup = state.copyOfExercises.filter(
        exercise => exercise.muscle === action.muscleGroup
      );
      const indexOfLastExercise = 5;

      const theCurrentExercises = searchResultForMuscleGroup.slice(
        state.indexFirstExercise,
        indexOfLastExercise
      );

      return {
        ...state,
        exercises: theCurrentExercises,
        currentMuscleGroup: action.muscleGroup,
        indexOfLastExercise: indexOfLastExercise
      };

    case type.LOAD_MORE:
      let searchMuscleGroup = state.copyOfExercises.filter(
        exercise => exercise.muscle === state.currentMuscleGroup
      );
      let indexOfTheLastExercise =
        state.indexOfLastExercise + 5;

      if (indexOfTheLastExercise > searchMuscleGroup.length) {
        indexOfTheLastExercise = searchMuscleGroup.length;
      }

      const actualExercises = searchMuscleGroup.slice(
        state.indexFirstExercise,
        indexOfTheLastExercise
      );

      return {
        ...state,
        exercises: actualExercises,
        indexOfLastExercise: indexOfTheLastExercise
      };

    case type.SHOW_SINGLE_EXERCISE:
      const filterExercise = state.exercises.filter(
        exercise => exercise.id === action.exercise_id
      );
      return { ...state, singleExercise: filterExercise };

    case type.CLOSE_SINGLE_EXERCISE:
      return { ...state, singleExercise: null };

      case types.SEARCH_EXERCISE:
          const filterSearchedExercise = state.copyOfExercises.filter(exercise =>
            exercise.exercise_name.toLowerCase().startsWith(action.exercise.toLowerCase()));
         
        

    default:
      return state;
  }
};

export default exercises;
