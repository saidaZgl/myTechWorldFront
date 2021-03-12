import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { Row, Container } from "reactstrap";

import count from "./reducers/likedprojects.reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
const store = createStore(combineReducers({ count }));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    };
  }
  //fetch dans componentDidMount() pour permettre aux éléments de s'afficher sans attendre le retour de l'API
  componentDidMount() {
    fetch("https://capsule-exams.herokuapp.com/api/capsule/projects")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          projects: response.projects
        });
      })
      .catch(err => {
        console.log("Request vers Api failed' -------->", err);
      });
  }

  render() {
    if (this.state.projects) {
      var projectList = this.state.projects.map((project, i) => {
        return (
          <Project
            key={i}
            name={project.name}
            desc={project.desc}
            pic_url={project.pic_url}
            days_spent={project.days_spent}
            stack_front={project.stack_front}
            stack_back={project.stack_back}
            handleClickParent={this.handleClick}
          />
        );
      });
    }
    //Initialisation du store => rend le Store accessible à toute l'application
    return (
      <Provider store={store}>
        <div>
          <NavBar />
          <Jumbo />
          <Container>
            <Row>{projectList}</Row>
          </Container>
          <Footer />
        </div>
      </Provider>
    );
  }
}
