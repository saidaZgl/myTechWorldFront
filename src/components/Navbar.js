import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const style = {
  container: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    width: "100%"
  },
  brand: {
    color: "#ff7979",
    fontWeight: "bold"
  },
  NavLink: {
    color: "#636e72"
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  //Header et liens
  render() {
    return (
      <Navbar
        id="navbar"
        style={style.container}
        className="fixed-top"
        color="light"
        light
        expand="md"
      >
        <NavbarBrand style={style.brand} href="/">
          My tech World
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#" style={style.NavLink}>
                The projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={style.NavLink}>
                TOP 3 : {this.props.count}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(
  mapStateToProps,
  null
)(NavBar);
