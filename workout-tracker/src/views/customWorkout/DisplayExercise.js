import React, { Component } from "react";
import { List, Card, Modal, Button, Avatar } from "antd";

export default class DisplayExercise extends Component {
  state = { visible: false };

  showModal = (id) => {
    this.props.showSingleExercise(id);
    this.setState({
      visible: true
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div
        style={{
          padding: "2rem",
          maxWidth: "75%",
          fontSize: ".8rem",
          marginLeft: "19%"
        }}
      >
        <List
          itemLayout="vertical"
          grid={{ gutter: 12, lg: 3, md: 2 }}
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 12,
            showLessItems: true
          }}
          dataSource={this.props.dataSource.sort((a, b) => a.id - b.id)}
          renderItem={item => (
            <List.Item>
              <Card
                actions={[
                  <Button onClick={() => this.showModal(item.id)} icon="info-circle" key={item.id}>
                    Info
                  </Button>,
                  <Button
                    onClick={e => this.props.addExercise(item, e)}
                    type="primary"
                    icon="plus-circle"
                    key={item.id}
                  >
                    Add
                  </Button>
                ]}
              >
                <Card.Meta
                  title={<h4>{item.exercise_name}</h4>}
                  avatar={<Avatar src={item.picture_one} />}
                  description={
                    <>
                      This is a <strong>{item.type}</strong> exercise that
                      targets the <strong>{item.muscle}</strong> muscle and
                      requires <strong>{item.equipment}</strong>
                    </>
                  }
                />
              </Card>
            </List.Item>
          )}
        />
        <Modal
          title={
            this.props.singleExercise
              ? this.props.singleExercise[0].exercise_name
              : null
          }
          visible={this.state.visible}
          // {this.props.singleExercise[0].closeExercise}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.props.singleExercise ? (
            <div>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  this.state.visible && <video className="" controls autoplay>
                    <source
                      src={this.props.singleExercise[0].video}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                }
              >
                <Card.Meta
                  title={this.props.singleExercise[0].exercise_name}
                  description={
                    <div className="description">
                      {this.props.singleExercise[0].description}
                    </div>
                  }
                />
                <div className="div-para">
                  <p> Level: {this.props.singleExercise[0].difficulty}</p>
                  <p> Type: {this.props.singleExercise[0].type}</p>
                  <p>Target: {this.props.singleExercise[0].muscle}</p>
                  <p> Equipment: {this.props.singleExercise[0].equipment}</p>
                </div>
              </Card>
              ,
            </div>
          ) : null}
        </Modal>
      </div>
    );
  }
}
