import React from 'react'
import { useAuth0 } from "../react-auth0-spa";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
              <div>
                <Link to="/items">
                  <Button variant="dark">Items</Button>
                </Link>
                <Link to="/categories">
                  <Button variant="dark">Categories</Button>
                </Link>

                {/* Is not signed in display a sign in button */}
                {!isAuthenticated && (
                  <Button variant="dark" onClick={() => loginWithRedirect({})}>
                    Sign In
                  </Button>
                )}

                {/* Is signed in display Profile button */}
                {/* DONT KNOW IF I NEED A HOME BUTTON */}
                {isAuthenticated && (
                  <span>
                    <Link to="/">
                      <Button variant="dark">Home</Button>
                    </Link>
                    &nbsp;
                    <Link to="/profile">
                      <Button variant="dark">Profile</Button>
                    </Link>
                  </span>
                )}

                {/* Is signed in display sign out button */}
                {isAuthenticated && (
                  <Button variant="dark" onClick={() => logout()}>
                    Sign Out
                  </Button>
                )}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent
