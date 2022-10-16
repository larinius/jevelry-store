import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FetchError } from "/lib/fetchJson";
import axios from "axios";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Stack,
} from "react-bootstrap";

const LoginForm = () => {
  const router = useRouter();
  const [register, setRegister] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSwitch = (e) => {
    setRegister(e.target.checked);
  };

  const RegisterSwitch = () => {
    return (
      <Form>
        <Form.Check
          type="switch"
          id="login_register-switch"
          label="New user"
          onChange={handleSwitch}
          checked={register}
        />
      </Form>
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const payload = {
      name: e.currentTarget.username.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      const response = await axios.post("/api/register", payload);
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      const response = await axios.post("/api/login", payload);
      console.log(response.data, response.status);
      if(response.status === 201){
        router.push('/account');
      }
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  const LoginFields = () => {
    return (
      <div className="col-lg-6">
        <div>
          <Stack direction="horizontal" gap={5}>
            <h5>Sign In</h5>
            <RegisterSwitch />
          </Stack>
          <form onSubmit={handleLogin}>
            <div className="single-input-item">
              <input
                name="email"
                type="email"
                placeholder="Email or Username"
                required
              />
            </div>
            <div className="single-input-item">
              <input
                name="password"
                type="password"
                placeholder="Enter your Password"
                required
              />
            </div>
            <div className="single-input-item">
              <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
                <div className="remember-meta">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="rememberMe"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="rememberMe"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <a href="#" className="forget-pwd">
                  Forget Password?
                </a>
              </div>
            </div>
            <div className="single-input-item">
              <button className="btn btn-sqr">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const RegisterFields = () => {
    return (
      <div className="col-lg-6">
        <div>
          <Stack direction="horizontal" gap={5}>
            <h5>Register</h5>
            <RegisterSwitch />
          </Stack>
          <form onSubmit={handleRegister}>
            <div className="single-input-item">
              <input
                name="username"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="single-input-item">
              <input
                name="email"
                type="email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="single-input-item">
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="single-input-item">
              <div className="login-reg-form-meta">
                <div className="remember-meta">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="subnewsletter"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="subnewsletter"
                    >
                      Subscribe Our Newsletter
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-input-item">
              <button type="submit" className="btn btn-sqr">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <Container style={{ minHeight: "450px" }}>
        <div className="login-register-wrapper section-padding">
          <Container>
            <div className="member-area-from-wrap">
              <Row>{register ? <RegisterFields /> : <LoginFields />}</Row>
              {errorMsg && (
                <p
                  className="error"
                  style={{ color: "red", margin: "1rem 0 0" }}
                >
                  {errorMsg}
                </p>
              )}
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default LoginForm;
