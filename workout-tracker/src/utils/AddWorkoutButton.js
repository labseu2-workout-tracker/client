import React from 'react';
import { Button, Tooltip } from 'antd'

const AddWorkoutButton = (props) => {
  return (
    <Tooltip Tooltip title = "Add new workout">
         <Button type = "primary" size = "large" block style = {myStyle} onClick={props.modal}>Create Custom Workout</Button>
    </Tooltip>
  )
}

const myStyle = {
  boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, .15)",
}

export default AddWorkoutButton