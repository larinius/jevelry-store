import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

import Navigation from "../ui/Navigation";
import SearchBox from "../ui/SearchBox";
import HeaderConfigureArea from "./HeaderConfigureArea";
import Logo from "./Logo";

const HeaderMain = () => {
  return (
    <div className="header-main-area sticky">
      <Container>
        <Row className="align-items-center position-relative">
          <div className="col-lg-2">
            <Logo />
          </div>
          <div className="col-lg-5 position-static">
            <Navigation />
          </div>
          <div className="col-lg-5">
            <div className="header-right d-flex align-items-center justify-content-xl-between justify-content-lg-end">
              <SearchBox />
              <HeaderConfigureArea />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderMain;
