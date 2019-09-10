import React from 'react';
import styled from 'styled-components';

const ProfileImage = ({username, image, weight, workouts}) => {
    return (
        <StyledImage>
            <div>
                <img src={image} alt="" />
            </div>
            <p>{username}</p>
            <section>
              <div>Weight: {weight} kgs.</div>
              <div>Workouts: {workouts}</div>
            </section>
        </StyledImage>
    )
}

const StyledImage = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #696969;

    div {
        border-radius: 50%;
        border: 3px solid white;
        width: 80px;
        height: 80px;

        img {
            border-radius: inherit;
            width: inherit;
            height: inherit;
        }
    }

    p {
        text-align: center;
        color: #2d2d2d;
        font-size: inherit;
        font-weight: 600;
        margin-bottom: 0;
        padding: 10px 30px;
    }
    section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 1.5rem;


      div {
        height: auto;
        width: auto;
      }
    }
`

export default ProfileImage;