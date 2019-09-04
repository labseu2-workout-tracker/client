import React from "react";
import { connect } from "react-redux";
import {
  fetchSettings,
  updateSettings
} from "../../store/actions/settingActions";
import styled from "styled-components";

const StyledSettings = styled.div`
  .user-data {
    margin: 1rem 2rem 0 2rem;
    padding: 1.5rem 0;
   
    text-align: center;
  }

  .info {
    position: relative;
    box-sizing: border-box;
    margin: 0 auto 0;
    width: 80%;
    padding: 10px;
    color: #fff;
    border-radius: 5px;
  }

  .info li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    margin: 5px 0;
    padding: 10px 20px;
    transition: 0.5s;

    @media (max-width: 700px) {
      flex-direction: column; 
      height: 8rem;   
    }
  }

  .info li:nth-child(1) {
    background: rgba(107,189,250, .5);
  }

  .info li:nth-child(2) {
    background: rgba(107,189,250, .5);
  }

  .info li:nth-child(3) {
    background: rgba(107,189,250, .5);
  }

  .info li:nth-child(4) {
    background: rgba(107,189,250, .6);
  }

  .info li:nth-child(5) {
    background: rgba(107,189,250, .6);
  }

  .info li:nth-child(6) {
    background: rgba(107,189,250, .6);
  }

  .info li:nth-child(7) {
    background: rgba(107,189,250, .7);
  }

  .info li:nth-child(8) {
    background: rgba(107,189,250, .8);
  }

  .info li:nth-child(9) {
    background: rgba(107,189,250, .9);
  }

  .info li span:nth-child(1) {
    width: 300px;
  }

  .info li span:nth-child(2) {
    width: 200px;
  }

  .info li span:nth-child(3) {
    width: 170px;
    text-align: center;
  }

  .info li:hover {
    background: #6bbdfa;
  }

  .update-button {
    border-color: transparent;
    width: 7rem;
    height: 1.8rem;
    font-size: 0.7rem;
    line-height: 1.6rem;
    border-radius: 4px;
    border: 1px solid #f0f4f6;
    color: #212432;
    cursor: pointer;
    letter-spacing: 0.5px;
    text-align: center;
    background: linear-gradient(46deg, #2eb7ce, #4296cb);
  }

  .update-input {
    width: 20rem;
    box-sizing: border-box;
    display: inline-block;
    padding: 10px 25px ;

    @media (max-width: 350px) {
      width: 80%;
    }
  }

  .text,
  .data,
  .icon {
    width: 15%;
  }
`;

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantUpdate: false,
      email: this.props.settings ? this.props.settings[0].email : "",
      username: this.props.settings ? this.props.settings[0].username : "",
      // password: this.props.settings ? this.props.settings[0].password : "",
      weight: this.props.settings ? this.props.settings[0].weight : "",
      height: this.props.settings ? this.props.settings[0].height : "",
      gender: this.props.settings ? this.props.settings[0].gender : "",
      user_level: this.props.settings ? this.props.settings[0].user_level : "",
      email_notification: this.props.settings
        ? this.props.settings[0].email_notification
        : "",
      push_notification: this.props.settings
        ? this.props.settings[0].push_notification
        : ""
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

  startUpdate = () => {
    this.setState({
      wantUpdate: true
    });
  };

  changeSettings = () => {
    
    const updatedSettings = {
      email: this.state.email ? this.state.email : this.props.settings[0].email,
      username: this.state.username ? this.state.username : this.props.settings[0].username,
      // password: this.state.password,
      weight: this.state.weight ? this.state.height : 1,
      height: this.state.height ? this.state.height : 1,
      gender: this.state.gender ? this.state.gender : null,
      // user_level: this.state.user_level ? this.state.user_level : null,
      email_notification:
        this.state.email_notification === "true" ? true : false,
      push_notification: this.state.push_notification === "true" ? true : false
    };

    debugger

    this.props.updateSettings(updatedSettings);

    this.setState({
      wantUpdate: false
    });
  };

  render() {
    if (this.state.wantUpdate) {
      return (
        <StyledSettings>
          {this.props.settings
            ? this.props.settings.map((setting, index) => {
                return (
                  <div key={index}>
                    <div className="user-data">
                      <ul className="info">
                        <li>
                          <span className="text">Email:</span>
                          <span className="data">
                            <input
                              className="update-input"
                              value={this.state.email}
                              onChange={this.handleChange}
                              placeholder={setting.email}
                              name="email"
                            />
                          </span>
                          <span className="icon">
                            <i className="fa fa-envelope"></i>
                          </span>
                        </li>
                        <li>
                          <span className="text">Username:</span>
                          <span className="data">
                            <input
                              className="update-input"
                              value={this.state.username}
                              onChange={this.handleChange}
                              placeholder={setting.username}
                              name="username"
                            />
                          </span>
                          <span className="icon">
                            <i className="fa fa-user"></i>
                          </span>
                        </li>
                        {/* <li>
                          <span className="text">Password:</span>
                          <span className="data">
                            <input
                              className="update-input"
                              value={this.state.password}
                              onChange={this.handleChange}
                              placeholder={setting.password}
                              name="password"
                              type="password"
                            />
                          </span>
                          <span className="icon">
                            <i className="fa fa-key"></i>
                          </span>
                        </li> */}
                        <li>
                          <span className="text">Weight:</span>
                          <span className="data">
                            <input
                            min="1"
                            type="number"
                              className="update-input"
                              value={this.state.weight}
                              onChange={this.handleChange}
                              placeholder={setting.weight}
                              name="weight"
                            />
                          </span>
                          <span className="icon">
                            <i className="fa fa-balance-scale"></i>
                          </span>
                        </li>
                        <li>
                          <span className="text">Height:</span>
                          <span className="data">
                            <input
                            min="1"
                            type="number"
                              className="update-input"
                              value={this.state.height}
                              onChange={this.handleChange}
                              placeholder={setting.height}
                              name="height"
                            />
                          </span>
                          <span className="icon">
                            <i className="fa fa-arrow-circle-up"></i>
                          </span>
                        </li>

                        <li>
                          <span className="text">Level:</span>
                          <span className="data">
                            <select
                              className="update-input"
                              value={this.state.user_level}
                              onChange={this.handleChange}
                              name="user_level"
                            >
                              <option value="Beginner">Beginner</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Expert">Expert</option>
                            </select>
                          </span>
                          <span className="icon">
                            <i className="fa fa-graduation-cap"></i>
                          </span>
                        </li>
                        <li>
                          <span className="text">Gender:</span>
                          <span className="data">
                            <select
                              name="gender"
                              className="update-input"
                              value={this.state.gender}
                              onChange={this.handleChange}
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </span>
                          <span className="icon">
                            <i className="fa fa-venus-mars"></i>
                          </span>
                        </li>

                        <li>
                          <span className="text">Email Notification:</span>
                          <span className="data">
                            <select
                              className="update-input"
                              value={this.state.email_notification}
                              onChange={this.handleChange}
                              name="email_notification"
                            >
                              <option value="male">False</option>
                              <option value="female">True</option>
                            </select>
                          </span>
                          <span className="icon">
                            <i className="fa fa-envelope"></i>
                          </span>
                        </li>
                        <li>
                          <span className="text">Push Notification:</span>
                          <span className="data">
                            <select
                              className="update-input"
                              value={this.state.push_notification}
                              onChange={this.handleChange}
                              name="push_notification"
                            >
                              <option value="male">False</option>
                              <option value="female">True</option>
                            </select>
                          </span>
                          <span className="icon">
                            <i className="fa fa-bell"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })
            : null}
          <button className="button" onClick={this.changeSettings}>
            Change
          </button>
        </StyledSettings>
      );
    }
    return this.props.settings
      ? this.props.settings.map((setting, index) => {
          return (
            <StyledSettings key={index}>
              <div className="user-data">
                <ul className="info">
                  <li>
                    <span className="text">Email:</span>
                    <span className="data">
                      <p>{setting.email ? setting.email : "Not specified"}</p>
                    </span>
                    <span className="icon">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </li>
                  <li>
                    <span className="text">Username:</span>
                    <span className="data">
                      <p>
                        {setting.username ? setting.username : "Not specified"}
                      </p>
                    </span>
                    <span className="icon">
                      <i className="fa fa-user"></i>
                    </span>
                  </li>
                  <li>
                    <span className="text">Weight:</span>
                    <span className="data">
                      <p>
                        {setting.weight === 0
                          ? "Not specified"
                          : setting.weight}
                      </p>
                    </span>
                    <span className="icon">
                      <i className="fa fa-balance-scale"></i>
                    </span>
                  </li>
                  <li>
                    <span className="text">Height:</span>
                    <span className="data">
                      <p>
                        {setting.height === 0
                          ? "Not specified"
                          : setting.height}
                      </p>
                    </span>
                    <span className="icon">
                      <i className="fa fa-arrow-circle-up"></i>
                    </span>
                  </li>
                  <li>
                    <span className="text">Gender:</span>
                    <span className="data">
                      <p>{setting.gender ? setting.gender : "Not specified"}</p>
                    </span>
                    <span className="icon">
                      <i className="fa fa-venus-mars"></i>
                    </span>
                  </li>
                  <li>
                    <span className="text">Level:</span>
                    <span className="data">
                      <p>
                        {setting.user_level
                          ? setting.user_level
                          : "Not specified"}
                      </p>
                    </span>
                    <span className="icon">
                      <i className="fa fa-graduation-cap"></i>
                    </span>
                  </li>
                  <li>
                    <span className="text">Email Notification:</span>
                    <span className="data">
                      <p>{setting.email_notification.toString()}</p>
                    </span>
                    <span className="icon">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </li>
                  <li>
                    <span className="text">Push Notification:</span>
                    <span className="data">
                      <p>{setting.push_notification.toString()}</p>
                    </span>
                    <span className="icon">
                      <i className="fa fa-bell"></i>
                    </span>
                  </li>
                </ul>
              </div>
              <button className="button" onClick={this.startUpdate}>
                Update
              </button>
            </StyledSettings>
          );
        })
      : null;
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings.settings
  };
};

export default connect(
  mapStateToProps,
  { fetchSettings, updateSettings }
)(Settings);
