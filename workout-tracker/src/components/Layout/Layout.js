import React, { Fragment } from 'react';
import "antd/dist/antd.css";
import { Layout } from "antd";
import './Layout.css';

const { Header, Content } = Layout;

const MainLayout = props => (
  <Fragment>
    <Header className="main-header">{props.header}</Header>
    {props.mobileNav}
    <Content className="content">{props.routes}</Content>
  </Fragment>
);

export default MainLayout;