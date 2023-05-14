import Spinner from "react-bootstrap/Spinner";
import {Col} from "react-bootstrap";
import React from "react";

const LoadingSpinner = (height) => {
  return (
    <Col className="d-flex justify-content-center align-items-center" style={{ height: `${height}px` }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Col>
  );
};

export default LoadingSpinner;
