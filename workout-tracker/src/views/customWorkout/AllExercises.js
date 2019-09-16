import React, { Component } from "react";
import DisplayExercise from "./DisplayExercise";
import FilterExercises from "./FilterExercises";
import TopBar from "./TopBar";
import {
  fetchExercises,
  addToSelectedExercises,
  filterMuscles,
  showSingleExercise
} from "../../store/actions/exerciseActions";
import { Spin, Button } from "antd";
import { ReactHeight } from "react-height";
import { connect } from "react-redux";

class AllExercises extends Component {
  state = {
    topBarHeight: ""
  };

  setTopBarHeight = height => {
    this.setState({
      topBarHeight: height
    });
  };

  componentDidMount() {
    this.props.fetchExercises();
  }

  render() {
    return this.props.loading ? (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Spin tip="Loading Exercices..." size="large" />
      </div>
    ) : (
      <>
        {this.props.exercises && (
          <div>
            <div style={topBar}>
              <ReactHeight
                onHeightReady={height => this.setTopBarHeight(height)}
              >
                <TopBar
                  newWorkout={this.props.newWorkout}
                  selectedExercises={this.props.selectedExercises}
                />
              </ReactHeight>
            </div>
            <div style={{ marginTop: this.state.topBarHeight + 15 }}>
              <FilterExercises filterMuscles={this.filterMuscles} />
              <DisplayExercise
                showSingleExercise={this.props.showSingleExercise}
                addExercise={this.props.addToSelectedExercises}
                dataSource={this.props.exercises}
                singleExercise={this.props.singleExercise}
              />
            </div>
            <Button
              type="dashed"
              size="large"
              shape="circle"
              icon="close"
              style={floatingButtons}
              onClick={() => this.props.history.push("/workouts")}
            ></Button>
            <Button
              type="primary"
              size="large"
              shape="circle"
              icon="check"
              style={{ ...floatingButtons, ...bottom }}
              onClick={() => this.props.history.push("/workouts/new/add_sets")}
            ></Button>{" "}
          </div>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    exercises: state.exercises.remainingExercises,
    loading: state.exercises.loading,
    newWorkout: state.workouts.newWorkout,
    error: state.exercises.error,
    selectedExercises: state.exercises.selectedExercises,
    singleExercise: state.exercises.singleExercise
  };
}

export default connect(
  mapStateToProps,
  { fetchExercises, addToSelectedExercises, filterMuscles, showSingleExercise }
)(AllExercises);

const floatingButtons = {
  position: "fixed",
  right: "2rem",
  top: "2rem",
  width: "60px",
  height: "60px",
  zIndex: 7
};

const bottom = {
  top: "unset",
  bottom: "2rem",
  boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, .15)"
};

const topBar = {
  padding: "1rem",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 5,
  background: "#efefef",
  boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, .15)"
};
