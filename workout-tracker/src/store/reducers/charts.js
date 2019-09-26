import * as type from "../actions/chartActions";

const initialState = {
  weeklyChart: null,
};

const charts = (state = initialState, action) => {
  switch (action.type) {
    case type.SELECT_MUSCLE:
      return {
        ...state,
        remainingExercises: state.remainingExercises.filter(
          exercise => exercise.muscle === action.payload
        )
      };

    default:
      return state;
  }
};

export default charts;
