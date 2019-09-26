import React from "react";
import { Pie, Chart } from "react-chartjs-2";
import { Card } from "antd";
import { connect } from "react-redux";
import { calculateWeeklyChart } from "../../../store/actions/chartActions";

const { Meta } = Card;

Chart.defaults.global.legend.display = false;

class WeeklyChart extends React.Component {
  componentDidMount = () => {
    this.props.calculateWeeklyChart(this.props.history, this.props.workouts);
  };

  render() {
    return (
      <Card
        hoverable
        className="chart chart-one"
        cover={
          <Card
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "#11B8CC",
              borderTopLeftRadius: ".6rem",
              borderTopRightRadius: ".6rem"
            }}
          >
            <Pie
              data={{
                labels: this.props.weeklyChart.labels,
                datasets: [
                  {
                    data: this.props.weeklyChart.data,
                    backgroundColor: this.props.weeklyChart.backgroundColor,
                    hoverBackgroundColor: this.props.weeklyChart
                      .hoverBackgroundColor
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
    weeklyChart: state.charts.weeklyChart
  };
};

export default connect(
  mapStateToProps,
  { calculateWeeklyChart }
)(WeeklyChart);
