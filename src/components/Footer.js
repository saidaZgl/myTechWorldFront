import React, { Component } from "react";

const style = {
  container: {
    width: "100vw",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  p: {
    color: "#56585b",
    fontFamily: "Open Sans",
    fontSize: "18px"
  }
};

export default class Footer extends Component {
  render() {
    return (
      <div style={style.container}>
        <p style={style.p}>
          Created after a 10 weeks Bootcamp @La Capsule Academy
        </p>
      </div>
    );
  }
}
