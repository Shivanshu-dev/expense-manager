import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Form, Row, Col, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubmitButton from "../Components/SubmitButton";
import { loginUser } from "../actions/authAction";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, message, success } = useSelector((state) => state.users);
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
    viewPassword ? setViewPassword(false) : setViewPassword(true);
  };

  let handleLogin = (e) => {
    e.preventDefault();
    const userInput = { email, password };
    dispatch(loginUser(userInput));
  };

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      history.push("/dashboard");
    }
  }, [history, user]);

  return (
    <>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={12}>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {success === false && <p style={{ color: "red" }}>{message}</p>}
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
