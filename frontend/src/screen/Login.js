import React, { useState } from "react";
import { Container, Form, Row, Col, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubmitButton from "../Components/SubmitButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  let handleEmail = (e) => {
    setEmail(e);
  };

  let handlePassword = (e) => {
    setPassword(e);
  };

  let handleViewPassword = () => {
    setViewPassword(true);
  };

  let handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={12}>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => handleEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text onClick={handleViewPassword}>
                    <i className="far fa-eye-slash"></i>
                  </InputGroup.Text>

                  <Form.Control
                    type={viewPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => handlePassword(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <SubmitButton classname="login-button" name="Login" />
            </Form>
            <Link to="/register">
              <h6 className="text-center mt-5">Register</h6>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
