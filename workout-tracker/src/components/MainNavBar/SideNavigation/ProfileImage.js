import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';

import { fetchSettings } from "../../../store/actions/settingActions"

class ProfileImage extends React.Component {
    componentDidMount = () => {
        this.props.fetchSettings()
    }
    render() {
        return (
            <StyledImage>
                <div>
                    <Avatar size={64} icon="user" />
                    <p>{this.props.settings[0].username}</p>
                </div>
                <section>
                    <span>Weight: {this.props.settings[0].weigth} kgs.</span>
                    <span>Workouts: {'10'}</span>
                </section>
            </StyledImage>
        )
    }
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
const mapStateToProps = state => {
    return {
      settings: state.settings.settings
    };
  };

export default connect(mapStateToProps, { fetchSettings })(ProfileImage);