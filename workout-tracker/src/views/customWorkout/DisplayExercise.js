import React, { Component } from "react";
import { List, Card, Modal, Button, Avatar, Row } from "antd";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

class DisplayExercise extends Component {
  state = { visible: false };

  showModal = id => {
    this.props.showSingleExercise(id);
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <StyledList
        
          itemLayout="horizontal"
          grid={{ gutter: 12, md: 2, lg: 3, xl: 4, xxl: 4}}
          pagination={{
            pageSize: 24,
            showLessItems: true
          }}
          dataSource={this.props.dataSource.sort((a, b) => a.id - b.id)}
          renderItem={item => (
            <List.Item style={{ margin: '1rem auto', maxWidth: '1000px' }}>
              <Card style={{padding: '1rem', margin: '1rem'}}
                actions={[
                  <Button
                    onClick={() => this.showModal(item.id)}
                    icon="info-circle"
                    key={item.id}
                  >
                    Info
                  </Button>,
                  this.props.location.pathname === "/workouts/new/add_exercises" &&
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
                <Row type="flex" justify="space-around">
                  <Avatar shape="square" size={64} src={item.picture_one} />
                  <Avatar shape="square" size={64} src={item.picture_two} />
                </Row>
                <h3>{item.exercise_name}</h3>
                <>
                  Type: <strong>{item.type}</strong><br />
                  Target: <strong>{item.muscle}</strong> muscle<br />
                  Equipment: <strong>{item.equipment}</strong><br />
                </>
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
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.props.singleExercise ? (
            <div>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  this.state.visible && (
                    <video className="" controls autoplay>
                      <source
                        src={this.props.singleExercise[0].video}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  )
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

const StyledList = styled(List)`
  .ant-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .ant-list-item {
    height: 100%;
  }

  .ant-card-bordered {
    height: calc(100% - 1rem);
    margin-bottom: 16px;
    position: relative;
  }

  .ant-card-body {
    margin-bottom: 1rem;
  }

  .ant-card-actions {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
`

export default withRouter(DisplayExercise);