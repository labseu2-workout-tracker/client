import * as type from "../actions/settingActions";

const initialState = {
  settings: null,  
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_SETTINGS:
      
      return {
        ...state,
        settings: [ action.settings ],
      };

      case type.UPDATE_SETTINGS:
      
        return {
          ...state,
          settings: action.updatedSettings,
        };

    default:
      return state;
  }
};

export default settings;