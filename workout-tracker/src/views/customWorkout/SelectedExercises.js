import React, { Component } from "react";
import { List, Button } from "antd";

export default class SelectedExercises extends Component {
  handleClose = exercise => {
    this.props.remove(exercise);
  };

  render() {
    return (
      <div>
        <h3>Selected Exercises: </h3>
        <List
          size="small"
          bordered
          dataSource={this.props.exercises}
          itemLayout="vertical"
          renderItem={item => (
            <List.Item
              extra={!this.props.saveExercise &&
                <Button
                  size="small"
                  type="danger"
                  icon="close"
                  onClick={() => this.handleClose(item)}
                />
              }
            >
              {item.exercise_name}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
