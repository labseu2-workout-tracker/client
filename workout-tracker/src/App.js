import React, { Component, Fragment } from 'react';
import Tabs from './views/Tabs/Tabs';
import ExercisesLibrary from './views/ExerciseLibrary/ExercisesLibrary';
import UserPage from './views/UserPage/UserPage';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import SignupPage from './pages/Auth/Signup';
import './App.css';

class App extends Component {
  state ={ 
    isAuth: false,
    token: null,
    userId: null,
    authLoading: false,
    error: null
  }
  render() {
    return (
      <div className="App">
        <Tabs />
          <Route path={'/My Workouts'} component={ExercisesLibrary} />
          <Route path={'/tracker'} component={UserPage} />
      </div>
    );

  }
}

export default App;
