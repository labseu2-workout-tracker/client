import React from 'react';
import Header from './views/Header/Header';
import WorkoutView from './views/WorkoutView/WorkoutView';
import ContactPage from './views/ContactPage/ContactPage';
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
        <Route path={'/Contact'} component={ContactPage} />    
    </div>
  );
}

export default App;
