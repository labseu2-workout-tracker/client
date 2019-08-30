import { combineReducers } from 'redux';
import exercises from './exercises';
import workouts from './workouts';
import settings from './settings';

const appReducer = combineReducers({
  exercises: exercises,
  workouts: workouts,
  settings: settings,
});

const rootReducer = (state, action) => {
  //clears state on logout
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;