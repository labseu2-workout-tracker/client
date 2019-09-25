import React, { Component } from "react";
import UpdateWorkoutDetails from "./UpdateWorkoutDetails";
import SelectedExercises from "./SelectedExercises";
import { connect } from "react-redux";
import { notification } from "antd";
import { addWorkoutDetails } from "../../store/actions/workoutsActions";
import { removeFromSelectedExercises } from "../../store/actions/exerciseActions";

class SideBar extends Component {
  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      this.props.addWorkoutDetails(values);
      notification["success"]({
        message: 'Workout details updated successfully',
        duration: 3,
      });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div style={{ height: `calc(100% - ${this.props.marginTop}px - 3rem)`, ...sideFilter}}>
        <div style={{ overflow: "auto" }}>
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
  { addWorkoutDetails, removeFromSelectedExercises }
)(SideBar);

const sideFilter = {
  margin: "0 auto",
  display: "flex",
  padding: "1rem",
  position: "fixed",
  width: "25%",
  borderRightColor: "red",
  borderRight: ".5px solid #efefef",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto"
};
