import React from 'react';

const SingleExercise = (props) => {
  return (
    <div>
  <p>{props.exercise.exercise_name}</p>
  <p>{props.exercise.description}</p>
  <p>{props.exercise.difficulty}</p>
  <img src={props.exercise.picture_one} alt="explanation of exercise one" />
  <img src={props.exercise.picture_two} alt="explanation of exercise two" />
  <p>{props.exercise.type}</p>
  <p>{props.exercise.muscle}</p>
  <p>{props.exercise.equipment}</p>
  <video width="320" height="240" controls>
<source src={props.exercise.video} type="video/mp4" />
Your browser does not support the video tag.
</video>
</div>
   );
}
 
export default SingleExercise;