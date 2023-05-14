import React, { useState } from "react";
import { Container, Row, Col, Image, Offcanvas } from "react-bootstrap";
import OffCanvasArea from "../ui/OffCanvasArea";
import Link from "next/link";

import dynamic from "next/dynamic";
const HeaderConfigureAreaNoSSR = dynamic(() => import("./HeaderConfigureArea"), {
  ssr: false,
});

const HeaderMobile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12}>
            <div className="mobile-main-header">
              <div className="mobile-logo">
                <Link href="/">
                  <Image src="/static/img/logo/logo.png" alt="Site logo" width={120} height={35} />
                </Link>
              </div>
              <div className="mobile-menu-toggler">
                <div className="mini-cart-wrap">
                  <HeaderConfigureAreaNoSSR />
                </div>
                <button className="mobile-menu-btn" onClick={handleShow}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image src="/static/img/logo/logo.png" alt="Site logo" width={120} height={35} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <OffCanvasArea />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HeaderMobile;
