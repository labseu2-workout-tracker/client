import React from "react";
import styled from "styled-components";

const StyledContactPage = styled.div`
display: flex;
flex-direction: column;
text-align: left;


p {
  color: #828698;
}
  
  .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .row {
    display: flex;
  }

  input {
    text-align: center;
  }


  .messageInput {
    height: 8rem;
    width: 50%;
  }

  button {
    background-color: #6bbdfa;
  }
`;

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
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
        <h6>Have a question about a product, feedback, or business
          inquiry for Workout Tracker?
        </h6>
        
         
    
        <div className="row">
          <div className="column">
            <p>First Name</p>
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="John"
            />
          </div>
          <div className="column">
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
          <div className="column">
            <p>Email</p>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="JohnDoe@gmail.com"
            />
          </div>
          <div className="column">
            <p>Phone</p>
            <input
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder="(Optional)"
            />
          </div>
          </div>
          <div className="column">
          <p>Message</p>
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

export default ContactPage;
