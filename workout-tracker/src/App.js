import React from 'react';
import Header from './views/Header/Header';
import ExercisesLibrary from './views/ExerciseLibrary/ExercisesLibrary';
import UserPage from './views/UserPage/UserPage';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Route path={'/Exercises'} component={ExercisesLibrary} />
        <Route path={'/Home'} component={UserPage} />
    </div>
  );
}

export default App;
