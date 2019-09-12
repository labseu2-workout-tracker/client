import React from 'react';
import { Button, Tooltip } from 'antd'

const AddWorkoutButton = (props) => {
  return (
    <Tooltip Tooltip title = "Add new workout">
         <Button type = "primary" size = "large" shape="circle" icon="plus" style = {myStyle} onClick={props.modal}></Button>
    </Tooltip>
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