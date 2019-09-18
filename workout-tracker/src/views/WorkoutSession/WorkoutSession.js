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
              {/* <Row gutter={16}>
                <Col // image and details
                  span={8}
                > */}
              <Card
                 style={{ display:'flex', flexDirection:'column', justifyContent:'center'}}
                title={this.props.currentExercise[0].exercise_name}
              >
                <img
                  bordered={false}
                  // style={{ width: 500 }}
                  alt="Exercise explanation"
                  src={this.props.currentExercise[0].picture_one}
                />
                {/* <div>
                  <img
                    style={{ width: 200 }}
                    alt="Exercise explanation"
                    src={this.props.currentExercise[0].picture_two}
                  />
                </div> */}
              </Card>
              {/* <Card
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
                  ></Card> */}
              {/* </Col>
                <Col // Stats
                  span={8}
                > */}
              <Card
                title="stats"
                bordered={false}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <Card
                  title={this.props.currentExercise[0].exercise_name}
                  actions={[
                    <Statistic
                      title="Sets to complete"
                      prefix={<Icon type="list" />}
                      style={{ cursor: 'default' }}
                      value={this.props.currentExercise.length}
                    />,
                    <Statistic
                      title={
                        this.props.currentExercise[0].reps
                          ? 'Repetitions'
                          : 'Duration'
                      }
                      prefix={<Icon type="sync" spin />}
                      value={
                        this.props.currentExercise[0].reps ||
                        (this.props.currentExercise[0].duration
                          ? this.props.currentExercise[0].duration
                          : '20seconds')
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
                    description={`Equipment Needed: ${this.props.currentExercise[0].equipment}`}
                  />
                </Card>

                <div style={{margin:20, display:'flex', justifyContent:'center'}}>
                  <Button type="danger" onClick={this.endWorkout}>
                    Finish Workout
                  </Button>
                </div>
              </Card>
              {/* </Col>
                <Col // Watch
                  span={8}
                > */}
              <Card
                title="Watch"
                bordered={false}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'spaceAround'
                }}
              >
                <Watch />
              </Card>
              {/* </Col> */}
              {/* </Row> */}
            </div>
          </Card>
          <Card //Bottom Card with Exer & Instructions
            style={{ marginTop: 16 }}
            type="outer"
          >
            <div
              style={{
                background: '#ECECEC',
                padding: '30px',
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              {/* <Row gutter={16}>
                <Col span={12}> */}
              <Card //Instructions bar
                title="Instructions"
                bordered={false}
              >
                <Card bordered={false}>
                  <Alert
                    message="Instructions"
                    description={this.props.currentExercise[0].description}
                    type="info"
                  />
                  {/* {`${this.state.initial} ==> ${this.props.currentExercise.length} ===> ${this.props.allExercises.length}`} */}
                </Card>
              </Card>
              {/* </Col> */}
              {/* <Col span={12}> */}
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
                    .map((exercise) => exercise.exercise_name)}
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
              </Card>
              {/* </Col> */}
              {/* </Row> */}
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
