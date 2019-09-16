import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'antd';

const { Meta } = Card;
const ButtonGroup = Button.Group;

const WorkoutCard = (props) => {

  return (
    <Col>
      <Card
        hoverable
        style={{ width: "15.1rem" }}
        cover={<img alt="cover" src={props.image} style={{width: "15rem", height: "15rem", objectFit: "cover"}}/>}
      >
        <Meta
          title={props.name} style={{margin: '.5rem 0'}}
          description={
            <ul style={{listStyle: 'none'}}>
              <li>Difficulty:</li>
              <li>Exercises:</li>
              <li>Duration:</li>

            </ul>
          }
          />
        <ButtonGroup>
          <Button type="primary" size="small">
            <Link onClick={props.startWorkout} to='/Workout_session'>Start Workout</Link>
          </Button>
          <Button
            onClick={props.deleteWorkout}
            size="small"
          >
            Remove
          </Button>
        </ButtonGroup>
      </Card>
    </Col>
  )
}

export default WorkoutCard;