import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

const UserHead = () => {
  const { user } = useSelector((state) => state.users);
  console.log(user);
  return (
    <>
      <Container className="user-head-container">
        <Row>
          <Col className="text-end" lg={6} md={6} sm={6}>
            <img
              style={{ height: "10rem", width: "auto", borderRadius: "45%" }}
              src={`https://expense-manager-dev02.herokuapp.com/images/photos/${user.image}`}
              alt="user-img"
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <h3 className="mt-5">{user.username}</h3>
            <h5>{user.email}</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserHead;
