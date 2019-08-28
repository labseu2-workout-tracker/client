import React from 'react';

const AllExercises = (props) => {
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