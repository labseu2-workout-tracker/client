import React from "react";
import { Form, Input, Button, Radio } from "antd";

const UpdateWorkoutDetails = Form.create({ name: "update_workout" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Form style={{ textAlign: "center" }} layout="inline">
          <Form.Item /* label="Workout Name" */>
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
          <Form.Item /* label="Description" */>
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
          <Form.Item /* label="Level" */>
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
          <Form.Item className="collection-create-form_last-form-item">
            <Button type="primary" onClick={onCreate}>
              Update
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
);

export default UpdateWorkoutDetails;
