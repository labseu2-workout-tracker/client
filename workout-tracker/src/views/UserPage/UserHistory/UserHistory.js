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
    console.log(session)
    return (
      <div>
        <h1>This is the session history</h1>
        <h2>Here you can check out the work you have done!</h2>
        <List>
          {session === undefined ? (<p>Data is loading...</p>) : 

          (
            session.map(item => 

            ( <ol key={item.id}>
                <li>
                  <h4>Session ID: {item.id}</h4>
                  <p>
                    <strong>Session Start:</strong> {item.session_start}
                  </p>
                  <p>
                    <strong>Workout Name:</strong> {item.workout_id}
                  </p>
                  <p>
                    <strong>Description:</strong> {item.workout_description}
                  </p>
                  <p>
                    <strong>Duration: --</strong>{" "}
                  </p>
                </li>
              </ol>
            ))
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
  h3 {
    font-size: 1.65rem;
    margin: 15px 0;
    text-align: center;
  }
  li {
    list-style-type: none;
    position: relative;
    font-size: 1.5rem;
    padding: 15px;
    margin-bottom: 15px;
    color: black;
    border: 1px solid gray;
  }
  h4 {
    position: relative;
    padding-bottom: 10px;
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
    line-height: 1.4rem;
    margin-top: 15px;
  }
`;
