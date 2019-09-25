import * as type from "../actions/exerciseActions";

const initialState = {
  exercises: null,
  copyOfExercises: null,
  remainingExercises: null,
  singleExercise: null,
  arrayOfCurrentExercises: null,
  currentMuscleGroup: null,
  indexOfLastExercise: 8,
  indexFirstExercise: 0,
  loading: false,
  error: null,
  selectedExercises: []
};

const exercises = (state = initialState, action) => {
  switch (action.type) {
    case type.SELECT_MUSCLE:
      if (
        state.remainingExercises.length + state.selectedExercises.length ===
        state.copyOfExercises.length
      ) {
        return {
          ...state,
          remainingExercises: state.remainingExercises.filter(
            exercise => exercise.muscle === action.payload
          )
        };
      }
      const exerciseToAdd = state.copyOfExercises.filter(
        exercise => exercise.muscle === action.payload
      );
      return {
        ...state,
        remainingExercises: state.remainingExercises.concat(exerciseToAdd)
      };

    case type.REMOVE_MUSCLE:
      const selectedId = state.selectedExercises.map(exercise => exercise.id);
      const allNotSelectedExercises = state.copyOfExercises.filter(
        exercise => !selectedId.includes(exercise.id)
      );
      return {
        ...state,
        remainingExercises:
          state.remainingExercises.filter(
            exercise => exercise.muscle !== action.payload
          ).length === 0
            ? allNotSelectedExercises
            : state.remainingExercises.filter(
                exercise => exercise.muscle !== action.payload
              )
      };
    case type.SELECT_EQUIPMENT:
      if (
        state.remainingExercises.length + state.selectedExercises.length ===
        state.copyOfExercises.length
      ) {
        return {
          ...state,
          remainingExercises: state.remainingExercises.filter(
            exercise => exercise.equipment === action.payload
          )
        };
      }
      const exerciseToAdd2 = state.copyOfExercises.filter(
        exercise => exercise.equipment === action.payload
      );
      return {
        ...state,
        remainingExercises: state.remainingExercises.concat(exerciseToAdd2)
      };
    case type.REMOVE_EQUIPMENT:
      const selectedId2 = state.selectedExercises.map(exercise => exercise.id);
      const allNotSelectedExercises2 = state.copyOfExercises.filter(
        exercise => !selectedId2.includes(exercise.id)
      );
      return {
        ...state,
        remainingExercises:
          state.remainingExercises.filter(
            exercise => exercise.equipment !== action.payload
          ).length === 0
            ? allNotSelectedExercises2
            : state.remainingExercises.filter(
                exercise => exercise.equipment !== action.payload
              )
      };
    case type.ADD_TO_SELECTED_EXERCISES:
      return {
        ...state,
        selectedExercises: state.selectedExercises.concat(action.payload),
        remainingExercises: state.remainingExercises.filter(
          exercise => exercise.id !== action.payload.id
        )
      };
    case type.REMOVE_FROM_SELECTED_EXERCISES:
      return {
        ...state,
        selectedExercises: state.selectedExercises.filter(
          exercise => exercise.id !== action.payload.id
        ),
        remainingExercises: state.remainingExercises.concat(action.payload)
      };
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

      const currentExercises = filterOnlyGroupChest.slice(0, 8);

      return {
        ...state,
        exercises: currentExercises,
        copyOfExercises: changeRatingOfExercise,
        remainingExercises: changeRatingOfExercise,
        arrayOfCurrentExercises: filterOnlyGroupChest,
        currentMuscleGroup: "Chest",
        indexOfLastExercise: 8,
        loading: false,
        selectedExercises: [],
        error: null
      };

    case type.FETCH_EXERCISES_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case type.FETCH_EXERCISES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case type.SHOW_MUSCLE_GROUP:
      let searchResultForMuscleGroup = state.copyOfExercises.filter(
        exercise => exercise.muscle === action.muscleGroup
      );
      const indexOfLastExercise = 8;

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
      let indexOfTheLastExercise = state.indexOfLastExercise + 8;

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
      const filterExercise = state.remainingExercises.filter(
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

      return {
        ...state,
        exercises: filterSearchedExercise,
        remainingExercises: filterSearchedExercise
      };

    case type.SHOW_EQUIPMENT:
      let searchForEquipment = state.copyOfExercises.filter(
        exercise =>
          exercise.equipment === action.equipment &&
          exercise.muscle === state.currentMuscleGroup
      );
      const theIndexLastExercise = 8;
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
