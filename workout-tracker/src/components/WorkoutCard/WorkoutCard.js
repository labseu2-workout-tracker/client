import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';

const { Meta } = Card;


const WorkoutCard = (props) => {

  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="cover" src={props.image}/>}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        <Link onClick={props.startWorkout} to='/Workout_session'>Start Workout</Link>
        <Button
          type="danger"
          size="large"
          onClick={props.deleteWorkout}
        >
          Remove Workout
        </Button>
      </Card>
    </div>
  )
}

export default WorkoutCard;