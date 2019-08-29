import { combineReducers } from 'redux';
import exercises from './exercises';
import workouts from './workouts';

const appReducer = combineReducers({
  exercises: exercises,
  workouts: workouts,
});

const rootReducer = (state, action) => {
  //clears state on logout
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;