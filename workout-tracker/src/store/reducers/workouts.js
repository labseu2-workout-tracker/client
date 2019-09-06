import * as type from "../actions/workoutsActions";

const initialState = {
  workouts: null,
  workoutId: null,
  allExercises: null,
  currentExercise: null,
  myWorkouts: null,
  addedWorkout: false,
};

const removeDuplicates = (arr,comp) => {

  const unique =  arr.map(workout=> workout[comp]). 
  
  map((workout,index,array) =>array.indexOf(workout) === index && index) 
  
  .filter((workout)=> arr[workout]).map(workout=> arr[workout]);
  
  return unique
  };

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

      const addFirstExercise = addId.filter(workout => workout.exercise_name === addId[0].exercise_name);

      return {
        ...state,
        allExercises: addId,
        workoutId: action.workout_id,
        myWorkout: action.workoutDetails,
        currentExercise: addFirstExercise,
      };

    case type.CHOOSE_EXERCISE:
      const filterCurrentExercise = state.allExercises.filter(
        exercise => exercise.exercise_name === action.current_exercise
      );
      debugger
      return {
        ...state,
        currentExercise: filterCurrentExercise
      };

    case type.FINISH_EXERCISE:
      const deleteExerciseFromCurrent = state.currentExercise.filter(
        exercise => exercise.id !== action.exercise_id
      );
debugger
      const deleteExerciseAll = state.allExercises.filter(
        exercise => exercise.id !== action.exercise_id
      );
      debugger
      return {
        ...state,
        allExercises: state.allExercises.length > 1 ? deleteExerciseAll : null,
        currentExercise:
          state.currentExercise.length > 1 ? deleteExerciseFromCurrent : (deleteExerciseAll[0] ? [deleteExerciseAll[0]] : null)
      };

    case type.ADD_WORKOUT:
      let mergeWorkouts;

      const filterWorkout = state.workouts.filter(
        workout => workout.id === action.workout_id
      );

      if (state.myWorkouts) {
        mergeWorkouts = state.myWorkouts
          .concat(filterWorkout)
      }

      return {
        ...state,
        myWorkouts: state.myWorkouts ? removeDuplicates(mergeWorkouts, 'id') : filterWorkout,
        addedWorkout: true
      };

      case type.DELETE_WORKOUT:

      const filterMyWorkouts = state.myWorkouts.filter(
        workout => workout.id !== action.workout_id
      );

      return {
        ...state,
        myWorkouts: state.myWorkouts[1] ? filterMyWorkouts : null,
      };

      case type.CLOSE_WINDOW:

      return {
        ...state,
       addedWorkout: false,
      };

    default:
      return state;
  }
};

export default workouts;
