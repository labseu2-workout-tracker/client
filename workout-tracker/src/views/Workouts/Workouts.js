import React from "react";
import { connect } from "react-redux";
import {
  fetchWorkouts,
  fetchWorkoutDetails,
  saveWorkout
} from "../../store/actions/workoutsActions";
// import styled from "styled-components";
import { notification, Empty } from "antd";

import WorkoutCard from '../../components/WorkoutCard/WorkoutCard';

// const StyledWorkouts = styled.div`
//   display: flex;

//   .ant-card-meta-description {
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
//   .off {
//     display: none;
//   }

//   .added-workout {
//     background: linear-gradient(45deg, rgb(106, 120, 209), rgb(0, 164, 189));

//     top: 50%;
//     left: 50%;
//     position: fixed;
//     transform: translate(-50%, -50%);
//     width: 50%;
//     height: 50%;
//     border-radius: 0.5rem;
//   }

//   .close {
//     width: 100%;
//     display: flex;
//     justify-content: flex-end;
//   }

//   i {
//     font-size: 3rem;
//     transition: 0.6s ease-in-out;

//     &:hover {
//       visibility: visible;
//     }
//   }
// `;


class Workouts extends React.Component {
  componentDidMount() {
    this.props.fetchWorkouts(); 
  }

  addWorkout = (type, workouts_id, name) => {
     let user_id = Number(localStorage.getItem('userId'));
   const data =   {
      workouts_id,
      user_id
    }
    notification[type]({
      message: "Successful!",
      description: `The workout ${name} got added to your list.`
    });

    this.props.saveWorkout(data);
  };

  
  render() {
    return (
      // <StyledWorkouts>
      <>
        {this.props.workouts 
          ? (this.props.workouts.map((workout, index) => {
            return (
              <WorkoutCard
                key={index}
                image={workout.image_url || 'https://www.bodybuilding.com/images/2018/april/5-workous-that-are-insanely-efficient-at-torching-fat-signature-3-700xh.jpg'}
                name={workout.workout_name}
                description={workout.workout_description}
                difficulty={workout.level}
                startWorkout={() => this.props.fetchWorkoutDetails(workout.id)}
                deleteWorkout={() => this.props.deleteWorkout(workout.id)}
                addWorkout={() => this.addWorkout( "success", workout.id, workout.workout_name )}
                myWorkout={false}
                exercises={this.props.allExercises}
              />
            )
            }))
          :
            <Empty
              image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
              imageStyle={{ height: 60 }}
            >
            </Empty>
        }
        </>
      // </StyledWorkouts>
    );
  }
}

const mapStateToProps = state => {
  return {
    workouts: state.workouts.workouts,
    allExercises: state.workouts.allExercises,
  };
};
export default connect(
  mapStateToProps,
  { fetchWorkouts, fetchWorkoutDetails, saveWorkout }
)(Workouts);