import React from "react";
import { useTranslation, Trans } from "next-i18next";
import styles from "../../styles/Footer.module.css";

const Footer = () => {

  const { t } = useTranslation("common");

  return (
    <footer className={styles.footer}>
      <p>{t("footerContent")}</p>
    </footer>
  );
};

export default Footer;
