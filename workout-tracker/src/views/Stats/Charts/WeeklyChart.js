import React from "react";
import { Pie, Chart } from "react-chartjs-2";
import { Card } from "antd";
import { connect } from "react-redux";

const { Meta } = Card;

Chart.defaults.global.legend.display = false;

class WeeklyChart extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
      workoutsForDate: null
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Card
        hoverable
        className="chart chart-one"
        cover={
          <Card
            className="chart-card"
            style={{
              backgroundColor: "#11B8CC",
              borderRadius: ".6rem"
            }}
          >
            <div className="info">
              <i onClick={this.showModal} className="fa fa-info-circle" />
              <Modal
                maskStyle={{ opacity: ".2" }}
                title="Workout List"
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={[
                  <Button type="primary" onClick={this.handleOk}>
                    OK
                  </Button>
                ]}
              >
                <div className="legend">
                  {this.props.weeklyChart.labels.map((workout, index) => (
                    <p
                      key={index}
                      style={{ backgroundColor: `${this.props.color[index]}` }}
                    >
                      {workout}
                    </p>
                  ))}
                </div>
              </Modal>
            </div>
            <Pie
              data={{
                labels: this.props.weeklyChart.labels,
                datasets: [
                  {
                    data: this.props.weeklyChart.data,
                    backgroundColor: this.props.color,
                    hoverBackgroundColor: this.props.color
                  }
                ]
              }}
            />
          </Card>
        }
      >
        <Meta
          title="Weekly Result"
          description={
            <div>
              <i className="fa fa-fire"></i>{" "}
              {`You made ${this.props.weeklyChart.data.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )} ${
                this.props.weeklyChart.data.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                ) === 1
                  ? "workout"
                  : "workouts"
              } this week.`}{" "}
            </div>
          }
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history.history,
    workouts: state.workouts.workouts,
    weeklyChart: state.charts.weeklyChart,
    color: state.charts.color
  };
};

export default connect(mapStateToProps)(WeeklyChart);
