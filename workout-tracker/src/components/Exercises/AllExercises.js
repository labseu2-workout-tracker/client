import React from "react";
import { Input, Button, Layout, Menu, Card, Icon } from "antd";
import styled from "styled-components";
import { connect } from 'react-redux';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Meta } = Card;

const StyledAllExercises = styled.div`
  .header {
    display: flex;
    flex-direction: column;
  }
  
  .first-picture {
    width: 50%;
    height: 9rem;
  }

  @media (max-width: 768px) {
    .first-picture {
      width: 100%;
    }

    .second-picture {
      display: none;
    }

    .ant-card-meta-title {
      font-size: 1rem;
    }
  }
`;

class AllExercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const muscles = [
      "Neck",
      "Lats",
      "Middle Back",
      "Lower Back",
      "Shoulders",
      "Chest",
      "Forearms",
      "Hamstrings",
      "Calves",
      "Biceps",
      "Triceps",
      "Traps",
      "Abdominals",
      "Glutes",
      "Quadriceps",
      "Adductors",
      "Abductors"
    ];
  
    const equipment = [
      "Bands",
      "Foam Roll",
      "Barbell",
      "Kettlebells",
      "Body Only",
      "Machine",
      "Cable",
      "Medicine Ball",
      "Dumbbell",
      "None",
      "E-Z Curl Bar",
      "Other",
      "Exercise Ball"
    ];

  return (
    <StyledAllExercises>
      <Layout>
        <Header className="header" style={{ backgroundColor: "white" }}>

          <Search
            placeholder="input search text"
            enterButton="Search"
            style={{ width: "60%", marginTop: ".35rem" }}
            onSearch={this.props.searchForName}
          />
          <Button type="primary" 
          // onClick={}
          >
            Muscles
            <Icon type="down" />
            <Icon type="up" />
          </Button>

          <Button type="primary" 
          // onClick={}
          >
            Equipments
            <Icon type="down" />
            <Icon type="up" />
          </Button>
        </Header>
        <Layout>
          {/* <Sider width={"35%"} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span className="muscles">
                    <i className="fa fa-running"></i>
                    Muscles
                    <i className="fa fa-running"></i>
                  </span>
                }
              >
                {muscles.map((muscleGroup, index) => (
                  <Menu.Item
                    key={index}
                    onClick={value =>
                      this.props.showMuscleGroup(value.item.this.props.children)
                    }
                  >
                    {muscleGroup}
                  </Menu.Item>
                ))}
              </SubMenu>

              <SubMenu
                key="sub2"
                title={
                  <span className="equipment">
                    <i className="fa fa-dumbbell"></i>
                    Equipment
                    <i className="fa fa-dumbbell"></i>
                  </span>
                }
              >
                {equipment.map((equipment, index) => (
                  <Menu.Item
                    key={index}
                    onClick={value =>
                      this.props.showEquipment(value.item.this.props.children)
                    }
                  >
                    {equipment}
                  </Menu.Item>
                ))}
              </SubMenu>
            </Menu>
          </Sider> */}
          <Layout style={{ padding: "0 24px 24px", backgroundColor: "#FFF" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {this.props.exercises
                ? this.props.exercises.map((exercise, index) => {
                    return (
                      <Card
                        key={index}
                        cover={
                          <div>
                            <img
                              className="first-picture"
                              alt="example"
                              src={exercise.picture_one}
                            />
                            <img
                              className="second-picture"
                              alt="example"
                              src={exercise.picture_two}
                              style={{ height: "9rem", width: "50%" }}
                            />
                          </div>
                        }
                        actions={[
                          <i
                            className="fa fa-info-circle"
                            onClick={() =>
                              this.props.showSingleExercise(exercise.id)
                            }
                          ></i>,
                          <i className="fa fa-plus-square"></i>
                        ]}
                      >
                        <Meta
                          title={exercise.exercise_name}
                          description={
                            <div>
                              {" "}
                              <p
                                style={{ padding: "0" }}
                              >{`${exercise.muscle} with ${exercise.equipment}`}</p>
                            </div>
                          }
                        />
                      </Card>
                    );
                  })
                : null}
              {this.props.arrayOfCurrentExercises ? (
                this.props.indexOfLastExercise ===
                this.props.arrayOfCurrentExercises.length ? null : (
                  <Button type="primary" onClick={this.props.loadMore}>
                    Load More
                  </Button>
                )
              ) : null}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </StyledAllExercises>
  );
  }
};

export default AllExercises;