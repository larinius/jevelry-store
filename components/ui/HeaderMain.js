import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "../ui/Navigation";
import SearchBox from "../ui/SearchBox";

const HeaderMain = () => {
  return (
    <div className="header-main-area sticky">
      <Container>
        <Row className="align-items-center position-relative">
          <Navigation />
          <div className="col-lg-4">
            <div className="header-right d-flex align-items-center justify-content-xl-between justify-content-lg-end">
              <SearchBox />
              <div className="header-configure-area">
                <ul className="nav justify-content-end">
                  
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderMain;
