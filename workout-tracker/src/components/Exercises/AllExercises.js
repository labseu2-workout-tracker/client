import React from "react";
import styled from "styled-components";

const StyledAllExercises = styled.div`
  margin-top: 1.4rem;

  .muscle-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .button {
    width: 10rem;

  }
    .number {
      width: 3rem;
    }
  
  .exercises {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .exercise {
  width: 10rem;
  border: .1rem black solid;
  height: 110px;

  &:hover {
    cursor: pointer;
  }
  }


`;

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
    <StyledAllExercises className="all-exercise">
      <div className="muscle-buttons">
        {muscles.map((muscleGroup, index) => (
          <button
            className="button"
            key={index}
            onClick={props.showMuscleGroup}
          >
            {muscleGroup}
          </button>
        ))}
      </div>
      <div className="exercises">
      {props.exercises
        ? props.exercises.map((exercise, index) => {
            return (
              <div className="exercise"
              onClick={props.showSingleExercise}
              key={index}>
                <p>
                  {exercise.exercise_name}
                </p>
                <img src={exercise.picture_one} alt="exercise"/>
              </div>
            );
          })
        : null}
        </div>
      {props.pageNumbers
        ? props.pageNumbers.map((num, index) => {
            return (
              <button className="button number" key={index} onClick={props.paginate}>
                {num}
              </button>
            );
          })
        : null}
    </StyledAllExercises>
  );
};

export default AllExercises;
