import React from 'react';

const AllExercises = (props) => {
  return ( 
    <div className="all-exercise">
    {props.exercises ? (props.exercises.map((exercise, index) => {
      return <div key={index}>
        <p onClick={() =>
           props.getExercise(exercise.id)}>{exercise.exercise_name}</p>
        <button>Add</button>
      </div>
    })) : null}
  </div>
    );
}
 
export default AllExercises;