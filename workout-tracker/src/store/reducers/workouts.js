import * as type from "../actions/workoutsActions";

const initialState = {
  workouts: null,
  workoutId: null,
  allExercises: null,
  currentExercise: null,
  myWorkout: null
};

//  default state
const workouts = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_WORKOUTS:
      return {
        ...state,
        workouts: action.workouts
      };

    case type.FETCH_WORKOUT_DETAILS:
      const addId = action.workoutDetails.exercises.map((exercise, index) => {
        const copyOfData = Object.assign({}, exercise);
        copyOfData.id = index;

        return copyOfData;
      });

      return {
        ...state,
        allExercises: addId,
        workoutId: action.workout_id,
        myWorkout: action.workoutDetails
      };

    case type.CHOOSE_EXERCISE:
      const filterCurrentExercise = state.allExercises.filter(
        exercise => exercise.exercise_name === action.current_exercise
      );
      return {
        ...state,
        currentExercise: filterCurrentExercise
      };

    case type.FINISH_EXERCISE:
      const deleteExerciseFromCurrent = state.currentExercise.filter(
        exercise => exercise.id !== action.exercise_id
      );

      const deleteExerciseAll = state.allExercises.filter(
        exercise => exercise.id !== action.exercise_id
      );

      return {
        ...state,
        allExercises: state.allExercises.length > 1 ? deleteExerciseAll : null,
        currentExercise:
          state.currentExercise.length > 1 ? deleteExerciseFromCurrent : null
      };

    case type.ADD_WORKOUT:
      const filterWorkout = state.workouts.filter(
        exercise => exercise.exercise_name === action.current_exercise
      );
      return {
        ...state,
        currentExercise: filterCurrentExercise
      };

    default:
      return state;
  }
};

export default workouts;
