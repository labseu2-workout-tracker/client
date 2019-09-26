import React from "react";
import { connect } from "react-redux";
import { calculateMonthlyChart } from "../../../store/actions/chartActions";
import { Pie } from "react-chartjs-2";
import { Card } from "antd";

const { Meta } = Card;

class MonthlyChart extends React.Component {

  componentDidMount = () => {
    this.props.calculateMonthlyChart(this.props.history, this.props.workouts);
  };

  render() {
    return (
      <Card
        hoverable
        className="chart chart-two"
        cover={
          <Card
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "#E94340",
              borderTopLeftRadius: ".6rem",
              borderTopRightRadius: ".6rem"
            }}
          >
            <Pie
              data={{
                labels: this.props.monthlyChart.labels,
                datasets: [
                  {
                    data: this.props.monthlyChart.data,
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
          title="Monthly Result"
          description={
            <div>
              <i className="fa fa-fire"></i>{" "}
              {`You made ${this.props.monthlyChart.data.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )} ${
                this.props.monthlyChart.data.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                ) === 1
                  ? "workout"
                  : "workouts"
              }  this Month.`}{" "}
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
    monthlyChart: state.charts.monthlyChart,
    color: state.charts.color
  };
};

export default connect(
  mapStateToProps,
  { calculateMonthlyChart }
)(MonthlyChart);
