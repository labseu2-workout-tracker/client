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
     <>
     <section className="contact">

     </section>
     </>
        
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
