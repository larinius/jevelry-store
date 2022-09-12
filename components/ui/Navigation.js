import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import styles from "../../styles/Nav.module.css";

const Navigation = () => {
  const { t } = useTranslation("common");

  let home = t("home");

  return (
    <div className="col-lg-6 position-static">
      <div className="main-menu-area">
        <div className="main-menu">
          <Navbar>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="desktop-menu">
                  <Link href="/" passHref>
                    <Nav.Link>{home}</Nav.Link>
                  </Link>
                  <Link href="/store" passHref>
                    <Nav.Link>{t("store")}</Nav.Link>
                  </Link>
                  <Link href="/about" passHref>
                    <Nav.Link>{t("about")}</Nav.Link>
                  </Link>
                  <Link href="/contacts" passHref>
                    <Nav.Link>{t("contacts")}</Nav.Link>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
