import React, { Component } from "react";
import FilterTag from "./FilterTag";

export default class FilterExercises extends Component {
  render() {
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

    const equipments = [
      "Bands",
      "Foam Roll",
      "Barbell",
      "Kettlebells",
      "Body Only",
      "Machine",
      "Cable",
      "Medicine Ball",
      "Dumbbell",
      "E-Z Curl Bar",
      "Other",
      "Exercise Ball"
    ];
    return (
      <div style={filterStyles}>
        <div>
          <h4>Filter By Muscles:</h4>
          {muscles.map(muscle => (
            <FilterTag key={muscle} filter={"muscle"}>
              {muscle}
            </FilterTag>
          ))}
        </div>
        <div>
          <h4>Filter By Equipment:</h4>
          {equipments.map(equipment => (
            <FilterTag key={equipment} filter={"equipment"}>
              {equipment}
            </FilterTag>
          ))}
        </div>
      </div>
    );
  }
}

const filterStyles = {
  textAlign: "center"
};
