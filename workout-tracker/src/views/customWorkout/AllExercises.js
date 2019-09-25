import React, { Component } from "react";
import DisplayExercise from "./DisplayExercise";
import FilterExercises from "./FilterExercises";
import SideBar from "./SideBar";
import {
  fetchExercises,
  addToSelectedExercises,
  filterMuscles,
  showSingleExercise,
  searchExercise
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
          height: "100vh",
          maxWidth: '1200px',
          margin: '0 auto',
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
                <FilterExercises
                  {...this.props}
                  filterMuscles={this.filterMuscles}
                />
              </ReactHeight>
            </div>
            <div style={{ marginTop: this.state.topBarHeight + 15 }}>
              <SideBar
                marginTop={this.state.topBarHeight + 15}
                newWorkout={this.props.newWorkout}
                selectedExercises={this.props.selectedExercises}
              />

              <DisplayExercise
                showSingleExercise={this.props.showSingleExercise}
                addExercise={this.props.addToSelectedExercises}
                dataSource={this.props.exercises}
                singleExercise={this.props.singleExercise}
              />
            </div>
            <Button
              type="link"
              size="large"
              icon="close"
              style={floatingButtons}
              onClick={() => this.props.history.push("/workouts")}
            ></Button>
            <Button
              type="primary"
              size="large"
              icon="check"
              style={{ ...floatingButtons, ...bottom }}
              onClick={() => this.props.history.push("/workouts/new/add_sets")}
            >Save Exercices</Button>{" "}
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
  {
    fetchExercises,
    searchExercise,
    addToSelectedExercises,
    filterMuscles,
    showSingleExercise
  }
)(AllExercises);

const floatingButtons = {
  position: "fixed",
  right: "2rem",
  top: "1rem",
  zIndex: 7
};

const bottom = {
  top: "unset",
  bottom: "1rem",
  left: "1rem",
  width: "calc(25% - 2rem)",
  boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, .15)"
};

const topBar = {
  padding: "1rem",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 5,
  background: "#fff",
  boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, .05)"
};
