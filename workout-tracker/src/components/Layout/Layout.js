import React from 'react';
import "antd/dist/antd.css";
import { Layout } from "antd";
import './Layout.css';

const { Header, Content } = Layout;

const MainLayout = props => (
  <>
    <Header className="main-header">{props.header}</Header>
    {props.mobileNav}
    <Content className="content">{props.routes}</Content>
  </>
);

export default MainLayout;