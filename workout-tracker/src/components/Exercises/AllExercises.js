import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

// import './AllExercises.css';

// import ExerciseRating from './ExerciseRating';

// const StyledAllExercises = styled.div`
//   margin-top: 1.4rem;

//   .buttons-exercises {
//     display: flex;
//   }

//   .muscle-buttons, .equipment-buttons {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     width: 25%;
//   }

//   .button {
//     width: 10rem;
//   }
//   .number {
//     width: 3rem;
//   }

//   .exercises {
//     display: flex;
//     /* flex-wrap: wrap; */
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 75%;
//   }

//   .exercise {
//     /* width: 10rem; */
//     border: 0.1rem black solid;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;

//     p {
//       width: 30%;
//       padding: 0;
//     }
//     /* height: 14rem; */

//     .column {
//       display: flex;
//       flex-direction: column;
//     }

//     &:hover {
//       cursor: pointer;
//     }
//   }

//   img {
//     width: 10%;
//     /* height: 5rem; */
//   }
// `;

const AllExercises = props => {
  const muscles = [
    'Neck',
    'Lats',
    'Middle Back',
    'Lower Back',
    'Shoulders',
    'Chest',
    'Forearms',
    'Hamstrings',
    'Calves',
    'Biceps',
    'Triceps',
    'Traps',
    'Abdominals',
    'Glutes',
    'Quadriceps',
    'Adductors',
    'Abductors'
  ];

  const equipment = [
    'Bands',
    'Foam Roll',
    'Barbell',
    'Kettlebells',
    'Body Only',
    'Machine',
    'Cable',
    'Medicine Ball,',
    'Dumbbell',
    'None',
    'E-Z Curl Bar',
    'Other',
    'Exercise Ball'
  ];

  return (
    <>
    <div className='all-exercise'>

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

      <div className='container-1'>
        <div className='box-1'>
          <h1>Muscles</h1>
          {muscles.map((muscleGroup, index) => (
            <button
              className='btn'
              key={index}
              onClick={props.showMuscleGroup}
            >
              {muscleGroup}
            </button>
          ))}
        </div>
        <div className='box-2'>
          {props.exercises
            ? props.exercises.map((exercise, index) => {
                return (
                  <div
                    onClick={() => props.showSingleExercise(exercise.id)}
                    className='exercise'
                    key={index}
                  >
                    <img className='img' src={exercise.picture_one} alt='exercise' />
                
                    <div className='column'>
                      <p>{exercise.exercise_name}</p>
                      <p>
                        Muscle Targeted: <span>{exercise.muscle}</span>
                      </p>
                      <p>
                        Equipment Type: <span>{exercise.equipment}</span>
                      </p>
                    </div>
                    <img className='img' src={exercise.picture_two} alt='exercise' />
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
        <div className='box-3'>
          <h1 >Equipment</h1>
          {equipment.map((equipment, index) => (
            <button
              className='btn'
              key={index}
              onClick={props.showEquipment}
            >
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
