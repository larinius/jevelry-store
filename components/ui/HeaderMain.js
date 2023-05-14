import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Navigation from "../ui/Navigation";
import SearchBox from "../ui/SearchBox";
import dynamic from "next/dynamic";
import Logo from "./Logo";
const HeaderConfigureAreaNoSSR = dynamic(() => import("./HeaderConfigureArea"), {
  ssr: false,
});

const HeaderMain = () => {
  return (
    <div className="header-main-area sticky">
      <Container>
        <Row className="align-items-center position-relative">
          <Col lg={2}>
            <Logo />
          </Col>
          <Col lg={5} className="position-static">
            <Navigation />
          </Col>
          <Col lg={5}>
            <div className="header-right d-flex align-items-center justify-content-xl-between justify-content-lg-end">
              <SearchBox />
              <HeaderConfigureAreaNoSSR />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderMain;
