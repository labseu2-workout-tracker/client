import React from 'react';
import styled from 'styled-components'

class SessionHistory extends React.Component {
    constructor(props){
        super(props)
    }
    render(){

        const user = localStorage.getItem("userId")
        return <div>
        <h1>This is the session history</h1>
        <h2>Here you can check out the work you have done!</h2>
        <List>
            <ol>
                <li>
                    <h4>Session ID</h4>
                    <p>Workout Name:</p>
                    <p>Exercises:</p>
                    <p>Sets:</p>
                    <p>Duration:</p>
                </li>
                <li>
                    <h4>Session ID</h4>
                    <p>Workout Name:</p>
                    <p>Exercises:</p>
                    <p>Sets:</p>
                    <p>Duration:</p>
                </li>
                <li>
                    <h4>Session ID</h4>
                    <p>Workout Name:</p>
                    <p>Exercises:</p>
                    <p>Sets:</p>
                    <p>Duration:</p>
                </li>
            </ol>
        </List>
        </div>
    }
}

export default SessionHistory

const List = styled.div`

width:500px;
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
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 25px;
  height: 2px;
  background: black;
}

p {
  font-size: .9rem; 
  line-height: 1.4rem;
  margin-top: 15px;
}

`