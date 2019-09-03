import React from "react";
import styled from "styled-components";

const StyledAllExercises = styled.div`
  margin-top: 1.4rem;

.buttons-exercises {
display: flex;
}

  .muscle-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 25%;
  }

  .button {
    width: 10rem;

  }
    .number {
      width: 3rem;
    }
  
  .exercises {
    display:flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
  }

  .exercise {
  /* width: 10rem; */
  border: .1rem black solid;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    width: 30%;
    padding: 0;
  }
  /* height: 14rem; */

  &:hover {
    cursor: pointer;
  }
  }

  img {
    width: 30%;
    height: 5rem;
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
      <div className="buttons-exercises">
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
                <img src={exercise.picture_one} alt="exercise"/>
                <img src={exercise.picture_two} alt="exercise"/>                
                <div className="column">
                <p>
                  {exercise.exercise_name}
                </p>
<p>
Muscle Targeted: <span>{exercise.muscle}</span>
</p>

<p>
Equipment Type: <span>{exercise.equipment}</span>
</p>
                </div>
              </div>
            );
          })
        : null}
        </div>
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
