import React from 'react';
// import ExerciseRating from "./ExerciseRating";
import './SingleExcercise.css';
import { Layout } from 'antd';

const { Content } = Layout;

const SingleExercise = (props) => {
  return (
    <>
      <Content style={{ margin: '24px 16px 0' }}> Content
      {/* <div onClick={props.closeExercise}>
                <i className="fa fa-window-close x" />
              </div> */}
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <div className="">
            <div className="">
              <div onClick={props.closeExercise}>
                <i className="fa fa-window-close x" />
              </div>
              <video className="" controls>
                <source src={props.exercise.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1>{props.exercise.exercise_name}</h1>

              <div className="description">
                <i className="fas fa-running"></i> {props.exercise.description}
              </div>
              <div className="div-para">
                <p> Level: {props.exercise.difficulty}</p>
                <p> Type: {props.exercise.type}</p>
                <p>Target: {props.exercise.muscle}</p>
                <p> Equipment: {props.exercise.equipment}</p>
              </div>
              <div className="bottom-div">
                <img className="last-img"
                  src={props.exercise.picture_one}
                  alt="explanation of exercise one"
                />
                <img className="last-img"
                  src={props.exercise.picture_two}
                  alt="explanation of exercise two"
                />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default SingleExercise;
