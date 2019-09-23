import * as type from "../actions/historyActions";
import * as types from "../actions/workoutsActions";


const initialState = {
  history: null
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_WORKOUTS_HISTORY:
          return {
        ...state,
        history: action.session
      };

      case types.END_WORKOUT:
          return {
        ...state,
        history: action.session
      };
    default:
      return state;
  }
};

export default history;
