import * as type from "../actions/workoutsActions";

const initialState = {
  workouts: null,
  
};

//  default state
const workouts = (state = initialState, action) => {
    switch (action.type) {
      case type.FETCH_WORKOUTS:
        
        return {
          ...state,
          workouts: action.workouts,
        };
   
      default:
        return state;
    }
  };

export default workouts;
