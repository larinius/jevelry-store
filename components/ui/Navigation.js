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

  return (
    <>
      <div className="main-menu-area">
        <div className="main-menu">
          <nav className="desktop-menu">
            <ul>
              <li>
                <Link href="/" passHref>
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/store" passHref>
                  {t("store")}
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/contacts" passHref>
                  {t("contacts")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
