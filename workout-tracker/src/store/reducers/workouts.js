import * as type from "../actions/workoutsActions";

const initialState = {
  workouts: null,
  workoutDetails: null
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
    const yeah = action.workoutDetails.data;
    debugger  
    
    return {
        ...state,
        workoutDetails: [action.workoutDetails]
      };

    default:
      return state;
  }
};

export default workouts;
