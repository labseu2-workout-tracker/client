import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Auth from "../../auth/auth";
import styled from "styled-components";

const { Header, Content, Sider, Footer } = Layout;

class MainLayout extends React.Component {
  render() {
    return (
      <StyledContainer>
        {!Auth.isAuthenticated() ? (
          <Header style={{ backgroundColor: "#0086c9" }}>
            {this.props.header}
          </Header>
        ) : (
          ""
        )}
        {this.props.mobileNav}
        <div className="content-container">
          {Auth.isAuthenticated()
            ? this.props.location.pathname !==
                "/workouts/new/add_exercises" && (
                <Sider breakpoint="lg" collapsedWidth="0">
                  {this.props.sider}
                </Sider>
              )
            : ""}
          <Content>
            {this.props.routes}
            <Footer>
              <FooterContent style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between'}} >
              <div>
                <h4>Our statement</h4>
                <p>
                  If you can make it that far,<br></br> what's stopping you from
                  one more mile or one more set of reps?
                </p>
              </div>
              <div>
                <h4>Contact us</h4>
                <p>
                  <a href="#">befit@tracker.com</a>
                </p>
              </div>
              <div style={{display:'flex', flexDirection:'column'}}>
                 <h4>The Team Behind</h4>
                 <a>Shaun Carmody TL</a>
                 <a href='https://github.com/Becheru888'>Remi Becheru FS</a>        
                 <a href='https://github.com/benjamingrabow '>Benjamin Grabow FS</a>
                 <a>Matt Locklin FS</a>
                 <a href='https://github.com/hyetigran'>Tigran Asriyan FS</a>
                 <a>Yusuf Abdulkarim FS</a>
                 <a>Kelechi Ogbonna FS</a>
                 <a>Talent Antonio FS</a>
                 <a>Wasiu Idowu FS</a>               
              </div>
              </FooterContent>
              <Copy>
                
                <p>
                <span>© Copyright {new Date().getFullYear()}</span><br></br>
                  All rights reserved. Powered by <a href="#!">BeFit</a>
                </p>
              </Copy>
            </Footer>
          </Content>
        </div>
      </StyledContainer>
    );
  }
}

const Copy = styled.div`
p {
  text-align:center;
  padding:0;
}
`

const FooterContent = styled.div `
    p{
    padding:0px;
  }

`

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;

  .content-container {
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column
  }

  .ant-layout-content {
    min-height: 100vh;
    min-width: 0;
    overflow: auto;
  }

  .ant-layout-sider {
    position: absolute;
    z-index: 1000;
    background: #0086c9;
    height: 100vh;
  }

  .nav-items {
    padding: 2rem 0.5rem;
  }

  @media (min-width: 992px) {
    .ant-layout-sider {
      padding: 0.5rem;
      overflow: auto;
      position: relative;
    }
  }
`;
export default MainLayout;
