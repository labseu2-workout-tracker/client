import React from 'react';
import './Add.css'
import { Button } from 'antd'
import styled from "styled-components";

const AddWorkoutButton = () => {
  return (
   <Button type = "primary" size = "large" shape="circle" icon="plus" style = {myStyle}></Button>
  )
}

const myStyle = {
  position: "fixed",
  right: "2rem",
  bottom: "2rem",
  width: "60px",
  height: "60px",
  boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, .15)",
}

export default AddWorkoutButton