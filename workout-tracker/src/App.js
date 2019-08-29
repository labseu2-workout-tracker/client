import React from 'react';
import './App.css';
import E from './components/ExercisesLibrary/ExercisesLibrary';
import UserPage from './components/UserPage/UserPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <E/>
        <UserPage />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
