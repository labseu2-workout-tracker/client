import React from "react";
import styled from "styled-components";
import axios from "axios";
import {fetchWorkoutsHistory} from '../../../store/actions/historyActions';
import { connect } from "react-redux";



var bearer = "Bearer " + localStorage.token;

class SessionHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {},
      workouts: undefined,
      err: {}
    };
  }

  componentDidMount() {
    this.props.fetchWorkoutsHistory()

      axios
        .get(`${process.env.REACT_APP_BASE_URL}/workouts`, {
          headers: { Authorization: bearer }
        })
        .then(res => {
          return this.setState({ workouts: res.data });
        })
        .catch(err => {
          this.setState({ err: { err } });
        });
       
    
  }

  render() {
    let session = this.props.history;
    let workouts = this.state.workouts;
    
    return (
      <div>
        <h2>Here you can check out the work you have done!</h2>
        <List>
          {session  ?  (
            session.map(session => {
              const date1 = session.session_start;
              const date2 = session.session_end;

              // Extract starting point
              const startingPoint = date1 === null ? '00:00:00' : date1.slice(11, 17)
              const endPoint = date2 === null ? '00:00:00' : date2.slice(11, 17)

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
                if (hours < 0) hours = hours + 24;

                return (
                  (hours <= 9 ? "0" : "") +
                  hours +
                  ":" +
                  (minutes <= 9 ? "0" : "") +
                  minutes
                );
              }

              return (
                <ol key={session.id}>
                  <li>
                    <h4>Session Number : {session.id}</h4>
                    <p>
                      <strong>Session Start : </strong>
                      {session.session_start.slice(0, 10)}
                    </p>
                    <p>
                      <strong>Workout Name : </strong>
                      {workouts === undefined
                        ? <h2>Loadin workouts...</h2>
                        : workouts.map(item => {
                            if (session.workout_id === item.id) {
                              return item.workout_name;
                            }
                            return null
                          })}
                    </p>
                    <p>
                      <strong>Duration : </strong>
                      {diff(startingPoint, endPoint) === null ? 'No sessions' : diff(startingPoint, endPoint)} minutes.
                    </p>
                  </li>
                </ol>
              );
            })
          ) : (
            <p>Your history is empty for now!</p>
          )}
        </List>
      </div>
    );
  }
}


const mapStateToProps = state => {
 return {
   history: state.history.history
  }
};

export default connect (
  mapStateToProps, {
    fetchWorkoutsHistory
  }
)(SessionHistory);














const List = styled.div`
  width: 500px;
  margin: 0 auto;

  ol {
    padding: 10px;
  }

  h3 {
    font-size: 1.65rem;
    text-align: center;
  }
  li {
    list-style-type: none;
    position: relative;
    font-size: 1.5rem;
    color: black;
    border: 1px solid gray;
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
`;
