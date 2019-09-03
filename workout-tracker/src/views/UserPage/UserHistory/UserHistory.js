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
              const diffTime = Math.abs(date2.getTime() - date1.getTime());

              console.log(diffTime)
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
                    <p>
                      Duration : {item.session_start},{item.session_end}
                    </p>
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
