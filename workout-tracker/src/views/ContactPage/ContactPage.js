import React from "react";
import styled from "styled-components";

const StyledContactPage = styled.div`
  input {
    text-align: center;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .messageInput {
    height: 8rem;
    width: 50%;
  }
`;

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
        <div className="left-side"></div>
        <div className="right-side">
          <div className="row">
            <p>Name:</p>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="John Doe"
            />
          </div>
          <div className="row">
            <p>Email</p>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="JohnDoe@gmail.com"
            />
          </div>
          <div className="row">
            <p>Phone:</p>
            <input
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder="(Optional)"
            />
          </div>
          <input
            className="messageInput"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Message"
          />
          <button onClick={this.sendMessage}>Send</button>
        </div>
      </StyledContactPage>
    );
  }
}

export default ContactPage;
