import * as type from "../actions/historyActions";


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
    default:
      return state;
  }
};

export default history;
