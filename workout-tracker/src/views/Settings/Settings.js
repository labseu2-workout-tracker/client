import React from 'react';
import { connect } from 'react-redux';
import { fetchSettings, updateSettings } from '../../store/actions/settingActions';
import styled from 'styled-components';

const StyledSettings = styled.div``;
const test = [{
  email: 'hello',
  password: 'hello',
  weight: 'hello',
  height: 'hello',
  gender: 'hello',
  difficulty: 'hello',
  email_notification: 'hello',
  push_notification: 'hello',
}]
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: test[0].email,
      password: test[0].password,
      weight: test[0].weight,
      height: test[0].height,
      gender: test[0].gender,
      difficulty: test[0].difficulty,
      email_notification: test[0].email_notification,
      push_notification: test[0].push_notification,
     }
  }

  componentDidMount = () => {
  this.props.fetchSettings();
  };
  render() { 
    return ( 
      <StyledSettings>
      {
        // this.props.settings ? 
        // (
          // this.props.settings
          test.map((setting, index) => {
        return <div key={index}>
          <div className="row">
            <p>Email: </p>
          <input value={this.state.email} onChange={this.handleChange} placeholder={setting.email} name="email" />
          </div>
          <div className="row">
          <p>Password: </p>
          <input value={this.state.password} onChange={this.handleChange} placeholder={setting.password} name="password" type="password" />          
          </div>
          <div className="row">
          <p>Weight: </p>
          <input value={this.state.weight} onChange={this.handleChange} placeholder={setting.body_weight} name="weight" />          
          </div>
          <div className="row">
          <p>Height: </p>
          <input value={this.state.height} onChange={this.handleChange} placeholder={setting.body_height} name="height" />                    
          </div>
          <div className="row">
            <p>Gender: </p>
          <input value={this.state.gender} onChange={this.handleChange} placeholder={setting.body_gender} name="gender" />
          </div>
          <div className="row">
            <p>Difficulty</p>
          <input value={this.state.difficulty} onChange={this.handleChange} placeholder={setting.user_difficulty} name="difficulty" />
          </div>
          <div className="row">
            <p>Email Notification: </p>
          <input value={this.state.email_notification} onChange={this.handleChange} placeholder={setting.email_notification} name="email_notification" />                            
          </div>
          <div className="row">
            <p>Push Notification: </p>
          <input value={this.state.push_notification} onChange={this.handleChange} placeholder={setting.push_notification} name="push_notification" />
          </div>
        </div>
      })
      // ) : null
      }
      </StyledSettings>
     );
  }
}

const mapStateToProps = state => {
  return {
// settings: state.settings.settings,
  };
};
 
export default connect(mapStateToProps, { fetchSettings, updateSettings })(Settings);