import React from "react";
import { connect } from "react-redux";
import {
  fetchSettings,
  updateSettings
} from "../../store/actions/settingActions";
import styled from "styled-components";

const StyledSettings = styled.div`
  input {
    text-align: center;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantUpdate: false,
      email: this.props.settings ? this.props.settings[0].email : null,
      username: this.props.settings ? this.props.settings[0].username : null,     
      password: this.props.settings ? this.props.settings[0].password : null,
      weight: this.props.settings ? this.props.settings[0].weight : null,
      height: this.props.settings ? this.props.settings[0].height : null,
      gender: this.props.settings ? this.props.settings[0].gender : null,
      user_level: this.props.settings ? this.props.settings[0].user_level : null,
      email_notification: this.props.settings ? this.props.settings[0].email_notification : null,
      push_notification: this.props.settings ? this.props.settings[0].push_notification : null,
    };
  }

  componentDidMount = () => {
    this.props.fetchSettings();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changeSettings = () => {
    const updatedSettings = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      weight: this.state.weight,
      height: this.state.height,
      gender: this.state.gender,
      user_level: this.state.user_level,
      email_notification: this.state.email_notification,
      push_notification: this.state.push_notification,
    };

  this.props.updateSettings(updatedSettings);
  };

  render() {
      if(this.state.wantUpdate) {
      <StyledSettings>
        { this.props.settings ? (this.props.settings
  .map((setting, index) => {
          return (
            <div key={index}>
              <div className="row">
                <p>Email: </p>
                <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder={setting.email}
                  name="email"
                />
              </div>
                <div className="row">
                <p>Username: </p>
                <input
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder={setting.username}
                  name="username"
                />
                </div>
              <div className="row">
                <p>Password: </p>
                <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder={setting.password}
                  name="password"
                  type="password"
                />
              </div>
              <div className="row">
                <p>Weight: </p>
                <input
                  value={this.state.weight}
                  onChange={this.handleChange}
                  placeholder={setting.body_weight}
                  name="weight"
                />
              </div>
              <div className="row">
                <p>Height: </p>
                <input
                  value={this.state.height}
                  onChange={this.handleChange}
                  placeholder={setting.body_height}
                  name="height"
                />
              </div>
              <div className="row">
                <p>Gender: </p>
                <input
                  value={this.state.gender}
                  onChange={this.handleChange}
                  placeholder={setting.body_gender}
                  name="gender"
                />
              </div>
              <div className="row">
                <p>user_level</p>
                <input
                  value={this.state.user_level}
                  onChange={this.handleChange}
                  placeholder={setting.user_user_level}
                  name="user_level"
                />
              </div>
              <div className="row">
                <p>Email Notification: </p>
                <input
                  value={this.state.email_notification}
                  onChange={this.handleChange}
                  placeholder={setting.email_notification.toString()}
                  name="email_notification"
                />
              </div>
              <div className="row">
                <p>Push Notification: </p>
                <input
                  value={this.state.push_notification}
                  onChange={this.handleChange}
                  placeholder={setting.push_notification.toString()}
                  name="push_notification"
                />
              </div>
            </div>
          );
        })
        ) : null
        }
        <button onClick={this.changeSettings}>Change</button>
      </StyledSettings>
      }
    return (
      this.props.settings ? (this.props.settings.map((setting, index) => {
        return <div key={index}>
      email
      username
      password
      weight
      height
      gender
      user_level
      email_notification 
      push_notification 
        </div>
      })) : null
    );
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings.settings,
  };
};

export default connect(
  mapStateToProps,
  { fetchSettings, updateSettings }
)(Settings);
