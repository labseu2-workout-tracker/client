import React from 'react';
import CreateModalForm from '../../customWorkout/ModalForm/customWorkout/ModalForm';
import { connect } from "react-redux";
import {
  addWorkoutDetails,
} from "../../store/actions/workoutsActions";
import AddWorkoutButton from '../../utils/AddWorkoutButton'

class WorkoutPage extends React.Component {
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
      <div>
        <AddWorkoutButton modal={this.showModal}/>

        <CreateModalForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newWorkout: state.workouts.newWorkout,
  };
};

export default connect(
  mapStateToProps,
  { addWorkoutDetails }
)(WorkoutPage);