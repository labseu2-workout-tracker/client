import React from "react";
import Watch from "../../../components/Watch/Watch";
import { connect } from "react-redux";
import { Statistic, Card, Icon, List, Button, Alert, Row, Col } from "antd";
import {
  chooseExercise,
  finishExercise,
  endWorkout
} from "../../../store/actions/workoutsActions";
import styled from "styled-components";
const StyledWorkoutSession = styled.div`
  .btn1 {
    margin: 10px;
    padding: 10px;
    height: 50px;
    font-size: 18px;
    border: 1px solid transparent;
  }
  .media{
    @media only screen and (max-width: 600px) {
      background: "#ECECEC",
      display: "flex",
      flexDirection: "column"
    }

  }
`;
class WorkoutSession extends React.Component {
  state = {
    visible: false,
    checkIfFinished: true,
    width: 0,
    height: 0
  };


componentDidMount = () => {
  this.updateWindowDimensions();
  window.addEventListener("resize", this.updateWindowDimensions);
}

updateWindowDimensions = () => {
  this.setState({
    width: window.innerWidth
  })
}

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  componentWillUnmount() {
    this.setState({ initial: 0 });
    window.removeEventListener("resize", this.updateWindowDimensions);

    if (this.state.checkIfFinished) {
      this.props.endWorkout(this.props.workoutId, this.props.history);
    }
  }

  endWorkout = () => {
    this.props.endWorkout(this.props.workoutId, this.props.history);

    this.setState({
    checkIfFinished: false,
    });
  };

  nextExercise = () => {
    this.props.finishExercise(this.props.currentExercise[0].id);

    if (this.props.currentExercise.length === 1) {
      this.refs.audio.load();
    }
  };

  chooseExercise = item => {
    this.props.chooseExercise(item);
    this.refs.audio.load();
  };
  render() {
    return (
      <StyledWorkoutSession>
        {this.props.currentExercise ? (
          <Card
            style={{
              fontSize: 14,
              fontColor: "white",
              backgroundColor: "#001529"
            }}
          >
            <Card //Top Card with picture / watch  and Details reps etc
              // type="inner"
              bordered={false}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{}}>
                <Card
                  bordered={false}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                  title={
                    this.props.currentExercise
                      ? this.props.currentExercise[0].exercise_name
                      : null
                  }
                >
                  <div
                    style={{
                      height: "350px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
                    {/* <img
                    bordered={false}
                    // style={{ width: 500 }}
                    alt="Exercise explanation"
                    src={this.props.currentExercise[0].picture_one}
                  /> */}
                    <video
                      ref="audio"
                      autoPlay
                      loop
                      playsInline
                      muted
                      controls
                      width="90%"
                      height="auto"
                    >
                      <source
                        alt="Exercise explanation"
                        src={
                          this.props.currentExercise
                            ? this.props.currentExercise[0].video
                            : null
                        }
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Card>
                <Card
                  bordered={false}
                  style={{ display: "flex", flexDirection: "column", }}
                >
                  <Card
                    title={
                      this.props.currentExercise
                        ? this.props.currentExercise[0].exercise_name
                        : null
                    }
                    bordered={false}
                    actions={[
                      <Statistic
                        title="Sets to complete"
                        prefix={<Icon type="list" />}
                        style={{ cursor: "default" }}
                        value={
                          this.props.currentExercise
                            ? this.props.currentExercise.length
                            : null
                        }
                      />,
                      <Statistic
                        title={
                          this.props.currentExercise
                            ? this.props.currentExercise[0].reps
                              ? "Repetitions"
                              : "Duration"
                            : null
                        }
                        prefix={<Icon type="sync" />}
                        value={
                          this.props.currentExercise
                            ? this.props.currentExercise[0].reps ||
                              (this.props.currentExercise[0].duration
                                ? this.props.currentExercise[0].duration
                                : "20seconds")
                            : null
                        }
                        style={{ cursor: "default" }}
                      />,
                      <Statistic
                        title="Next Exercise"
                        prefix={
                          <Icon
                            onClick={this.nextExercise}
                            type="fast-forward"
                          />
                        }
                        style={{ cursor: "default" }}
                        value=" "
                      />
                    ]}
                  >
                    <Card.Meta
                      description={`Equipment Needed: ${
                        this.props.currentExercise
                          ? this.props.currentExercise[0].equipment
                          : null
                      }`}
                    />
                  </Card>
                  <div
                    style={{
                      margin: 20,
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <Button
                      className="btn1"
                      type="danger"
                      onClick={this.endWorkout}
                    >
                      Finish Workout
                    </Button>
                  </div>
                </Card>
                <Card
                  title="Timer"
                  bordered={false}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "spaceBetween",
                    alignItems: "center"
                  }}
                >
                  <Watch />
                </Card>
              </div>
            </Card>
            <Card //Bottom Card with Exer & Instructions
              style={{ marginTop: 16 }}
              type="outer"
              bordered={true}
            >
              <div
              style={
                this.state.width > 680
                  ? {
                      display: "flex",
                      flexDirection: "row",
                     
                    }
                  : {
                    display: "flex",
                    flexDirection: "column",
                  }
              } >
                <Card //Instructions bar
                  title="Instructions"
                  bordered={false}
                >
                  <Card bordered={false}>
                    <Alert
                      message="Instructions"
                      description={
                        this.props.currentExercise
                          ? this.props.currentExercise[0].description
                          : null
                      }
                      type="info"
                    />
                    {/* {`${this.state.initial} ==> ${this.props.currentExercise.length} ===> ${this.props.allExercises.length}`} */}
                  </Card>
                </Card>
                {this.props.allExercises ? (
                  <Card // Excercise List
                    title="Excercise List"
                    bordered={false}
                  >
                    <List
                      size="small"
                      header={<h3>Choose Exercises</h3>}
                      dataSource={this.props.allExercises
                        .reduce((acc, current) => {
                          const x = acc.find(
                            item => item.exercise_name === current.exercise_name
                          );
                          if (!x) {
                            return acc.concat([current]);
                          } else {
                            return acc;
                          }
                        }, [])
                        .map(exercise => exercise.exercise_name)}
                      renderItem={item => (
                        <List.Item onClick={() => this.chooseExercise(item)}>
                          {
                            <Button
                              style={{ textAlign: "left" }}
                              type="link"
                              block
                            >
                              {item}
                            </Button>
                          }
                        </List.Item>
                      )}
                    />
                  </Card>
                ) : null}
              </div>
            </Card>
          </Card>
        ) : (
          <div
            style={{
              padding: "30px",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div style={{ padding: "30px" }}>
              <Row gutter={24}>
                <Col span={24}>
                  <Card title="Great News !!!" bordered={false}>
                    <h1> You managed to get to the End.</h1>
                  </Card>
                </Col>
              </Row>
              <Button className="btn1" type="danger" onClick={this.endWorkout}>
                Finish Session
              </Button>
            </div>
          </div>
        )}
      </StyledWorkoutSession>
    );
  }
}
const mapStateToProps = state => {
  return {
    allExercises: state.workouts.allExercises,
    currentExercise: state.workouts.currentExercise,
    workoutId: state.workouts.workoutId,
    myWorkout: state.workouts.myWorkout
  };
};
export default connect(
  mapStateToProps,
  { chooseExercise, finishExercise, endWorkout }
)(WorkoutSession);
