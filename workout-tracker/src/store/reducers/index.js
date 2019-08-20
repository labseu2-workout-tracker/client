import { combineReducers } from 'redux';

const appReducer = combineReducers({
  //
});

const rootReducer = (state, action) => {
  //clears state on logout
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;