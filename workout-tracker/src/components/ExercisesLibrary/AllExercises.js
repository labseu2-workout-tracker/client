import React from 'react';

const AllExercises = (props) => {
  const muscles = [ 'Neck', 
    'Lats', "Middle Back", 'Lower Back', 'Shoulders',
     'Chest', 'Forearms', 'Hamstrings',
    'Calves', 'Biceps', 'Triceps', 'Traps', 'Abdominals',
    'Glutes', 'Quadriceps', "Adductors", "Abductors"];

  return ( 
    <div className="all-exercise">
    {props.exercises ? (props.exercises.map((exercise, index) => {
      return <div key={index}>
        <p>{exercise.exercise_name}</p>
      </div>
    })) : null}
  </div>
    );
}
 
export default AllExercises;