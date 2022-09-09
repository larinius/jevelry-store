import React, { Fragment } from "react";
import { default as NextLink } from "next/link";
import styles from "../../styles/Header.module.css";
import { useTranslation, Trans } from "next-i18next";

import HeaderTop from "../ui/HeaderTop";
import HeaderMain from "../ui/HeaderMain";

const Header = ({ menu, altLangs, currentLang, isMyMainLanguage }) => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <header className="header-area header-wide">
        <div className="main-header d-none d-lg-block">
          <HeaderTop />
          <HeaderMain />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
