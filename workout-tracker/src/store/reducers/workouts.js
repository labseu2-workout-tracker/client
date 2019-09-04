import * as type from "../actions/workoutsActions";

const initialState = {
  workouts: null,
  workoutDetails: null,
  currentExercise: null,
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
    return {
        ...state,
        workoutDetails: action.workoutDetails
      };

      case type.CHOOSE_EXERCISE:
          return {
              ...state,
              currentExercise:
            };
    default:
      return state;
  }
};

export default workouts;
