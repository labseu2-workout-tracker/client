import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';

const ProfileImage = ({username, image, weight, workouts}) => {
    return (
        <StyledImage>
            <div>
                <Avatar size={64} icon="user" />
                <p>{username}</p>
            </div>
            <section>
              <span>Weight: {weight} kgs.</span>
              <span>Workouts: {workouts}</span>
            </section>
        </StyledImage>
    )
}

const StyledImage = styled.div`
    margin-top: 1rem;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid white;
    div {
        text-align: center;
    }
    p {
        text-align: center;
        color: white;
        font-size: inherit;
        font-weight: 600;
        margin-bottom: 0;
        padding: 5px 0;
    }
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 1rem;
      background-color: inherit;
      color: white;
        span {
            height: auto;
            width: auto;
        }
    }
`

export default ProfileImage;