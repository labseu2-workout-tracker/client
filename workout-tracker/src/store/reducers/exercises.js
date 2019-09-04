import * as type from "../actions/exerciseActions";

const initialState = {
  exercises: null,
  copyOfExercises: null,
  singleExercise: null,
  currentMuscleGroup: null,
  exercisesPerPage: 5, 
};

const exercises = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_EXERCISES:
      const changeRatingOfExercise = action.exercises.map(exercise => {
        if (exercise.exercise_ratings === "n/a") {
          exercise.exercise_ratings = "5.0";
        }
        return exercise;
      });
      const filterOnlyGroupChest = changeRatingOfExercise.filter(
        exercise => exercise.muscle === "Chest"
      );
      const indexLastPost = state.exercisesPerPage;
      const indexFirstPost = indexLastPost - state.exercisesPerPage;
      const currentPosts = filterOnlyGroupChest.slice(
        indexFirstPost,
        indexLastPost
      );
      const totalExercises = filterOnlyGroupChest.length;
      let ButtonNumber = [];
      for (
        let i = 1;
        i <= Math.ceil(totalExercises / state.exercisesPerPage);
        i++
      ) {
        ButtonNumber.push(i);
      }
      const indexLastButton = state.buttonsPerPage;
      const indexFirstButton = indexLastButton - state.buttonsPerPage;
      const currentButtons = ButtonNumber.slice(
        indexFirstButton,
        indexLastButton
      );
      return {
        ...state,
        exercises: currentPosts,
        pageNumbers: ButtonNumber,
        currentButtons: currentButtons,
        copyOfExercises: changeRatingOfExercise,
        currentMuscleGroup: "Chest"
      };

    case type.SHOW_MUSCLE_GROUP:
      let searchResultForMuscleGroup = state.copyOfExercises.filter(
        exercise => exercise.muscle === action.muscleGroup
      );
      const indexOfLastPost = state.exercisesPerPage;
      const indexOfFirstPost = indexOfLastPost - state.exercisesPerPage;
      const currentExercises = searchResultForMuscleGroup.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
      const totalPosts = searchResultForMuscleGroup.length;
      let pageNumbers = [];
      for (let i = 1; i <= Math.ceil(totalPosts / state.exercisesPerPage); i++) {
        pageNumbers.push(i);
      }
      const indexOfLastButton = state.buttonsPerPage;
      const indexOfFirstButton = indexOfLastButton - state.buttonsPerPage;
      const theCurrentButtons = pageNumbers.slice(
        indexOfFirstButton,
        indexOfLastButton
      );

      return {
        ...state,
        exercises: currentExercises,
        pageNumbers: pageNumbers,
        currentButtons: theCurrentButtons,
        currentMuscleGroup: action.muscleGroup
      };

    case type.PAGINATE:
      if (state.currentMuscleGroup) {
        let searchForMuscleGroup = state.copyOfExercises.filter(
          exercise => exercise.muscle === state.currentMuscleGroup
        );
        const indexOfTheLastPost = action.num * state.exercisesPerPage;
        const indexOfTheFirstPost = indexOfTheLastPost - state.exercisesPerPage;
        const theCurrentExercises = searchForMuscleGroup.slice(
          indexOfTheFirstPost,
          indexOfTheLastPost
        );
        return { ...state, exercises: theCurrentExercises };
      } else {
        let searchForMuscleGroup = state.copyOfExercises;
        const indexOfTheLastPost = action.num * state.exercisesPerPage;
        const indexOfTheFirstPost = indexOfTheLastPost - state.exercisesPerPage;
        const theCurrentExercises = searchForMuscleGroup.slice(
          indexOfTheFirstPost,
          indexOfTheLastPost
        );
        return { ...state, exercises: theCurrentExercises };
      }

    case type.SHOW_SINGLE_EXERCISE:
      const filterExercise = state.exercises.filter(
        exercise => exercise.exercise_name === action.exerciseName
      );
      return { ...state, singleExercise: filterExercise };

    case type.CLOSE_SINGLE_EXERCISE:
      return { ...state, singleExercise: null };

    case type.GO_FORWARD:
      let startButton = state.startButton + 5;
      let endButton = state.endButton + 5;
      let currentNumbers = [];
      if (endButton > state.pageNumbers[state.pageNumbers.length - 1]) {
        endButton = state.pageNumbers[state.pageNumbers.length - 1];

        if (startButton >= endButton) {
          startButton -= 5;
        }
      }
      for (let i = startButton; i <= endButton; i++) {
        currentNumbers.push(i);
      }
      return {
        ...state,
        currentButtons: currentNumbers,
        startButton: startButton,
        endButton: endButton
      };

    case type.GO_BACK:
      let endNumber = state.endButton;
      let startNumber = state.startButton;
      if (endNumber === state.pageNumbers[state.pageNumbers.length - 1]
        && endNumber % 5 !== 0) {
        while (endNumber % 5 !== 0) {
          endNumber--;
        }
        startNumber = endNumber - 4;
      } else {
        startNumber = state.startButton - 5;

        endNumber = state.endButton - 5;
      }
      let currentNumberBtns = [];
      if (startNumber < 6) {
        startNumber = 1;
        endNumber = 5;
      }
      for (let i = startNumber; i <= endNumber; i++) {
        currentNumberBtns.push(i);
      }
      return {
        ...state,
        currentButtons: currentNumberBtns,
        startButton: startNumber,
        endButton: endNumber
      };

    default:
      return state;
  }
};

export default exercises;
