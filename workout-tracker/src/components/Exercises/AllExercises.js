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
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
  }

  .exercise {
    /* width: 10rem; */
    border: 0.1rem black solid;
    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
      width: 30%;
      padding: 0;
    }
    /* height: 14rem; */

    .column {
      display: flex;
      flex-direction: column;
    }

    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 10%;
    /* height: 5rem; */
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

  const equipment = [
    "Bands",
    "Foam Roll",
    "Barbell",
    "Kettlebells",
    "Body Only",
    "Machine",
    "Cable",
    "Medicine Ball,",
    "Dumbbell",
    "None",
    "E-Z Curl Bar",
    "Other",
    "Exercise Ball"
  ];

  return (
    <StyledAllExercises className="all-exercise">
      <input
        type="text"
        value={props.searchName}
        onChange={props.handleChange}
        placeholder="Search"
      />
      <button className="button" onClick={props.searchForName}>
        Search
      </button>
      <div className="buttons-exercises">
        <div className="muscle-buttons">
          <h1>Muscles</h1>
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
                  <div
                    onClick={() => props.showSingleExercise(exercise.id)}
                    className="exercise"
                    key={index}
                  >
                    <img src={exercise.picture_one} alt="exercise" />
                    <img src={exercise.picture_two} alt="exercise" />
                    <div className="column">
                      <p>{exercise.exercise_name}</p>
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

        <div className="equipment-buttons">
        <h1>Equipment</h1>
          
        </div>

      </div>
      <button onClick={props.loadMore} className="button">
        Load More
      </button>
    </StyledAllExercises>
  );
};

export default AllExercises;
