import React from "react";
// import './AllExercises.css';
import {
  Input,
  Row,
  Col,
  Button,
  Layout,
  Menu,
  Breadcrumb,
  PageHeader
} from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

const AllExercises = props => {
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
    //     <div>

    //      {/* <Layout>
    //       <Sider>Sider</Sider>
    //       <Layout>
    //         <Header>Header</Header>
    //         <Content>Content</Content>
    //         <Footer>Footer</Footer>
    //       </Layout> */}

    //           <Search
    //             placeholder="input search text"
    //             enterButton="Search"
    //             style={{ width: "40%", marginTop: "1rem" }}
    //             onSearch={props.searchForName}
    //           />

    //             <h1>Muscles</h1>
    //             {muscles.map((muscleGroup, index) => (

    // <Button type="primary"   key={index}
    //                 onClick={props.showMuscleGroup}>{muscleGroup}</Button>
    //             ))}

    //             {props.exercises
    //               ? props.exercises.map((exercise, index) => {
    //                   return (
    //                     <div
    //                       onClick={() => props.showSingleExercise(exercise.id)}
    //                       className="exercise"
    //                       key={index}
    //                     >
    //                       <img
    //                         className="img"
    //                         src={exercise.picture_one}
    //                         alt="exercise"
    //                       />

    //                       <div className="column">
    //                         <p>{exercise.exercise_name}</p>
    //                         <p>
    //                           Muscle Targeted: <span>{exercise.muscle}</span>
    //                         </p>
    //                         <p>
    //                           Equipment Type: <span>{exercise.equipment}</span>
    //                         </p>
    //                       </div>
    //                       <img
    //                         className="img"
    //                         src={exercise.picture_two}
    //                         alt="exercise"
    //                       />
    //                       {/* <ExerciseRating
    //                         className='img'
    //                         exerciseRating={Number(
    //                          exercise.exercise_ratings.split('.').join('')
    //                         )}
    //                       /> */}
    //                     </div>
    //                   );
    //                 })
    //               : null}

    //             <h1>Equipment</h1>
    //             {equipment.map((equipment, index) => (
    //               <button className="btn" key={index} onClick={props.showEquipment}>
    //                 {equipment}
    //               </button>
    //             ))}

    //         {/* <div className='butto'>
    //         <button onClick={props.loadMore} className='new-button'>
    //           Load More
    //         </button>
    //     </div> */}

    //     </div>

    <Layout>
      <Header className="header" style={{ backgroundColor: "white" }}>
        <div className="logo" />

        <Search
          placeholder="input search text"
          enterButton="Search"
          style={{ width: "60%", marginTop: ".35rem" }}
          onSearch={props.searchForName}
        />
      </Header>
      <Layout>
        <Sider width={"35%"} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
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
                    props.showMuscleGroup(value.item.props.children)
                  }
                >
                  {muscleGroup}
                </Menu.Item>
              ))}
            </SubMenu>

            <SubMenu
              key="sub2"
              title={
                <span>
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
                    props.showEquipment(value.item.props.children)
                  }
                >
                  {equipment}
                </Menu.Item>
              ))}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Exercises</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {props.exercises
              ? props.exercises.map((exercise, index) => {
                  return (
                    <div 
                    onClick={() => props.showSingleExercise(exercise.id)}
                    key={index} style={{ margin: "1rem" }}>
                      <h6 style={{ fontSize: "1.5" }}>
                        {exercise.exercise_name}
                      </h6>
                      <Row>
                        <Col span={8}>
                          <img
                            className="img"
                            src={exercise.picture_one}
                            alt="exercise"
                          />
                        </Col>
                        <Col span={8}>
                          <p>{exercise.muscle}</p>
                        </Col>
                        <Col span={8}>
                          <img
                            className="img"
                            src={exercise.picture_two}
                            alt="exercise"
                          />
                        </Col>
                      </Row>
                    </div>
                  );
                })
              : null}
            <Button type="primary" onClick={props.loadMore}>
              Load More
            </Button>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AllExercises;

// <p>{exercise.exercise_name}</p>
//    <p>
//      Muscle Targeted: <span>{exercise.muscle}</span>
//    </p>
//    <p>
//    Equipment Type: <span>{exercise.equipment}</span>
//    </p>

// <div
//   onClick={() => props.showSingleExercise(exercise.id)}
//   className="exercise"
//   key={index}
// >
//   <img
//     className="img"
//     src={exercise.picture_one}
//     alt="exercise"
//   />

//   <div className="column">
//     <p>{exercise.exercise_name}</p>
//     <p>
//       Muscle Targeted: <span>{exercise.muscle}</span>
//     </p>
//     <p>
//       Equipment Type: <span>{exercise.equipment}</span>
//     </p>
//   </div>
//   <img
//     className="img"
//     src={exercise.picture_two}
//     alt="exercise"
//   />
//   {/* <ExerciseRating
//         className='img'
//         exerciseRating={Number(
//          exercise.exercise_ratings.split('.').join('')
//         )}
//       /> */}
// </div>
