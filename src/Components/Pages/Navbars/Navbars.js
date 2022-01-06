import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import useFirebase from "../../Hooks/useFirebase";

const Navbars = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      <Navbar style={{ backgroundColor: "rgb(0, 189, 214)" }} variant="light" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand to="#home">
            <h3 className=" fw-bold fs-3">
              <span style={{ color: "red" }}>Ali</span> Car Service
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="text-white fs-5" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white fs-5" as={Link} to="/servicepages">
              Services
            </Nav.Link>
            <Nav.Link className="text-white fs-5" as={Link} to="/aboutus">
              About Us
            </Nav.Link>
            {user?.email ? (
              <>
                <Nav.Link className="text-white fs-5" as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Button onClick={logOut} className="text-white fs-5" color="inherit">
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/register">
                <Button className="text-white fs-5" color="inherit">
                  Login
                </Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
