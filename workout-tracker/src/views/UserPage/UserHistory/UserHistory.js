import React from "react";
import styled from "styled-components";
import axios from "axios";

var bearer = "Bearer " + localStorage.token;

class SessionHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {}
    };
  }

  componentDidMount() {
    if (localStorage.token) {
      axios
        .get("http://localhost:5000/workouts/history/", {
          headers: { Authorization: bearer }
        })
        .then(res => this.setState({ session: res.data }))
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    let session = this.state.session.workoutHistory;

    console.log(session);
    return (
      <div>
        <h1>This is the session history</h1>
        <h2>Here you can check out the work you have done!</h2>
        <List>
          {session === undefined ? (
            <p>Data is loading...</p>
          ) : (
            session.map(item => {
              const date1 = item.session_start;
              const date2 = item.session_end;

              // Extract starting point
              const startingPoint = date1.slice(11, 17);
              const endPoint = date2.slice(11, 17);

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
                <ol key={item.id}>
                  <li>
                    <h4>Session ID: {item.id}</h4>
                    <p>
                      <strong>Session Start:</strong> {item.session_start}
                    </p>
                    <p>
                      <strong>Workout Name:</strong> {item.workout_id}
                    </p>
                    <p>Duration : {diff(startingPoint,endPoint)} minutes.</p>
                  </li>
                </ol>
              );
            })
          )}
        </List>
      </div>
    );
  }
}

export default SessionHistory;

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
