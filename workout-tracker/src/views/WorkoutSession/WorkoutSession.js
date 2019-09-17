import React from 'react';
import Watch from '../../components/Watch/Watch';
import { connect } from 'react-redux';
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
} from 'antd';
import {
  chooseExercise,
  finishExercise,
  endWorkout
} from '../../store/actions/workoutsActions';
import styled from 'styled-components';

const StyledWorkoutSession = styled.div``;

class WorkoutSession extends React.Component {
  componentDidMount = () => {
    // const startButton = document.querySelector(".btn-start");
    // startButton.click();
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

  handleCancel = (e) => {
    this.setState({
      visible: false
    });
  };

  handleOk = (e) => {
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
    return (
      <StyledWorkoutSession>
        <Card
          title="Workout Session"
          style={{
            fontSize: 14,
            margin: 10,
            backgroundColor: 'rgba(13, 40, 90, 0.85)'
          }}
        >
          <Card //Top Card with picture / watch  and Details reps etc
            type="inner"
          >
            <div style={{ background: '#ECECEC', padding: '30px' }}>
              <Row gutter={16}>
                <Col // image and details
                  span={8}
                >
                  {/* <Card
                   style={{ width: 240 }}
                    title={this.props.currentExercise[0].exercise_name}
                    bordered={false}
                  >
                    <img
                    
                      alt="Exercise explanation"
                      src={this.props.currentExercise[0].picture_one}
                    />
                    <div>
                      <img
                       
                        alt="Exercise explanation"
                        src={this.props.currentExercise[0].picture_two}
                      />
                    </div>
                  </Card> */}
                  <Card
                    title={this.props.currentExercise[0].exercise_name}
                    bordered={false}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="Exercise explanation"
                        src={this.props.currentExercise[0].picture_one}
                      />
                    }
                  ></Card>
                </Col>
                <Col // Stats
                  span={8}
                >
                  <Card title="stats" bordered={false}>
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
                  </Card>
                </Col>
                <Col // Watch
                  span={8}
                >
                  <Card title="Watch" bordered={false}>
                    <div>
                      <Icon color="red" type="play-circle" theme="twoTone" />
                      <Icon color="red" type="pause-circle" theme="twoTone" />
                      <Icon color="red" type="stop" theme="twoTone" />
                    </div>
                    
                  </Card>
                </Col>
              </Row>
            </div>
          </Card>
          <Card //Bottom Card with Exer & Instructions
            style={{ marginTop: 16 }}
            type="inner"
          >
            <div style={{ background: '#ECECEC', padding: '30px' }}>
              <Row gutter={16}>
                <Col span={12}>
                  <Card //Instructions bar
                    title="Instructions"
                    bordered={false}
                  >
                    <Card bordered={false} style={{ lineHeight: 1.2 }}>
                  <Alert
                    message="Instructions"
                    description={this.props.currentExercise[0].description}
                    type="info"
                  />
                  {/* {`${this.state.initial} ==> ${this.props.currentExercise.length} ===> ${this.props.allExercises.length}`} */}
                </Card>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card // Excercise List
                    title="Excercise List"
                    bordered={false}
                  >
                    Card content
                  </Card>
                </Col>
              </Row>
            </div>
          </Card>
        </Card>
      </StyledWorkoutSession>
    );
  }
}

const mapStateToProps = (state) => {
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
