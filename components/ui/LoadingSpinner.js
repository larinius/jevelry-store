import Spinner from "react-bootstrap/Spinner";

import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="vw-100 h-100 align-middle">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;
