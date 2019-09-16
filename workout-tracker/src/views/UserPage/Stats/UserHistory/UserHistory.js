import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Card, Pagination } from "antd";

class SessionHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 2
    };
  }

  handlePagination = value => {
    if (value <= 1) {
      this.setState({
        minValue: 0,
        maxValue: 2
      });
    } else {
      this.setState({
        minValue: (value * 2) - 2,
        maxValue: value * 2
      });
    }
  };

  render() {
    let history = this.props.history;
    let workouts = this.props.workouts;

    return (
      <Card className="history" title="WorkoutHistory">
        <StyledUserHistory>
          {history ? (
            <div>
              <div className="ordered-list">
                {history
                  .slice(this.state.minValue, this.state.maxValue)
                  .map(session => {
                    const date1 = session.session_start;
                    const date2 = session.session_end;

                    // Extract starting point
                    const startingPoint =
                      date1 === null ? "00:00:00" : date1.slice(11, 17);
                    const endPoint =
                      date2 === null ? "00:00:00" : date2.slice(11, 17);

                    function pluralize(hours) {
                      return hours <= 1 ? "hour" : "hours";
                    }

                    function diff(start, end) {
                      start = start.split(":");
                      end = end.split(":");
                      var startDate = new Date(0, 0, 0, start[0], start[1], 0);
                      var endDate = new Date(0, 0, 0, end[0], end[1], 0);
                      var diff = endDate.getTime() - startDate.getTime();
                      var hours = Math.floor(diff / 1000 / 60 / 60);
                      diff -= hours * 1000 * 60 * 60;
                      var minutes = Math.floor(diff / 1000 / 60);

                      // If using time pickers with 24 hours format, add the below line get exact hours
                      if (hours <= 0) {
                        return `${minutes} minutes`;
                      }
                      return `${hours} ${pluralize(hours)} ${minutes} minutes`;
                    }

                    return (
                      <Card
                        key={session.id}
                        className="session-card"
                        title={
                          workouts === undefined ? (
                            <h2>Loadin workouts...</h2>
                          ) : (
                            workouts.map(item => {
                              if (session.workout_id === item.id) {
                                return item.workout_name;
                              }
                              return null;
                            })
                          )
                        }
                      >
                        <ol>
                          <li>
                            <p>
                              <strong>Date of Session: </strong>
                              {session.session_start.slice(0, 10)}
                            </p>
                            <p>
                              <strong>Workout Name : </strong>
                            </p>
                            <p>
                              <strong>Duration : </strong>
                              {diff(startingPoint, endPoint)}
                            </p>
                          </li>
                        </ol>
                      </Card>
                    );
                  })}
              </div>
              <div className="pagination">
                <Pagination
                  defaultCurrent={1}
                  defaultPageSize={6}
                  onChange={this.handlePagination}
                  total={this.props.history.length}
                />
              </div>
            </div>
          ) : (
            <p>You have no workout history at the moment</p>
          )}
        </StyledUserHistory>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history.history,
    workouts: state.workouts.workouts
  };
};

export default connect(mapStateToProps)(SessionHistory);

const StyledUserHistory = styled.div`
  width: 100%;

  .session-card {
    width: 30%;
    margin: 1rem;
    border-radius: 0.6rem;

    @media (max-width: 1150px) {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .ordered-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  ol {
    padding: 10px;
    width: 100%;
    margin: 0;
  }

  h2 {
    font-size: 1.65rem;
    text-align: center;
  }
  li {
    list-style-type: none;
    position: relative;
    font-size: 1.5rem;
    color: black;
  }
  h4 {
    position: relative;
  }
  h4:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25px;
    height: 2px;
    background: black;
  }
  p {
    font-size: 0.9rem;
    padding: 10px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
