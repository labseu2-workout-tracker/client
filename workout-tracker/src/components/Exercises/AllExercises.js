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

const { Header, Content } = Layout;
const { Search } = Input;
const { Meta } = Card;

const StyledAllExercises = styled.div`
  .header {
    display: flex;
    flex-direction: column;
  }

  .search {
    width: 60%; 
    margin-top: .35rem;
  }

  .dropdowns {
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .first-picture,
  .second-picture {
    width: 40%;
    height: 13rem;
    padding: 1rem;
  }

  @media (max-width: 576px) {
    .first-picture,
    .second-picture {
      width: 50%;
      height: 9rem;
      padding: 1rem;
    }

    .dropdowns {
      flex-direction: column;
    }

    .ant-card-meta-title {
      font-size: 1rem;
    }
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
              className="search"
              onSearch={exercise_name =>
                this.props.searchExercise(exercise_name)
              }
            />

            <div className="dropdowns">
              <Dropdown
                overlay={
                  <Menu
                    onClick={value =>
                      this.props.showMuscleGroup(value.item.props.children)
                    }
                  >
                    {muscles.map((muscleGroup, index) => (
                      <Menu.Item key={index}>{muscleGroup}</Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <a className="ant-dropdown-link">
                  Muscles <Icon type="down" />
                </a>
              </Dropdown>
              <Dropdown
                overlay={
                  <Menu
                    onClick={value =>
                      this.props.showEquipment(value.item.props.children)
                    }
                  >
                    {equipment.map((equipment, index) => (
                      <Menu.Item key={index}>{equipment}</Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <a className="ant-dropdown-link">
                  Equipment <Icon type="down" />
                </a>
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
