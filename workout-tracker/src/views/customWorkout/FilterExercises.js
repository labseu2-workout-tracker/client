import React, { Component } from "react";
import FilterTag from "./FilterTag";
import { Divider } from "antd";

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
      <div style={sideFilter}>
        <div>
          <h4>Filter By Muscles:</h4>
          {muscles.map(muscle => (
            <FilterTag key={muscle} filter={'muscle'}>
              {muscle}
            </FilterTag>
          ))}
        </div>
        <Divider />
        <div>
          <h4>Filter By Equipment:</h4>
          {equipments.map(equipment => (
            <FilterTag key={equipment} filter={'equipment'} >
              {equipment}
            </FilterTag>
          ))}
        </div>
      </div>
    );
  }
}

const sideFilter = {
  margin: "0 auto",
  display: "flex",
  padding: "2rem",
  position: "fixed",
  width: "20%",
  borderRightColor: "red",
  borderRight: ".5px solid #efefef",
  height: "100%",
  flexDirection: "column",
  alignItems: "center"
};
