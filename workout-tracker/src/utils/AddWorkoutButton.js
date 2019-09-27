import React from 'react';
import { Button, Tooltip } from 'antd'

const AddWorkoutButton = (props) => {
  return (
    <Tooltip Tooltip title = "Add new workout">
         <Button type = "primary" size = "large" style = {myStyle} onClick={props.modal}>Create Custom Workout</Button>
    </Tooltip>
  )
}

const myStyle = {
  position: 'fixed',
  top: '2rem',
  right: '2rem',
  zIndex: '3',
  boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, .15)",
  fontWeight: 'bold',
}

export default AddWorkoutButton