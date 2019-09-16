import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Card, Button, Col, Icon } from 'antd';

const { Meta } = Card;
const ButtonGroup = Button.Group;

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
        style={{ width: "15.1rem" }}
        cover={<img alt="cover" src={this.props.image} style={{width: "15rem", height: "15rem", objectFit: "cover"}}/>}
      >
        <Meta
          
          title={this.props.name} style={{margin: '.5rem 0'}}
          description={this.props.myWorkout
            ? <ul style={{listStyle: 'none'}}>
                <li>Difficulty:</li>
                <li>Exercises:</li>
                <li>Duration:</li>
              </ul>
            : this.props.description
          }
          
          />
        <ButtonGroup>
          <Button type="primary" size="small">
            <Link onClick={this.props.startWorkout} to='/Workout_session'>Start Workout</Link>
          </Button>
          {!this.props.myWorkout
          ? <Button
              onClick={this.props.addWorkout}
              size="small"
            >
             Add
            </Button>
          : <Button
              onClick={this.props.deleteWorkout}
              size="small"
            >
              Remove
            </Button>
          }
        </ButtonGroup>
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
          <p>Exercises:</p>
        </Modal>
  </>
  )
  }
}
export default WorkoutCard;