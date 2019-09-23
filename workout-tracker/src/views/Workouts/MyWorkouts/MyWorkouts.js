import React from 'react';
import { connect } from 'react-redux';
import { fetchWorkoutDetails, deleteWorkout } from '../../../store/actions/workoutsActions';
import { Empty } from 'antd';
// import styled from 'styled-components';

import WorkoutCard from '../../../components/WorkoutCard/WorkoutCard';
import AddWorkoutButton from '../../../utils/AddWorkoutButton';
import CreateModalForm from '../../customWorkout/ModalForm';

import {
  addWorkoutDetails,
} from "../../../store/actions/workoutsActions"

// const StyledDiv = styled.div`
//   display: flex;
//   margin: auto;
// `;

class MyWorkouts extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      this.props.addWorkoutDetails(values);
      form.resetFields();
      this.setState({ visible: false });
      this.props.history.push('/workouts/new/add_exercises');
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      // <StyledDiv>
      <>
        {this.props.myWorkouts 
        ? (this.props.myWorkouts.map((workout, index) => {
          return (
            <WorkoutCard
              key={index}
              image={workout.image_url}
              name={workout.workout_name}
              description={workout.workout_description}
              startWorkout={() => this.props.fetchWorkoutDetails(workout.id)}
              deleteWorkout={() => this.props.deleteWorkout(workout.id)}
              myWorkout={true}
            />
          )
        }))
        : 
          <Empty
              image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
              imageStyle={{ height: 60 }}
              description={
                  <span style={{marginBottom: ".5rem"}}> 
                    Custom and saved workouts will appear here!
                  </span>
              }
           >
            <div>
              <AddWorkoutButton modal={this.showModal}/>

              <CreateModalForm
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
              />
      </div>
          </Empty>
        }
        </>
      //</StyledDiv>
    )
  }
}

const mapStateToProps = state => {
  return {
    myWorkouts: state.workouts.myWorkouts,
    newWorkout: state.workouts.newWorkout
  };
};

export default connect(
  mapStateToProps,
  { fetchWorkoutDetails, deleteWorkout, addWorkoutDetails }
)(MyWorkouts);
