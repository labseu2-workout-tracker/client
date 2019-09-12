import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Form, Input, Button } from 'antd';

const CreateModalForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
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
            <Form.Item label="Workout Tittle">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the name of the custom workout!'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the description for the workout!'
                  }
                ]
              })(<Input type="textarea" />)}
            </Form.Item>
            <div style={{ textAlign: 'center' }}>
              <Button type="primary"  onClick={() => onCreate} >
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
