import React from "react";
import { Container, Navbar } from "react-bootstrap";
const Head = () => {
  return (
    <>
      <Container className="head-container" fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand className="head-text" href="#">
              Expense Manager
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Head;
