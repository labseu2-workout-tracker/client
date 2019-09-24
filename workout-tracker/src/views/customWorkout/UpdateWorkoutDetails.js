import React from "react";
import { Form, Input, Button, Radio } from "antd";

const UpdateWorkoutDetails = Form.create({ name: "update_workout" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Form style={{ marginTop: '1rem'}} layout="inline">
          <Form.Item label="Workout Name" >
            {getFieldDecorator("workout_name", {
              initialValue: `${this.props.name || ''}`,
              rules: [
                {
                  required: true,
                  message: "Please input the name of the custom workout!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Description">
            {getFieldDecorator("workout_description", {
              initialValue: `${this.props.description || ''}`,
              rules: [
                {
                  required: true,
                  message: "Please input the description for the workout!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Level" className="collection-create-form_last-form-item">
            {getFieldDecorator("level", {
              initialValue: `${this.props.level || ''}`
            })(
              <Radio.Group>
                <Radio value="Beginner">Beginner</Radio>
                <Radio value="Intermediate">Intermediate</Radio>
                <Radio value="Expert">Expert</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <Button onClick={this.props.onCreate}>Update</Button>
        </Form>
      );
    }
  }
);

export default UpdateWorkoutDetails;
