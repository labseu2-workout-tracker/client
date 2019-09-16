import React, { Component } from "react";
import { Tag } from "antd";
import { TweenOneGroup } from "rc-tween-one";

export default class SelectedExercises extends Component {
  handleClose = exercise => {
    this.props.remove(exercise);
  };

  render() {
    return (
      <div>
        <strong>Selected Exercises: </strong>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: "from",
            duration: 100,
            onComplete: e => {
              e.target.style = "";
            }
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={false}
        >
          {this.props.exercises.map(exercise => (
            <span key={exercise.id}>
              <Tag
                closable
                onClose={e => {
                  e.preventDefault();
                  this.handleClose(exercise);
                }}
              >
                {exercise.exercise_name}
              </Tag>
            </span>
          ))}
        </TweenOneGroup>
      </div>
    );
  }
}
