import React from "react";
import styled from "styled-components";

const StyledContactPage = styled.div`
  
p {
  color: #828698;
}

  .left-right-side {
    display:flex;
  }

  .left-side {
    width:50%;

    img {
      border-radius: 50%;
      width: 50%;
    }
  }

  .right-side {
   width: 50%;
  }
  
  input {
    text-align: center;
  }

  .column {
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
        <h6>Have a question about a product, feedback, or business
          inquiry for Workout Tracker?
        </h6>
        
         
    
        
          <div className="column">
            <p>Name:</p>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="John Doe"
            />
          </div>
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
        
        
      </StyledContactPage>
    );
  }
}

export default ContactPage;
