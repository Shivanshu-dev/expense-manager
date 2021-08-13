import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import SubmitButton from "../Components/SubmitButton";

const Register = () => {
  const [file, setFile] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fileError, setFileError] = useState(false);

  let handleFile = (e) => {
    setFile(e);
  };

  let handleUsername = (e) => {
    setUsername(e);
  };

  let handleEmail = (e) => {
    setEmail(e);
  };

  let handlePassword = (e) => {
    setPassword(e);
  };

  let handleRegister = (e) => {
    e.preventDefault();
    console.log(file[0].size);
    if (!file[0].type.startsWith("image")) {
      setFileError(true);
    } else if (file[0].size > 500000) {
      setFileError(true);
    } else {
      setFileError(false);
      const userData = {
        username,
        email,
        password,
      };

      const sendData = new FormData();

      for (let key in userData) {
        sendData.append(key, sendData[key]);
      }

      if (file) {
        sendData.append("image", file[0], file[0].name);
      }
      console.log(sendData);
      // dispatch action sendata
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={12} sm={12}>
            <Form onSubmit={handleRegister}>
              {fileError ? (
                <p style={{ color: "red" }}>
                  Please Select Image only and size below 1mb
                </p>
              ) : null}
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <i className="far fa-user-circle"></i>
                </InputGroup.Text>
                <FormControl
                  // value={file}
                  onChange={(e) => {
                    handleFile(e.target.files);
                  }}
                  type="file"
                  required
                />
              </InputGroup>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => handleUsername(e.target.value)}
                  required
                  placeholder="Enter username"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => handleEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Choose A Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => handlePassword(e.target.value)}
                  value={password}
                  required
                  placeholder="Password"
                />
              </Form.Group>

              <SubmitButton classname="register-button" name="Register" />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
