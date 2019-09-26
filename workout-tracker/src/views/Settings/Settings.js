import React from "react";
import { connect } from "react-redux";
import {
  fetchSettings,
  updateSettings
} from "../../store/actions/settingActions";
import styled from "styled-components";
import {
  Checkbox,
  Input,
  List,
  Button,
  Card,
  Statistic
} from "antd";

const StyledSettings = styled.div`

margin-bottom: 12rem;

  .user-data {
    margin: 1rem 2rem 0 2rem;
    padding: 1.5rem 0;
    text-align: center;
  }
  .ant-card-bordered {
    border: 1px solid #e8e8e8;
    max-width: 800px;
    margin: 0 auto;
  }
  .ant-input {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 60%;
    margin: 0.5rem auto;
    max-width: 750px;
  }
  .info-wrapper {
    margin: 0;
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

  .ant-statistic-title {
    margin-bottom: 4px;
    color: white;
    font-size: 14px;
  }

  .info li:nth-child(1) {
    background: rgba(107, 189, 250, 0.5);
  }

  .info li:nth-child(2) {
    background: rgba(107, 189, 250, 0.5);
  }

  .info li:nth-child(3) {
    background: rgba(107, 189, 250, 0.5);
  }

  .info li:nth-child(4) {
    background: rgba(107, 189, 250, 0.6);
  }

  .info li:nth-child(5) {
    background: rgba(107, 189, 250, 0.6);
  }

  .info li:nth-child(6) {
    background: rgba(107, 189, 250, 0.6);
  }

  .info li:nth-child(7) {
    background: rgba(107, 189, 250, 0.7);
  }

  .info li:nth-child(8) {
    background: rgba(107, 189, 250, 0.8);
  }

  .info li:nth-child(9) {
    background: rgba(107, 189, 250, 0.9);
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

  .ant-btn {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }

  .ant-spin-container p {
    margin: 0 auto;
  }
  /* .update-input {
    box-sizing: border-box;
    display: inline-block;
    

    @media (max-width: 350px) {
      width: 80%;
    }
  } */

  .text,
  .data,
  .icon {
    width: 15%;
  }

  .off {
    display: none;
  }
`;

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  "Email",
  "Username",
  "Full Name",
  // "Password",
  // "User Level",
  // "Email Notification",
  // "Push Notification"
];

const defaultCheckedList = [];

class Settings extends React.Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
    wantUpdate: false,
    fullname: this.props.settings ? this.props.settings[0].fullname : "",
    email: this.props.settings ? this.props.settings[0].email : "",
    username: this.props.settings ? this.props.settings[0].username : "",
    // password: this.props.settings ? this.props.settings[0].password : "",
    weight: this.props.settings ? this.props.settings[0].weight : "",
    user_level: this.props.settings ? this.props.settings[0].user_level : "",
    email_notification: this.props.settings
      ? this.props.settings[0].email_notification
      : "",
    push_notification: this.props.settings
      ? this.props.settings[0].push_notification
      : ""
  };

  componentDidMount = () => {
    this.props.fetchSettings();
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked
    });
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
      fullname: this.state.fullname ? this.state.fullname : this.props.settings[0].fullname,
      email: this.state.email ? this.state.email : this.props.settings[0].email,
      username: this.state.username
        ? this.state.username
        : this.props.settings[0].username,
      password: this.state.password,
      weight: Number(this.state.weight)
        ? Number(this.state.weight)
        : this.props.settings[0].weight
        ? this.props.settings[0].weight
        : 1,
      user_level: this.state.user_level ? this.state.user_level : "Beginner",
      email_notification:
        this.state.email_notification === "true" ? true : false,
      push_notification: this.state.push_notification === "true" ? true : false
    };

    this.props.updateSettings(updatedSettings);

    this.setState({
      wantUpdate: false
    });
  };

  render() {
    if (this.state.wantUpdate) {
      return (
        <StyledSettings>
          <div style={{ borderBottom: "1px solid #E9E9E9" }}>
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
            >
              Check all
            </Checkbox>
          </div>
          <br />
          <CheckboxGroup
            options={plainOptions}
            value={this.state.checkedList}
            onChange={this.onChange}
          />

          <div>
            {this.props.settings
              ? this.props.settings.map((setting, index) => {
                  return (
                    <div key={index}>
                      <div className="user-data">
                        <List>
                        <div
                            className={
                              this.state.checkedList.includes("Full Name")
                                ? null
                                : "off"
                            }
                          >
                            <div className="info-wrapper">
                              <p>
                                Full Name: <i className="fa fa-user"></i>
                              </p>
                            </div>
                            <Input
                              value={this.state.fullname}
                              onChange={this.handleChange}
                              placeholder={setting.fullname}
                              name="fullname"
                            />
                            </div>
                          <div
                            className={
                              this.state.checkedList.includes("Email")
                                ? null
                                : "off"
                            }
                          >
                            <div className="info-wrapper">
                              <p>
                                Email: <i className="fa fa-envelope"></i>
                              </p>
                            </div>
                            <Input
                              value={this.state.email}
                              onChange={this.handleChange}
                              placeholder={setting.email}
                              name="email"
                            />
                          </div>
                          <div
                            className={
                              this.state.checkedList.includes("Username")
                                ? null
                                : "off"
                            }
                          >
                            <div className="info-wrapper">
                              <p>
                                Username: <i className="fa fa-user"></i>
                              </p>
                            </div>
                            <Input
                              value={this.state.username}
                              onChange={this.handleChange}
                              placeholder={setting.username}
                              name="username"
                            />
                          </div>
                          {/* <div
                            className={
                              this.state.checkedList.includes("Password")
                                ? null
                                : "off"
                            }
                          >
                            <div className="info-wrapper">
                              <p>
                                Password: <i className="fa fa-key"></i>
                              </p>
                            </div>
                            <Input
                              value={this.state.password}
                              onChange={this.handleChange}
                              placeholder={setting.password}
                              name="Password"
                            />
                            </div> */}
                          {/* <div
                            className={
                              this.state.checkedList.includes("Weight")
                                ? null
                                : "off"
                            }
                          >
                            <div className="info-wrapper">
                              <p>
                                Weight: <i className="fa fa-balance-scale"></i>
                              </p>
                            </div>
                            <Input
                              min="1"
                              type="number"
                              className="update-input"
                              value={this.state.weight}
                              onChange={this.handleChange}
                              placeholder={setting.weight}
                              name="weight"
                            />
                          </div> */}
                          {/* <div
                            className={
                              this.state.checkedList.includes("User Level")
                                ? null
                                : "off"
                            }
                          >
                            <div className="info-wrapper">
                              <p>
                                User Level:{" "}
                                <i className="fa fa-graduation-cap"></i>
                              </p>
                            </div>

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
                          </div> */}
{/* 
                          <div
                            className={
                              this.state.checkedList.includes(
                                "Email Notification"
                              )
                                ? null
                                : "off"
                            }
                          >
                            <div className="info-wrapper">
                              <p>
                                Email Notifications:{" "}
                                <i className="fa fa-envelope"></i>
                              </p>
                            </div>

                            <select
                              className="update-input"
                              value={this.state.email_notification}
                              onChange={this.handleChange}
                              name="email_notification"
                            >
                              <option value="false">False</option>
                              <option value="true">True</option>
                            </select>
                          </div> */}
                          {/* <div
                            className={
                              this.state.checkedList.includes(
                                "Push Notification"
                              )
                                ? null
                                : "off"
                            }
                          >
                            <div className="info-wrapper">
                              <p>
                                Push Notifications:{" "}
                                <i className="fa fa-bell"></i>
                              </p>
                            </div>

                            <select
                              className="update-input"
                              value={this.state.push_notification}
                              onChange={this.handleChange}
                              name="push_notification"
                            >
                              <option value="false">False</option>
                              <option value="true">True</option>
                            </select>
                          </div> */}
                        </List>
                      </div>
                    </div>
                  );
                })
              : null}
            <Button
              className={this.state.checkedList[0] ? "button" : "off"}
              onClick={this.changeSettings}
              style={{ background: "#001529" }}
            >
              Update
            </Button>
          </div>
        </StyledSettings>
      );
    }
    return this.props.settings
      ? this.props.settings.map((setting, index) => {
          return (
            <StyledSettings key={index}>
              <div className="user-data">
                <List>
                  <Button
                    style={{ background: "#001529" }}
                    onClick={this.startUpdate}
                  >
                    Update Settings
                  </Button>
                  <div style={{ background: "white", padding: "1rem" }}>
                    <Card style={{ color: "white", background: "#001529" }}>
                      <span className="icon">
                        <i className="fa fa-user"></i>
                      </span>
                      <Statistic
                        title="Full Name"
                        value={
                          setting.fullname ? setting.fullname : "Not specified"
                        }
                        valueStyle={{ color: "white" }}
                      />
                    </Card>
                  </div>
                  <div style={{ background: "white", padding: "1rem" }}>
                    <Card style={{ color: "white", background: "#001529" }}>
                      <span className="icon">
                        <i className="fa fa-user"></i>
                      </span>
                      <Statistic
                        title="Username"
                        value={
                          setting.username ? setting.username : "Not specified"
                        }
                        valueStyle={{ color: "white" }}
                      />
                    </Card>
                  </div>
                  <div style={{ background: "white", padding: "1rem" }}>
                    <Card style={{ color: "white", background: "#001529" }}>
                      <span className="icon">
                        <i className="fa fa-envelope"></i>
                      </span>
                      <Statistic
                        title="Email"
                        titleStyle={{ color: "white" }}
                        value={setting.email ? setting.email : "Not specified"}
                        valueStyle={{ color: "white" }}
                      />
                    </Card>
                  </div>
                  {/* <div style={{ background: "white", padding: "1rem" }}>
                    <Card style={{ color: "white", background: "#001529" }}>
                      <span className="icon">
                        <i className="fa fa-key"></i>
                      </span>
                      <Statistic
                        title="Password"
                        value={
                          setting.password ? setting.password : "Not specified"
                        }
                        valueStyle={{ color: "white" }}
                      />
                    </Card>
                  </div> */}

                  {/* <div style={{ background: "white", padding: "1rem" }}>
                    <Card style={{ color: "white", background: "#001529" }}>
                      <span className="icon">
                        <i className="fa fa-balance-scale"></i>
                      </span>
                      <Statistic
                        title="Weight (KG)"
                        value={
                          setting.weight === 0
                            ? "Not specified"
                            : setting.weight
                        }
                        valueStyle={{ color: "white" }}
                      />
                    </Card>
                  </div> */}
                  {/* <div style={{ background: "white", padding: "1rem" }}>
                    <Card style={{ color: "white", background: "#001529" }}>
                      <span className="icon">
                        <i className="fa fa-graduation-cap"></i>
                      </span>
                      <Statistic
                        title="User Level"
                        value={
                          setting.user_level
                            ? setting.user_level
                            : "Not specified"
                        }
                        valueStyle={{ color: "white" }}
                      />
                    </Card>
                  </div> */}
                  {/* <div style={{ background: "white", padding: "1rem" }}>
                    <Card style={{ color: "white", background: "#001529" }}>
                      <span className="icon">
                        <i className="fa fa-envelope"></i>
                      </span>
                      <Statistic
                        title="Email Notification"
                        value={setting.email_notification.toString()}
                        valueStyle={{ color: "white" }}
                      />
                    </Card>
                  </div> */}
                  {/* <div style={{ background: "white", padding: "1rem" }}>
                    <Card style={{ color: "white", background: "#001529" }}>
                      <span className="icon">
                        <i className="fa fa-bell"></i>
                      </span>
                      <Statistic
                        title="Push Notification"
                        value={setting.push_notification.toString()}
                        valueStyle={{ color: "white" }}
                      />
                    </Card>
                  </div> */}
                </List>
              </div>
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
