import React from "react";
// import './AllExercises.css';
import { Input, Button } from "antd";

const { Search } = Input;

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
    <>
      <div className="all-exercise">
        {/* <div className='search'>
     <input 
     className='search-txt'
        type='text'
        value={props.searchName}
        onChange={props.handleChange}
        placeholder='Search' >
        </input>
        <button href='http' className=' search-btn'>
          <i class='fas fa-search' onClick={props.searchForName}></i>
        </button>

     </div> */}

        <div>
          <Search
            placeholder="input search text"
            enterButton="Search"
            style={{ width: "40%", marginTop: "1rem" }}
            onSearch={props.searchForName}
          />
        </div>

        <div className="container-1">
          <div className="box-1">
            <h1>Muscles</h1>
            {muscles.map((muscleGroup, index) => (
              // <button
              //   className="btn"
              //   key={index}
              //   onClick={props.showMuscleGroup}
              // >
              //   {muscleGroup}
              // </button>


<Button type="primary"  key={index}
                onClick={props.showMuscleGroup}>{muscleGroup}</Button>
            ))}
          </div>
          <div className="box-2">
            {props.exercises
              ? props.exercises.map((exercise, index) => {
                  return (
                    <div
                      onClick={() => props.showSingleExercise(exercise.id)}
                      className="exercise"
                      key={index}
                    >
                      <img
                        className="img"
                        src={exercise.picture_one}
                        alt="exercise"
                      />

                      <div className="column">
                        <p>{exercise.exercise_name}</p>
                        <p>
                          Muscle Targeted: <span>{exercise.muscle}</span>
                        </p>
                        <p>
                          Equipment Type: <span>{exercise.equipment}</span>
                        </p>
                      </div>
                      <img
                        className="img"
                        src={exercise.picture_two}
                        alt="exercise"
                      />
                      {/* <ExerciseRating
                        className='img'
                        exerciseRating={Number(
                         exercise.exercise_ratings.split('.').join('')
                        )}
                      /> */}
                    </div>
                  );
                })
              : null}
          </div>
          <div className="box-3">
            <h1>Equipment</h1>
            {equipment.map((equipment, index) => (
              <button className="btn" key={index} onClick={props.showEquipment}>
                {equipment}
              </button>
            ))}
          </div>
        </div>
        {/* <div className='butto'>
        <button onClick={props.loadMore} className='new-button'>
          Load More
        </button>
    </div> */}
      </div>
    </>
  );
};

export default AllExercises;
