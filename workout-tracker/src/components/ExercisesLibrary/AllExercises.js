import React from "react";

const AllExercises = props => {
  const muscles = [
    "Neck",
    "Lats",
    "Middle Back",
    "Lower Back",
    "Shoulders",
    "Chest",
    "Forearms",
    "Hamstrings",
    "Calves",
    "Biceps",
    "Triceps",
    "Traps",
    "Abdominals",
    "Glutes",
    "Quadriceps",
    "Adductors",
    "Abductors"
  ];

  return (
    <div className="all-exercise">
      <div className="muscle-groups">
        {muscles.map((category, index) => (
          <button key={index} onClick={props.showMuscleGroup}>
            {category}
          </button>
        ))}
      </div>
      {props.exercises
        ? props.exercises.map((exercise, index) => {
            return (
              <div key={index}>
                <p>{exercise.exercise_name}</p>
              </div>
            );
          })
        : null}
        {props.pageNumbers ? (props.pageNumbers.map((num, index) => {
          return <button key={index}
            onClick={props.paginate}>
            {num}
          </button>
        })) : null}
    </div>
  );
};

export default AllExercises;
