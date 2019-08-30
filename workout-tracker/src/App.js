import React from 'react';
import MainNavBar from './components/MainNavBar/MainNavBar';
import ExercisesLibrary from './views/ExerciseLibrary/ExercisesLibrary';
import UserPage from './views/UserPage/UserPage';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNavBar />
        <Route path={'/Exercises'} component={ExercisesLibrary} />
        <Route path={'/Home'} component={UserPage} />
    </div>
  );
}

export default App;
