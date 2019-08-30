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
      email: this.props.settings[0].email,
      password: this.props.settings[0].password,
      weight: this.props.settings[0].weight,
      height: this.props.settings[0].height,
      gender: this.props.settings[0].gender,
      difficulty: this.props.settings[0].difficulty,
      email_notification: this.props.settings[0].email_notification,
      push_notification: this.props.settings[0].push_notification,
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
      password: this.state.password,
      weight: this.state.weight,
      height: this.state.height,
      gender: this.state.gender,
      difficulty: this.state.difficulty,
      email_notification: this.state.email_notification,
      push_notification: this.state.push_notification,
    };

  this.props.updateSettings(updatedSettings);
  };

  render() {
    return (
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
                <p>Difficulty</p>
                <input
                  value={this.state.difficulty}
                  onChange={this.handleChange}
                  placeholder={setting.user_difficulty}
                  name="difficulty"
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
    );
  }
}

const mapStateToProps = state => {
  return {
    // settings: state.settings.settings,
  };
};

export default connect(
  mapStateToProps,
  { fetchSettings, updateSettings }
)(Settings);
