import React from 'react';
import Tabs from './components/Tabs/Tabs';
import ExercisesLibrary from './components/Exercises/ExercisesLibrary';
import UserPage from './components/MainUserComponents/Tracker/UserPage';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Tabs />
        <Route path={'/workout'} component={ExercisesLibrary} />
        <Route path={'/tracker'} component={UserPage} />
    </div>
  );
}

export default App;
