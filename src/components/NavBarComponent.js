import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";

function NavBarComponent() {
  const history = useHistory();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>
            Storr
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Button variant="dark" onClick={() => history.push("/SignIn")}>Sign In</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="primary" onClick={() => history.push("/SignUp")}>Sign Up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent
