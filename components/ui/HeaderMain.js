import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

import Navigation from "../ui/Navigation";
import SearchBox from "../ui/SearchBox";

const HeaderMain = () => {
  return (
    <div className="header-main-area sticky">
      <Container>
        <Row className="align-items-center position-relative">
          <div class="col-lg-2">
            <div class="logo">
              <a href="/">
                <Image
                  src="/static/img/logo/logo.png"
                  alt="Site logo"
                  width={200}
                  height={44}
                />
              </a>
            </div>
          </div>

          <Navigation />
          <div className="col-lg-4">
            <div className="header-right d-flex align-items-center justify-content-xl-between justify-content-lg-end">
              <SearchBox />
              <div className="header-configure-area">
                <ul className="nav justify-content-end"></ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderMain;
