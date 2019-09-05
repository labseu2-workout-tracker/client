import React from "react";
// import ExerciseRating from "./ExerciseRating";

const SingleExercise = props => {
  return (
    <>
<div className="exer-1">
  <div className="close-exercise" onClick={props.closeExercise}>
    <i className="fa fa-window-close x" />
  </div>
  <div className="">
    <video className="exer-img" controls>
      <source src={props.exercise.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h1>{props.exercise.exercise_name}</h1>

   <div className="description">
      <i className="fas fa-running"></i> {props.exercise.description}
    </div>
   <div className="para">
    <p> Level: {props.exercise.difficulty}</p>
    <p> Type: {props.exercise.type}</p>
    <p>Target: {props.exercise.muscle}</p>
    <p> Equipment: {props.exercise.equipment}</p>
   </div>
   <div className="last-img">
      <img  src={props.exercise.picture_one} alt="explanation of exercise one" />
      <img  src={props.exercise.picture_two} alt="explanation of exercise two" />
 
   </div>
  </div>
</div>
    </>
  );
};

export default SingleExercise;
