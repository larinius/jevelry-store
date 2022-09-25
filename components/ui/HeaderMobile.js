import React, { useState, useEffect } from "react";

import Image from "next/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffCanvasArea from "../ui/OffCanvasArea";

const HeaderMobile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="mobile-main-header">
              <div className="mobile-logo">
                <a href="/">
                  <Image
                    src="/static/img/logo/logo.png"
                    alt="Site logo"
                    width={120}
                    height={35}
                  />
                </a>
              </div>
              <div className="mobile-menu-toggler">
                <div className="mini-cart-wrap"></div>
                <button className="mobile-menu-btn" onClick={handleShow}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <Image
              src="/static/img/logo/logo.png"
              alt="Site logo"
              width={120}
              height={35}
            />
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
