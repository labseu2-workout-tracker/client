import React from "react";
import { Pie } from "react-chartjs-2";
import { Card } from "antd";
import { connect } from "react-redux";
import { calculateYearlyChart } from "../../../store/actions/chartActions";

const { Meta } = Card;

class YearlyChart extends React.Component {
  componentDidMount = () => {
    this.props.calculateYearlyChart(this.props.history, this.props.workouts);
  };
  
  render() {
    return (
      <Card
        hoverable
        className="chart chart-three"
        cover={
          <Card
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "#FC940C",
              borderTopLeftRadius: ".6rem",
              borderTopRightRadius: ".6rem",
            }}
          >
             <Pie
              data={{
                labels: this.props.yearlyChart.labels,
                datasets: [
                  {
                    data: this.props.yearlyChart.data,
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
          title="Yearly Result"
          description={
            <div>
              <i className="fa fa-fire"></i>{" "}
              {` You made ${this.props.yearlyChart.data.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )} ${
                this.props.yearlyChart.data.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                ) === 1
                  ? "workout"
                  : "workouts"
              } this year.`}{" "}
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
    color: state.charts.color,
    yearlyChart: state.charts.yearlyChart,
  };
};

export default connect(mapStateToProps, { calculateYearlyChart })(YearlyChart);
