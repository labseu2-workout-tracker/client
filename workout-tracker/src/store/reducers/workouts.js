import * as type from "../actions/workoutsActions";

const initialState = {
  workouts: null,
  workoutId: null,
  allExercises: null,
  currentExercise: null,
  myWorkouts: null,
  newWorkout: null,
  savedWorkout: null,
  error: null,
  loading: false,
};

const workouts = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_WORKOUT_DETAILS:
      return {
        ...state,
        newWorkout: { ...action.payload, exercises: [] }
      };

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

      const addFirstExercise = addId.filter(
        workout => workout.exercise_name === addId[0].exercise_name
      );

      return {
        ...state,
        allExercises: addId,
        workoutId: action.workout_id,
        myWorkout: action.workoutDetails,
        currentExercise: addFirstExercise
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
          state.currentExercise.length > 1
            ? deleteExerciseFromCurrent
            : deleteExerciseAll[0]
              ? deleteExerciseAll.filter(
                workout =>
                  workout.exercise_name === deleteExerciseAll[0].exercise_name
              )
              : null
      };

    case type.ADD_WORKOUT_SUCCESS:
      return {
        ...state,
        savedWorkout: action.payload
      }

    case type.ADD_WORKOUT_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case type.GET_SAVED_WORKOUT:
      return {
        ...state,
        loading: true,
        error: null,
        myWorkouts: null,
      }

    case type.GET_SAVED_WORKOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        myWorkouts: action.payload,
      }

    case type.GET_SAVED_WORKOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case type.DELETE_WORKOUT:

      return {
        ...state,
        myWorkouts: action.payload
      };

    default:
      return state;
  }
};

export default workouts;
