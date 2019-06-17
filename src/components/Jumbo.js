import React from "react";
import { Jumbotron, Button } from "reactstrap";

const style = {
  container: {
    fontFamily: "Open sans",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "100vw",
    height: "40vw",

    background:
      'url("https://res.cloudinary.com/da4pvqajx/image/upload/v1552322559/jumbotron.png")',
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  button: {
    color: "white"
  },
  p: {
    fontSize: "20px"
  },
  h1: {
    fontWeight: "bold"
  }
};

const Jumbo = props => {
  return (
    <div>
      <Jumbotron style={style.container}>
        <h1 className="display-3" style={style.h1}>
          My Tech World
        </h1>
        <p className="lead" style={style.p}>
          10 weeks to change my life
        </p>
        <hr className="my-2" />
        <p style={style.p}> 8 FullStack projects to learn how to code.</p>
        <p className="lead">
          <Button color="secondary" style={style.button}>
            Discover my projects
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
