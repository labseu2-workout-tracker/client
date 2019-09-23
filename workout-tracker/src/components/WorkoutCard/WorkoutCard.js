import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Card, Button, Col, Icon, List } from 'antd';

const { Meta } = Card;

class WorkoutCard extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
  return (
    <>
    <Col>
      <Card
        style={{ width: "15.1rem", marginBottom: '1rem' }}
        cover={<img alt="cover" src={this.props.image} style={{width: "15rem", height: "15rem", objectFit: "cover"}}/>}
      >
        <Meta
          
          title={this.props.name} style={{margin: '.5rem 0'}}
          description={this.props.myWorkout
            ? <ul style={{listStyle: 'none'}}>
                <li>Difficulty: {this.props.difficulty}</li>
              </ul>
            : this.props.description
          }
          
          />
          <Button type="primary" size="small" block style={{fontWeight: 'bold'}}>
            <Link onClick={this.props.startWorkout} to='/Workout_session'>Start Workout</Link>
          </Button>
          {!this.props.myWorkout
          ? <Icon
              type="plus-circle"
              onClick={this.props.addWorkout}
            />
          : <Icon
              type="minus-circle"
              onClick={this.props.deleteWorkout}
            />
          }
        <Icon
          type="info-circle"
          onClick={this.showModal}/>
      </Card>
    </Col>
    <Modal
      title={this.props.name}
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
      >
      <div style={{display: 'flex'}}>
        <img alt="cover" src={this.props.image} style={{width: "15rem", height: "15rem", objectFit: "cover"}}/>
        <p><span style={{fontWeight: 'bold'}}>Description: </span>{this.props.description}</p>
      </div>
      <div>
        {this.props.exercises ? (
          <div>
            <List
              size="small"
              header={<h3>Exercises</h3>}
              bordered
              dataSource={this.props.exercises
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
                <List.Item>
                  {item}
                </List.Item>
              )}
            />
          </div>
        ) : null}
              </div>
    </Modal>
  </>
  )
  }
}
export default WorkoutCard;