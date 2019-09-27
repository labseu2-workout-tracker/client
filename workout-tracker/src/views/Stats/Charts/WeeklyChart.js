import React from "react";
import { Pie, Chart } from "react-chartjs-2";
import { Card } from "antd";
import { connect } from "react-redux";

const { Meta } = Card;

Chart.defaults.global.legend.display = false;

class WeeklyChart extends React.Component {
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
