import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

const SuccessState = styled.p`
  color: #087d07;
  padding-top: 20px;
`;
const ErrorState = styled.p`
  color: #b00020;
  padding-top: 20px;
`;

function Subscribe() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();

    setState("Loading");

    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("Success");
      setEmail("");
    } catch (e) {
      setErrorMsg(e.response.data.error);
      setState("Error");
    }
  };

  return (
    <div className="newsletter-wrapper">
      <h6 className="widget-title-text">Signup for newsletter</h6>
      <Form onSubmit={subscribe} className="newsletter-inner" id="mc-form">
        <Form.Control
          type="email"
          className="news-field"
          id="mc-form"
          placeholder="Enter your email address"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="news-btn"
          id="mc-submit"
          disabled={state === "Loading"}
          type="submit"
          onClick={subscribe}
        >
          Subscribe
        </button>

        {state === "Error" && (
          <ErrorState className="error-state">{errorMsg}</ErrorState>
        )}
        {state === "Success" && (
          <SuccessState>Awesome, you've been subscribed!</SuccessState>
        )}
      </Form>
    </div>
  );
}

export default Subscribe;
