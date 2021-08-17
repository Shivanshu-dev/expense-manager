import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
const UserHead = () => {
  const { user } = useSelector((state) => state.users);
  // console.log(user);

  return (
    <>
      <Container className="user-head-container">
        <Row>
          <Col className="text-center" lg={6} md={6} sm={6}>
            <img
              style={{
                height: "12rem",
                width: "auto",
                borderRadius: "100%",
                margin: "1rem",
                border: "3px solid black",
              }}
              src={`https://expense-manager-dev02.herokuapp.com/images/photos/${user.image}`}
              alt="user-img"
            />
          </Col>
          <Col className="text-center" lg={6} md={6} sm={6}>
            <h3 className="mt-5 userheader-name">{user.username}</h3>
            <h5 className="userheader-email">{user.email}</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserHead;
