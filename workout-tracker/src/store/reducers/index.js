import { combineReducers } from 'redux';
import exercises from './exercises';

const appReducer = combineReducers({
  exercises: exercises,
});

const rootReducer = (state, action) => {
  //clears state on logout
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;