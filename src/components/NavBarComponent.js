import React from 'react'
import { useAuth0 } from "../react-auth0-spa";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";

const NavBarComponent = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0;
  const history = useHistory();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Storr</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              {/* <Button variant="dark" onClick={() => history.push("/SignIn")}>Sign In</Button> */}
              <div>
                {!isAuthenticated && (
                  <Button variant="dark" onClick={() => loginWithRedirect({})}>
                    Log in
                  </Button>
                )}

                {isAuthenticated && (
                  <Button variant="dark" onClick={() => logout()}>
                    Log out
                  </Button>
                )}
              </div>
            </Nav.Link>
            <Nav.Link>
              <Button variant="primary" onClick={() => history.push("/SignUp")}>
                Sign Up
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent
