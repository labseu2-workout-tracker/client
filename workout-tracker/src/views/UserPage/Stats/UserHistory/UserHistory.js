import React from "react";
import styled from "styled-components";
import { Empty } from "antd";
import { connect } from "react-redux";
import { Card, Pagination } from "antd";

class SessionHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 6
    };
  }

  handlePagination = value => {
    if (value <= 1) {
      this.setState({
        minValue: 0,
        maxValue: 6
      });
    } else {
      this.setState({
        minValue: value * 6 - 6,
        maxValue: value * 6
      });
    }
  };

  render() {
    let history = this.props.history;
    let workouts = this.props.workouts;

    return (
      <StyledUserHistory>
        <Card className="history" title="Workout History">
          {history.length ? (
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
                            <Loader></Loader>
                          ) : (
                            session.session_start.slice(0, 10)
                          )
                        }
                      >
                        <ol>
                          <li>
                            {workouts.map(item => {
                              if (session.workout_id === item.id) {
                                return (
                                  <p key={session.id}>
                                    <strong>Workout: </strong>
                                    {item.workout_name}
                                  </p>
                                );
                              }
                              return null;
                            })}
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
            <p>
              <Empty description={"No Workouts"} />
            </p>
          )}
        </Card>
      </StyledUserHistory>
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

const Loader = styled.div`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledUserHistory = styled.div`
  width: 100%;

  .history {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .ant-card-body {
    padding: 0;
  }
  .session-card {
    width: 30%;
    margin: 1rem;
    border-radius: 0.6rem;

    @media (max-width: 1150px) {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 750px) {
      width: 85%;
    }

    @media (max-width: 500px) {
      width: 100%;
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
    padding: 0.5rem;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
