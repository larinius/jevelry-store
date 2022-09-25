import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import styled from "styled-components";
import ContactInfo from "./ContactInfo";

const SuccessState = styled.p`
  color: #087d07;
  padding-top: 20px;
  font-weight: bold;
`;
const ErrorState = styled.p`
  color: #b00020;
  padding-top: 20px;
  font-weight: bold;
`;

const client = axios.create({
  baseURL: "/api",
  headers: {
    "Content-type": "application/json",
  },
});

const ContactForm = () => {
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (state === "Error" || state === "Success") {
      const timer = setTimeout(() => {
        setState("idle");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);

    const response = await axios.post("/api/contact", data);

    if (response.status === 201) {
      setState("Success");
      e.target.reset();
    } else {
      setErrorMsg("Error");
      setState("Error");
    }
  };

  return (
    <>
      <Container>
        <div className="contact-area section-padding pt-0 mt-5">
          <Container>
            <Row>
              <div className="col-lg-6">
                <div className="contact-message">
                  <h4 className="contact-title">Send us a message</h4>
                  <Form
                    id="contact-form"
                    method="post"
                    className="contact-form"
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <Form.Control
                          name="name"
                          placeholder="Name *"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <Form.Control
                          name="phone"
                          placeholder="Phone *"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <Form.Control
                          name="email"
                          placeholder="Email *"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <Form.Control
                          name="subject"
                          placeholder="Subject *"
                          type="text"
                        />
                      </div>
                      <div className="col-12">
                        <div className="contact2-textarea text-center">
                          <textarea
                            placeholder="Message *"
                            name="message"
                            className="form-control2"
                            required=""
                          ></textarea>
                        </div>
                        <div className="contact-btn">
                          <button className="btn btn-sqr" type="submit">
                            Send Message
                          </button>
                        </div>

                        {state === "Error" ? (
                          <ErrorState className="error-state">
                            {errorMsg}
                          </ErrorState>
                        ) : null}
                        {state === "Success" ? (
                          <SuccessState>
                            Message was sent seccesfuly!
                          </SuccessState>
                        ) : null}
                      </div>
                      <div className="col-12 d-flex justify-content-center">
                        <p className="form-messege"></p>
                      </div>
                    </Row>
                  </Form>
                </div>
              </div>
              <div className="col-lg-6">
                <ContactInfo />
              </div>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default ContactForm;
