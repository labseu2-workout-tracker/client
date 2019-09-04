import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import { fetchSettings } from "../../store/actions/settingActions.js"
// We must wait for new merging where I have the new actions



class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: this.props.settings ? this.props.settings[0].email : "",
      phone: "",
      message: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  sendMessage = () => {
    if (this.state.email && this.state.message.length > 10) {
      // We must add logic in the backend and here
      // for sending the message to our project email
      // this.props.sendMessage()...
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    } else {
      alert("Email and message are required.");
    }
  };

  render() {
    return (
      <StyledContactPage>
        <h2>Contact Us</h2>
        <p className="question">
          Have a question about a product, feedback, or business inquiry for
          Workout Tracker?
        </p>

        <div className="row">
          <div className="column column-start">
            <p>First Name</p>
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="John"
            />
          </div>
          <div className="column column-end">
            <p>Last Name</p>
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="row">
          <div className="column column-start">
            <p>Email *</p>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="JohnDoe@gmail.com"
            />
          </div>
          <div className="column column-end">
            <p>Phone</p>
            <input
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder="ex: +49 1729149128"
            />
          </div>
        </div>
        <div className="column">
          <p>Message *</p>
          <input
            className="messageInput"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Message"
          />
        </div>
        <button onClick={this.sendMessage}>Send</button>
      </StyledContactPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    // settings: state.settings.settings,
    // We must wait for new merging where I have the new reducer
  };
};

export default connect(
  mapStateToProps
  // { fetchSettings }
)(ContactPage);
