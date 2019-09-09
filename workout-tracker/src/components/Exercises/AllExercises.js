import React from "react";
import { Input, Button, Layout, Menu, Card, Icon, Dropdown } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  fetchExercises,
  showMuscleGroup,
  showSingleExercise,
  loadMore,
  searchExercise,
  showEquipment
} from "../../store/actions/exerciseActions";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Meta } = Card;

const StyledAllExercises = styled.div`
  .header {
    display: flex;
    flex-direction: column;
  }

  .images {
    display: flex;
    align-content: row;
  }

  .first-picture {
    width: 50%;
    height: 9rem;
    padding: 1rem;
  }

  .second-picture {
    width: 50%;
    height: 9rem;
    padding: 1rem;
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

    .ant-menu {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      text-align: left;

      li {
        padding: 0;
      }

      .ant-menu-item-selected {
        padding: 0;
        font-size: 0.8rem;
      }
    }
  }
  .dropdown {
    margin-right: 3rem;
  }

  .dropdown-two {
    background-color: #a6e3e9;
  }
`;

class AllExercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.fetchExercises();
  };

  showMuscleGroup = exercise_name => {
    this.props.showMuscleGroup(exercise_name);

    // const muscleButton = document.querySelector(".muscles");
    // const equipmentButton = document.querySelector(".equipment");
    // muscleButton.click();

    // setTimeout(() => equipmentButton.click(), 1000);
  };

  showEquipment = equipment => {
    this.props.showEquipment(equipment);

    // const muscleButton = document.querySelector(".muscles");
    // const equipmentButton = document.querySelector(".equipment");
    // equipmentButton.click();

    // setTimeout(() => muscleButton.click(), 1000);
  };

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
          <Header
            className="header"
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              height: "7rem"
            }}
          >
            <Search
              placeholder="input search text"
              enterButton="Search"
              style={{ width: "60%", marginTop: ".35rem" }}
              onSearch={exercise_name =>
                this.props.searchExercise(exercise_name)
              }
            />
            
            <div style={{display: "flex", flexDirection: "row", width: "100%"
          }}>
            <Dropdown
      >
                </Dropdown>
                
              
                </div>
            
          </Header>
          <Layout>
            <Layout
              style={{
                backgroundColor: "#FFF"
              }}
            >
              <Content
                style={{
                  background: "#fff",
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
                              <div className="images">
                                <img
                                  className="first-picture"
                                  alt="example"
                                  src={exercise.picture_one}
                                />
                                <img
                                  className="second-picture"
                                  alt="example"
                                  src={exercise.picture_two}
                                />
                              </div>
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
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises.exercises,
    indexOfLastExercise: state.exercises.indexOfLastExercise,
    arrayOfCurrentExercises: state.exercises.arrayOfCurrentExercises
  };
};

export default connect(
  mapStateToProps,
  {
    fetchExercises,
    showMuscleGroup,
    showSingleExercise,
    loadMore,
    searchExercise,
    showEquipment
  }
)(AllExercises);
