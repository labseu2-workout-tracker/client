import * as type from "../actions/exerciseActions";

const initialState = {
  exercises: null,
  copyOfExercises: null,
  singleExercise: null,
  currentMuscleGroup: null,
  postsPerPage: 5,
  pageNumbers: null,
  currentButtons: null,
  buttonsPerPage: 5,
  startButton: 1,
  endButton: 5
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

      const indexLastPost = state.postsPerPage;

      const indexFirstPost = indexLastPost - state.postsPerPage;

      const currentPosts = filterOnlyGroupChest.slice(
        indexFirstPost,
        indexLastPost
      );

      const totalExercises = filterOnlyGroupChest.length;

      let ButtonNumber = [];

      for (
        let i = 1;
        i <= Math.ceil(totalExercises / state.postsPerPage);
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

      const indexOfLastPost = state.postsPerPage;

      const indexOfFirstPost = indexOfLastPost - state.postsPerPage;

      const currentExercises = searchResultForMuscleGroup.slice(
        indexOfFirstPost,
        indexOfLastPost
      );

      const totalPosts = searchResultForMuscleGroup.length;

      let pageNumbers = [];

      for (let i = 1; i <= Math.ceil(totalPosts / state.postsPerPage); i++) {
        pageNumbers.push(i);
      }

      return {
        ...state,
        exercises: currentExercises,
        pageNumbers: pageNumbers,
        currentMuscleGroup: action.muscleGroup
      };

    case type.PAGINATE:
      if (state.currentMuscleGroup) {
        let searchForMuscleGroup = state.copyOfExercises.filter(
          exercise => exercise.muscle === state.currentMuscleGroup
        );

        const indexOfTheLastPost = action.num * state.postsPerPage;

        const indexOfTheFirstPost = indexOfTheLastPost - state.postsPerPage;

        const theCurrentExercises = searchForMuscleGroup.slice(
          indexOfTheFirstPost,
          indexOfTheLastPost
        );

        return { ...state, exercises: theCurrentExercises };
      } else {
        let searchForMuscleGroup = state.copyOfExercises;

        const indexOfTheLastPost = action.num * state.postsPerPage;

        const indexOfTheFirstPost = indexOfTheLastPost - state.postsPerPage;

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
      let startButton = state.startButton;

      let endButton = state.endButton;

      // let state.pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

      let currentNumbers = [];

      startButton += 5;

      endButton += 5;

      if (endButton > state.pageNumbers[state.pageNumbers.length - 1]) {
        endButton = state.pageNumbers[state.pageNumbers.length - 1];

        if(startButton >= endButton) {
          startButton -= 5;
        }
      }

      for (let i = startButton; i <= endButton; i++) {
        currentNumbers.push(i);
      }

      return { ...state, currentButtons: actualButtons };

    case type.GO_BACK:
      return { ...state, currentButtons: null };

    default:
      return state;
  }
};

export default exercises;
