import React from 'react';
import { connect } from 'react-redux';
import { fetchSettings, updateSettings } from '../../store/actions/settingActions';
import styled from 'styled-components';

const StyledSettings = styled.div``;

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: ,
      password: ,
      weight: ,
      height: ,
      gender: ,
      difficulty: ,
      email_notification: ,
      push_notification: ,
     }
  }

  componentDidMount = () => {
  this.props.fetchSettings();
  };
  render() { 
    return ( 
      <StyledSettings>
      {this.props.settings ? (this.props.settings.map(setting => {
        return <div>
          <input value={this.state.email} onChange={this.handleChange} placeholder={setting.email} name="email" />
          <input value={this.state.password} onChange={this.handleChange} placeholder={setting.password} name="password" type="password" />          
          <input value={this.state.weight} onChange={this.handleChange} placeholder={setting.body_weight} name="weight" />          
          <input value={this.state.height} onChange={this.handleChange} placeholder={setting.body_height} name="height" />                    
          <input value={this.state.gender} onChange={this.handleChange} placeholder={setting.body_gender} name="gender" />
          <input value={this.state.difficulty} onChange={this.handleChange} placeholder={setting.user_difficulty} name="difficulty" />                                      
          <input value={this.state.email_notification} onChange={this.handleChange} placeholder={setting.email_notification} name="email_notification" />                            
          <input value={this.state.push_notification} onChange={this.handleChange} placeholder={setting.push_notification} name="push_notification" />                                     
        </div>
      })) : null}
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