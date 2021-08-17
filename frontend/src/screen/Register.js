import React, { useState, useEffect } from "react";
import validator from "validator";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import SubmitButton from "../Components/SubmitButton";
import { registerUser } from "../actions/authAction";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.users);
  const [file, setFile] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(undefined);
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [validPass, setValidPass] = useState(false);

  let handleFile = (e) => {
    setFile(e);
  };

  let handleUsername = (e) => {
    setUsername(e);
  };

  let handleEmail = (e) => {
    setEmail(e);
  };

  let checkValidEmail = (e) => {
    if (validator.isEmail(e)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  let handlePassword = (e) => {
    setPassword(e);
  };

  let validatePassword = (e) => {
    const validation = new RegExp(
      "^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$"
    );

    const validatedpass = validation.test(e);

    // if the password is not matching the condition validatedPass will be false
    if (validatedpass) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }
  };

  let handleViewPassword = () => {
    viewPassword ? setViewPassword(false) : setViewPassword(true);
  };

  let handleRegister = (e) => {
    // console.log("123");
    e.preventDefault();

    if (!file[0].type.startsWith("image")) {
      setFileError(true);
    } else if (file[0].size > 5000000) {
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
        sendData.append(key, userData[key]);
      }
      if (file) {
        sendData.append("image", file[0], file[0].name);
      }

      // dispatch action sendata
      dispatch(registerUser(sendData));
    }
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
          <Col lg={{ span: 8, offset: 2 }} md={12} sm={12}>
            <Form onSubmit={handleRegister}>
              {fileError ? (
                <p style={{ color: "red" }}>
                  Please Select Image only and size below 5mb
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
                {validEmail === false && email.length !== 0 && (
                  <p style={{ color: "red" }}>Please Enter Valid Email</p>
                )}
                <Form.Control
                  value={email}
                  onChange={(e) => handleEmail(e.target.value)}
                  onBlur={(e) => checkValidEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Choose A Password</Form.Label>
                {validPass && password.length < 8 && password.length > 0 ? (
                  <p style={{ color: "red" }}>
                    Password must contain one Cap one Small one Special & one
                    Numberic character & should be atleast 8 characters long
                  </p>
                ) : null}
                <InputGroup className="mb-2">
                  <InputGroup.Text onClick={handleViewPassword}>
                    <i className="far fa-eye-slash"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type={viewPassword ? "text" : "password"}
                    onChange={(e) => handlePassword(e.target.value)}
                    value={password}
                    onBlur={(e) => validatePassword(e.target.value)}
                    required
                    disabled={!validEmail}
                    placeholder="Password"
                  />
                </InputGroup>
              </Form.Group>

              <SubmitButton
                disable={!validPass && password.length < 8}
                classname="register-button"
                name="Register"
              />
            </Form>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col lg={{ span: 8, offset: 2 }} md={12} sm={12}>
            <Link to="/">Already Member ? Login</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
