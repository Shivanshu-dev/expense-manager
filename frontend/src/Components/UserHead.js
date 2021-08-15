import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

const UserHead = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <>
      <Container>
        <Row>
          <Col>{user.image}</Col>
        </Row>
      </Container>
    </>
  );
};

export default UserHead;
