import React from "react";
import styled from "styled-components";

const StyledContactPage = styled.div``;

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
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
    // We must add logic in the backend and here
    // for sending the message to our project email
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  render() {
    return (
      <StyledContactPage>
        <h2>Contact Us</h2>
        <div>
          <p>Name:</p>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="John Doe"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="JohnDoe@gmail.com"
          />
        </div>
        <div>
          <p>Phone:</p>
          <input
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="(Optional)"
          />
        </div>
        <input
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="Message"
        />
        <button onClick={this.sendMessage}>Send</button>
      </StyledContactPage>
    );
  }
}

export default ContactPage;
