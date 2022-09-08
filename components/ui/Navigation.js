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
    <Fragment>
      <Navbar>
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand href="/">
              <Image
                src="/../public/logo.png"
                alt="Site logo"
                width={200}
                height={44}
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
    </Fragment>
  );
};

export default Navigation;
