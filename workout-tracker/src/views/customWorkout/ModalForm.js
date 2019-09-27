import React from 'react';
import { Modal, Form, Input, Button, Radio } from 'antd';
import { axiosWithAuth } from '../../store/axiosWithAuth'

const workouts = `${process.env.REACT_APP_BASE_URL}/workouts`;

const CreateModalForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    state = {
      status: '',
      help: ''
    }

    onCreate = () => {
      if (this.state.status !== 'success') return
      this.props.onCreate()
    }

    checkWorkoutName = (name) => {
      if (!/^[a-z\d\-_\s']+$/i.test(name)) {
        console.log(name)
        this.setState({
          status: 'error',
          help: 'Please input a valid workout name'
        })
        return
      }
      this.setState({
        status: 'validating',
        help: 'Checking...'
      })
      axiosWithAuth()
        .post(`${workouts}/exists`, { workout_name: name})
        .then(res => {
          this.setState({
            status: 'success',
            help: 'Workout name valid and available'
          })
        })
        .catch(error => {
          this.setState({
            status: 'error',
            help: 'Workout Name already exist'
          })
        })
    }
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a Custom Workout"
          okText="Add exercises"
          onOk={onCreate}
          onCancel={onCancel}
          footer={null}
          
        >
          <Form layout="vertical">
            <Form.Item 
              label="Workout Title" 
              hasFeedback 
              validateStatus={this.state.status}
              help={this.state.help}
            >
              {getFieldDecorator('workout_name', {
                rules: [
                  {
                    required: true,
                    pattern: /^[a-z\d\-_\s']+$/i,
                    message: 'Please input a valid custom workout name!'
                  }
                ]
              })(<Input onChange={(e) => this.checkWorkoutName(e.target.value)} />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('workout_description', {
                rules: [
                  {
                    required: true,
                    pattern: /^[a-z\d\-_\s']+$/i,
                    message: 'Please input a valid workout description!'
                  }
                ]
              })(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator('level')(
                <Radio.Group>
                  <Radio value="Beginner">Beginner</Radio>
                  <Radio value="Intermediate">Intermediate</Radio>
                  <Radio value="Expert">Expert</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
            <div style={{ textAlign: 'center' }}>
              <Button type="primary"  onClick={this.onCreate} >
                Add exercises
              </Button>
            </div>
          </Form>
        </Modal>
      );
    }
  }
);

export default CreateModalForm;
