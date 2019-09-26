import * as type from "../actions/chartActions";

const initialState = {
  weeklyChart: null,
};

const charts = (state = initialState, action) => {
  switch (action.type) {
    case type.CALCULATE_WEEKLY_CHART:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default charts;
