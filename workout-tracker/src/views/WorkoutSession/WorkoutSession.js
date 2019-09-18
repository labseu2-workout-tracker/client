import React from 'react';
import Watch from '../../components/Watch/Watch';
import { connect } from 'react-redux';
import {
  Statistic,
  Row,
  Col,
  Card,
  Icon,
  List,
  Button,
  Modal,
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
    // location.reload();
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
        {this.props.currentExercise ? (
        <Card
          style={{
            fontSize: 14,
            fontColor: 'white',
            backgroundColor: '#001529'
          }}
        >
          <Card //Top Card with picture / watch  and Details reps etc
            // type="inner"
            bordered={false}
          >
            <div style={{}}>
              <Card
                bordered={false}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
                title={this.props.currentExercise ? this.props.currentExercise[0].exercise_name : null}
              >
                <div
                  style={{
                    height: '350px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                  }}
                >
                  {/* <img
                    bordered={false}
                    // style={{ width: 500 }}
                    alt="Exercise explanation"
                    src={this.props.currentExercise[0].picture_one}
                  /> */}
                  <video autoplay loop playsinline muted controls width="90%" height="auto">
                    <source
                      alt="Exercise explanation"
                      src={this.props.currentExercise ? this.props.currentExercise[0].video : null}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Card>
              <Card
                title="stats"
                bordered={false}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <Card
                  title={this.props.currentExercise ? this.props.currentExercise[0].exercise_name : null}
                  bordered={false}
                  actions={[
                    <Statistic
                      title="Sets to complete"
                      prefix={<Icon type="list" />}
                      style={{ cursor: 'default' }}
                      value={this.props.currentExercise ? this.props.currentExercise.length : null}
                    />,
                    <Statistic
                      title={this.props.currentExercise ? (
                        this.props.currentExercise[0].reps
                          ? 'Repetitions'
                          : 'Duration') : null
                      }
                      prefix={<Icon type="sync" />}
                      value={this.props.currentExercise ? (
                        this.props.currentExercise[0].reps ||
                        (this.props.currentExercise[0].duration
                          ? this.props.currentExercise[0].duration
                          : '20seconds')) : null
                      }
                      style={{ cursor: 'default' }}
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
                          type="fast-forward"
                        />
                      }
                      style={{ cursor: 'default' }}
                      value=" "
                    />
                  ]}
                >
                  <Card.Meta
                    description={`Equipment Needed: ${this.props.currentExercise ? this.props.currentExercise[0].equipment : null}`}
                  />
                </Card>
                <div
                  style={{
                    margin: 20,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Button type="danger" onClick={this.endWorkout}>
                    Finish Workout
                  </Button>
                </div>
              </Card>
              <Card
                title="Timer"
                bordered={false}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'spaceAround'
                }}
              >
                <Watch />
              </Card>
            </div>
          </Card>
          <Card //Bottom Card with Exer & Instructions
            style={{ marginTop: 16 }}
            type="outer"
          >
            <div
              style={{
                background: '#ECECEC',
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              <Card //Instructions bar
                title="Instructions"
                bordered={false}
              >
                <Card bordered={false}>
                  <Alert
                    message="Instructions"
                    description={this.props.currentExercise ? this.props.currentExercise[0].description : null}
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
                        (item) => item.exercise_name === current.exercise_name
                      );
                      if (!x) {
                        return acc.concat([current]);
                      } else {
                        return acc;
                      }
                    }, [])
                    .map((exercise) => exercise.exercise_name) }
                  renderItem={(item) => (
                    <List.Item onClick={() => this.props.chooseExercise(item)}>
                      {
                        <Button style={{ textAlign: 'left' }} type="link" block>
                          {item}
                        </Button>
                      }
                    </List.Item>
                  )}
                /> 
              </Card>)
                : null}
            </div>
          </Card>
        </Card>) : ( <Button type="danger" onClick={this.endWorkout}>
                    Finish Workout
                  </Button>) }
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