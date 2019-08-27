const initialState = {
  exercises: null,
  copyOfExercises: null
};

const exercises = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EXERCISES:
      const filterExercisesWithoutRating = action.payload.filter(
        exercise => exercise.exercise_ratings !== "n/a"
      );

      return {
        ...state,
        exercises: filterExercisesWithoutRating,
        copyOfExercises: filterExercisesWithoutRating
      };

    default:
      return state;
  }
};

export default exercises;
