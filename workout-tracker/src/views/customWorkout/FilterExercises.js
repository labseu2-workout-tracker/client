import React, { Component } from "react";
import FilterTag from "./FilterTag";
import {  Input, Icon, AutoComplete } from "antd";

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
        <AutoComplete
          dataSource={[...new Set(this.props.exercises)].map(e => (
            <AutoComplete.Option key={e.exercise_name} text={e.exercise_name}>
              {e.exercise_name}
            </AutoComplete.Option>
          ))}
          style={{ width: 300, marginTop: "1rem" }}
          onChange={exercise_name => {this.props.searchExercise(exercise_name)}}
          optionLabelProp="text"
        >
          <Input
            suffix={<Icon type="search" className="certain-category-icon" />}
            placeholder="Search Exercises"
          />
        </AutoComplete>
      </div>
    );
  }
}

const filterStyles = {
  textAlign: "center"
};
