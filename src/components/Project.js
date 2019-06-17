import React, { Component } from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";

import { connect } from "react-redux";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
    textAlign: "center"
  },
  cardText: {
    color: "black",
    textAlign: "center"
  },
  cardTitle: {
    fontWeight: "bold",
    marginTop: "10"
  },
  cardImg: {
    height: "150px",
    width: "150px",
    backgroundColor: "#ff7979"
  },
  cardImgContainer: {
    padding: 20,
    width: "100%",
    backgroundColor: "#ff7979"
  }
};

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      projectsNameList: []
    };
  }

  handleClick = () => {
    this.props.onFavoriteClick();

    var isLike = !this.state.like;
    this.setState({
      like: isLike
    });
    if (isLike) {
      fetch("http://localhost:3000/myprojects", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${this.props.name}&desc=${this.props.desc}&pic_url=${
          this.props.pic_url
        }&}`
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log("REPONSE DE MON FETCH", data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      fetch(`http://localhost:3000/myprojects/${this.props.name}`, {
        method: "DELETE"
      }).catch(error => {
        console.error(error);
      });
    }
  };

  render() {
    return (
      <Col xs="12" sm="6" md="4" lg="4">
        <Card style={style.container}>
          <div style={style.cardImgContainer}>
            <CardImg
              style={style.cardImg}
              top
              width="100%"
              src={this.props.pic_url}
              alt="Card image"
            />
          </div>
          <CardBody style={style.container}>
            <CardTitle style={style.cardTitle}>{this.props.name}</CardTitle>
            <CardSubtitle>{this.props.desc}</CardSubtitle>

            <CardTitle style={style.cardTitle}>Stack Front</CardTitle>
            <h6>
              <Badge color="secondary">{this.props.stack_front}</Badge>
            </h6>

            <CardTitle style={style.cardTitle}>Stack Back</CardTitle>
            <h6>
              <Badge color="secondary">{this.props.stack_back}</Badge>
            </h6>

            <CardTitle style={style.cardTitle}>
              {this.props.days_spent} days spent
            </CardTitle>

            <Button outline color="secondary" onClick={this.handleClick}>
              + Favorite
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFavoriteClick: function() {
      dispatch({ type: "addFavorite" });
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Project);
