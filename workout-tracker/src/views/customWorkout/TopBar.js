import React, { Component } from "react";
import UpdateWorkoutDetails from "./UpdateWorkoutDetails";
import SelectedExercises from "./SelectedExercises";
import { connect } from "react-redux";
import { addWorkoutDetails } from "../../store/actions/workoutsActions";
import {
  removeFromSelectedExercises,
  searchExercise
} from "../../store/actions/exerciseActions";
import { Input, Icon, AutoComplete } from "antd";

class TopBar extends Component {
  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      this.props.addWorkoutDetails(values);
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <UpdateWorkoutDetails
          wrappedComponentRef={this.saveFormRef}
          onCreate={this.handleCreate}
          name={this.props.newWorkout && this.props.newWorkout.workout_name}
          description={
            this.props.newWorkout && this.props.newWorkout.workout_description
          }
          level={this.props.newWorkout && this.props.newWorkout.level}
        />

        <SelectedExercises
          remove={this.props.removeFromSelectedExercises}
          exercises={this.props.selectedExercises}
        />
        <div style={{ textAlign: 'center'}}>
          <AutoComplete
            dataSource={[...new Set(this.props.exercises)].map(e => (
              <AutoComplete.Option key={e.exercise_name} text={e.exercise_name}>
                {e.exercise_name}
              </AutoComplete.Option>
            ))}
            style={{ width: 300 }}
            onChange={exercise_name => this.props.searchExercise(exercise_name)}
            optionLabelProp="text"
          >
            <Input
              suffix={<Icon type="search" className="certain-category-icon" />}
              placeholder="Search Exercises"
            />
          </AutoComplete>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newWorkout: state.workouts.newWorkout,
    exercises: state.exercises.remainingExercises
  };
};

export default connect(
  mapStateToProps,
  { addWorkoutDetails, removeFromSelectedExercises, searchExercise }
)(TopBar);
