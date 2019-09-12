import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSettings } from "../../store/actions/settingActions";
import { Layout } from "antd";

const { Sider, Content } = Layout;

const UserPage = props => {
  const { fetchSettings } = props;
  useEffect(() => {
    fetchSettings();
  }, []);

  return (
  <div>dashboard</div>
  );
};

const mapStateToProps = state => {
  return {
    settings: state.settings.settings
  };
};

export default connect(
  mapStateToProps,
  { fetchSettings }
)(UserPage);
