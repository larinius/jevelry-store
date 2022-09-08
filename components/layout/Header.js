import React, { Fragment } from "react";
import { default as NextLink } from "next/link";
import styles from "../../styles/Header.module.css";
import { useTranslation, Trans } from "next-i18next";
import Navigation from "../ui/Navigation";
import LanguageSwitcher from "../ui/LanguageSwitcher";


const Header = ({ menu, altLangs, currentLang, isMyMainLanguage }) => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <header className={styles.header}>
      {/* <h1>{t("headerContent")}</h1> */}
        <Navigation />
        <LanguageSwitcher />
      </header>
    </Fragment>
  );
};

export default Header;
