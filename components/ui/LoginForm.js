import React, { useState, useEffect } from "react";

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
  const [register, setRegister] = useState(false);

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

  const LoginFields = () => {
    return (
      <div className="col-lg-6">
        <div>
          <Stack direction="horizontal" gap={5}>
            <h5>Sign In</h5>
            <RegisterSwitch />
          </Stack>
          <form action="#" method="post">
            <div className="single-input-item">
              <input type="email" placeholder="Email or Username" required />
            </div>
            <div className="single-input-item">
              <input
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
          <form action="#" method="post">
            <div className="single-input-item">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="single-input-item">
              <input type="email" placeholder="Enter your Email" required />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="single-input-item">
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-input-item">
                  <input
                    type="password"
                    placeholder="Repeat your Password"
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
              <button className="btn btn-sqr">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <Container>
        <div className="login-register-wrapper section-padding">
          <Container>
            <div className="member-area-from-wrap">
              <Row>
                {register ? <RegisterFields /> : <LoginFields />}
              </Row>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default LoginForm;
