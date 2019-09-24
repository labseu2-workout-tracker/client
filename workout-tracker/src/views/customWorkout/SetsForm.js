import React, { Component } from "react";
import { Form, Radio, InputNumber, Icon, Button } from "antd";

class SetsForm extends Component {
  remove = (e, k) => {
    const { form } = this.props;
    const keys = form.getFieldValue(`${e}keys`);
    if (keys.length === 1) {
      return;
    }
    form.setFieldsValue({
      [`${e}keys`]: keys.filter(key => key !== k)
    });
  };

  add = (e, key) => {
    key = key.length === 0 ? [] : key;
    const { form } = this.props;
    const keys = form.getFieldValue(`${e}keys`);
    const nextKeys = keys.concat(key.length);
    form.setFieldsValue({
      [`${e}keys`]: nextKeys
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const result = [];
        this.props.exercises.forEach(ex => {
          const keys = values[`${ex.id}keys`];
          const reps = values[`${ex.id}reps`];
          const weight = values[`${ex.id}weight`];
          const type = values[`${ex.id}type`];
          keys.forEach((element, index) => {
            const newObject = {};
            console.log(type[element]);
            if (type[element] === "reps") newObject["reps"] = reps[element] ? reps[element] : null;
            else newObject["duration"] = reps[element]? `${reps[element]} seconds`: null;
            newObject["weights"] = weight[element] ? weight[element]: null;
            newObject["exercise_id"] = ex.id;
            newObject["position"] = index + 1;
            result.push(newObject);
          });
        });
        const newWorkout = {
          ...this.props.newWorkout,
          exercises: result,
        }
        this.props.createWorkout(newWorkout, this.props.history);
      }
    });
  };

  render() {
    const { exercises } = this.props;
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const exerciseSet = exercises.map(e => {
      getFieldDecorator(`${e.id}keys`, { initialValue: [] });
      const keys = getFieldValue(`${e.id}keys`);
      return (
        <div key={e.id}>
          <h3>{e.exercise_name}</h3>
          {keys.map(k => (
            <div key={`${e.id}${k}`}>
              <Form.Item key={k + "2" + e}>
                {getFieldDecorator(`${e.id}type[${k}]`, {
                  initialValue: "reps"
                })(
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value="reps">Reps</Radio.Button>
                    <Radio.Button value="duration">Duration</Radio.Button>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item
                label={
                  getFieldValue(`${e.id}type[${k}]`) === "reps"
                    ? "Reps"
                    : "Duration (secs)"
                }
                required={false}
                key={k + "0" + e}
              >
                {getFieldDecorator(`${e.id}reps[${k}]`, {
                  validateTrigger: ["onChange", "onBlur"],
                  rules: [
                    {
                      required: true,
                      whitespace: true,
                      pattern: /^[0-9]+$/,
                      message: "Input reps/duration or delete this field"
                    }
                  ]
                })(<InputNumber min={1} max={200} />)}
              </Form.Item>
              <Form.Item label="Weight (kg)" required={false} key={k + "1"}>
                {getFieldDecorator(`${e.id}weight[${k}]`, {
                  validateTrigger: ["onChange", "onBlur"],
                  rules: [
                    {
                      whitespace: true,
                      pattern: /^[0-9]+.?([0-9]+)?$/,
                      message:
                        "Number between 1 - 200 allowed"
                    }
                  ]
                })(<InputNumber min={1} max={200} />)}
              </Form.Item>
              {keys.length > 1 ? (
                <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  onClick={() => this.remove(e.id, k)}
                />
              ) : null}
            </div>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              icon="plus"
              onClick={() => this.add(e.id, keys)}
            >
              Add field
            </Button>
          </Form.Item>
        </div>
      );
    });

    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          {exerciseSet}
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={this.props.loading}>
              {this.props.loading ? "Creating Workout..." : "Create Workout"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: "sets-form" })(SetsForm);
