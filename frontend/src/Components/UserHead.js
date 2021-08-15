import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

const UserHead = () => {
  const { user } = useSelector((state) => state.users);
  console.log(user);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img
              style={{ height: "10rem", width: "auto", borderRadious: "50%" }}
              src={`https://expense-manager-dev02.herokuapp.com/images/photos/${user.image}`}
              alt="user-img"
            />
          </Col>
          <Col>
            <h3>{user.name}</h3>
            <h5>{user.email}</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserHead;
