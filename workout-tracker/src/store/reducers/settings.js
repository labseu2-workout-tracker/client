import * as type from "../actions/settingActions";

const initialState = {
  settings: null,  
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_SETTINGS:
      
      return {
        ...state,
        workouts: action.settings,
      };

    default:
      return state;
  }
};

export default settings;