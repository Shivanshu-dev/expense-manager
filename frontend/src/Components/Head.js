import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Navbar } from "react-bootstrap";
import { logoutUser } from "../actions/authAction";

const Head = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  let handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <Container className="head-container" fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand className="head-text" href="#">
              Expense Manager
            </Navbar.Brand>

            {Object.keys(user).length !== 0 ? (
              <Navbar.Text>
                <i
                  onClick={handleLogout}
                  style={{ fontSize: "3rem" }}
                  className="fas fa-sign-out-alt"
                ></i>
              </Navbar.Text>
            ) : null}
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Head;
