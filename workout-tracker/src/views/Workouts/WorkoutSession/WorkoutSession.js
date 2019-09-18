import React from "react";
import Watch from "../../../components/Watch/Watch";
import { connect } from "react-redux";
import {
  PageHeader,
  Statistic,
  Row,
  Col,
  Card,
  Icon,
  List,
  Button,
  Modal,
  Carousel,
  Alert
} from "antd";
import {
  chooseExercise,
  finishExercise,
  endWorkout
} from "../../../store/actions/workoutsActions";
import styled from "styled-components";

const StyledWorkoutSession = styled.div`
  /* font-size: .8rem; */

  line-height: 1;

  margin: 0 auto;

  .top {
    display: flex;
  }

  .exercise-picture {
    width: 50%;
  }

  .text {
    width: 50%;
  }

  .picture-text {
    display: flex;
    width: 66%;
  }

  img {
    width: 100%;
  }

  .exercise {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    .carousel {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) {
    .cover {
      display: none;
    }
  }
`;

class WorkoutSession extends React.Component {
  componentDidMount = () => {
    const startButton = document.querySelector(".btn-start");
    startButton.click();
  };

  endWorkout = () => {
    this.props.endWorkout(this.props.workoutId);
  };

  state = {
    visible: false
  };

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
    this.props.endWorkout(this.props.workoutId);
  }

  endWorkout = () => {
    this.props.endWorkout(this.props.workoutId, this.props.history);
  };
  render() {
    console.log(this.props)
    return (
      <StyledWorkoutSession>
        <Row type="flex" justify="space-around">
          <Col span={12}></Col>
          <Col span={12}></Col>
          <PageHeader
            onBack={() => window.history.back()}
            title={
              this.props.myWorkout ? this.props.myWorkout.workout_name : null
            }
          />
          <Watch />
        </Row>
        {this.props.currentExercise ? (
          <>
            <Row type="flex" justify="center" align="top">
              <Col md={7}>
                {this.props.allExercises ? (
                  <div>
                    {/* {} */}
                    <List
                      size="small"
                      header={<h3>Choose Exercises</h3>}
                      bordered
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
                        <List.Item
                          onClick={() => this.props.chooseExercise(item)}
                        >
                          {<Button>{item}</Button>}
                        </List.Item>
                      )}
                    />
                  </div>
                ) : (
                  <p className="button" onClick={this.endWorkout}>
                    Finish Workout
                  </p>
                )}
              </Col>
              <Col sm={7}>
                <Card
                  cover={
                    <>
                      <div className="carousel">
                        <Carousel
                          dots={false}
                          effect="fade"
                          autoplay
                          autoplaySpeed={1000}
                        >
                          <div>
                            <img
                              alt="Exercise explanation"
                              src={this.props.currentExercise[0].picture_one}
                            />
                          </div>
                          <div>
                            <img
                              alt="Exercise explanation"
                              src={this.props.currentExercise[0].picture_two}
                            />
                          </div>
                        </Carousel>
                      </div>
                      <div className="cover">
                        <img
                          alt="Exercise explanation"
                          src={this.props.currentExercise[0].picture_one}
                        />
                      </div>
                    </>
                  }
                  title={this.props.currentExercise[0].exercise_name}
                  actions={[
                    <Statistic
                      title="Sets to complete"
                      prefix={<Icon type="unordered-list" />}
                      style={{ cursor: "default" }}
                      value={this.props.currentExercise.length}
                    />,
                    <Statistic
                      title={
                        this.props.currentExercise[0].reps
                          ? "Repetitions"
                          : "Duration"
                      }
                      prefix={<Icon type="sync" spin />}
                      value={
                        this.props.currentExercise[0].reps ||
                        (this.props.currentExercise[0].duration
                          ? this.props.currentExercise[0].duration
                          : "20seconds")
                      }
                      style={{ cursor: "default" }}
                    />,
                    <Statistic
                      title="Next Exercise"
                      prefix={
                        <Icon
                          onClick={() =>
                            this.props.finishExercise(
                              this.props.currentExercise[0].id
                            )
                          }
                          type="double-right"
                        />
                      }
                      style={{ cursor: "default" }}
                      value=" "
                    />
                  ]}
                >
                  <Card.Meta
                    description={`Equipment Needed: ${this.props.currentExercise[0].equipment}`}
                  />
                </Card>
              </Col>
              <Col md={7}>
                {this.props.currentExercise ? (
                  <div style={{ marginTop: "1rem" }}>
                    <Button type="primary" onClick={this.showModal}>
                      Video Instruction
                    </Button>
                  </div>
                ) : null}
                <Card bordered={false} style={{ lineHeight: 1.2 }}>
                  <Alert
                    message="Instructions"
                    description={this.props.currentExercise[0].description}
                    type="info"
                  />
                  {/* {`${this.state.initial} ==> ${this.props.currentExercise.length} ===> ${this.props.allExercises.length}`} */}
                </Card>
              </Col>
            </Row>
          </>
        ) : (
          <Button type="primary" onClick={this.endWorkout}>
            End Workout
          </Button>
        )}
        {this.props.currentExercise ? (
          <Modal
            title={this.props.currentExercise[0].exercise_name}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
          >
            {this.state.visible && (
              <video width="100%" height="auto" autoPlay controls>
                <source
                  src={this.props.currentExercise[0].video}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </Modal>
        ) : null}
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
