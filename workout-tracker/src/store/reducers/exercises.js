import * as type from "../actions/exerciseActions";

const initialState = {
  exercises: null,
  copyOfExercises: null,
  singleExercise: null,
  arrayOfCurrentExercises: null,
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
        arrayOfCurrentExercises: filterOnlyGroupChest,
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
        arrayOfCurrentExercises: searchResultForMuscleGroup,
        indexOfLastExercise: indexOfLastExercise,
        currentMuscleGroup: action.muscleGroup
      };

    case type.LOAD_MORE:
      let indexOfTheLastExercise = state.indexOfLastExercise + 5;

      if (indexOfTheLastExercise > state.arrayOfCurrentExercises.length) {
        indexOfTheLastExercise = state.arrayOfCurrentExercises.length;
      }

      const actualExercises = state.arrayOfCurrentExercises.slice(
        state.indexFirstExercise,
        indexOfTheLastExercise
      );

      return {
        ...state,
        exercises: actualExercises,
        indexOfLastExercise: indexOfTheLastExercise
      };

    case type.SHOW_SINGLE_EXERCISE:
      const filterExercise = state.arrayOfCurrentExercises.filter(
        exercise => exercise.id === action.exercise_id
      );
      return { ...state, singleExercise: filterExercise };

    case type.CLOSE_SINGLE_EXERCISE:
      return { ...state, singleExercise: null };

    case type.SEARCH_EXERCISE:
      const filterSearchedExercise = state.copyOfExercises.filter(exercise =>
        exercise.exercise_name
          .toLowerCase()
          .startsWith(action.exercise.toLowerCase())
      );

      return { ...state, exercises: filterSearchedExercise };

    case type.SHOW_EQUIPMENT:
      let searchForEquipment = state.copyOfExercises.filter(
        exercise => exercise.equipment === action.equipment
        &&
        exercise.muscle === state.currentMuscleGroup
      );
      const theIndexLastExercise = 5;
      const theActualExercises = searchForEquipment.slice(
        state.indexFirstExercise,
        theIndexLastExercise
      );
      return {
        ...state,
        exercises: theActualExercises,
        arrayOfCurrentExercises: searchForEquipment,
        indexOfLastExercise: theIndexLastExercise
      };

    default:
      return state;
  }
};

export default exercises;
