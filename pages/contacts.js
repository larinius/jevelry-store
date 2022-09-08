import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";

const contacts = () => {
  const { t } = useTranslation("common");

    return (
        <div>
            <h1>{t("contactsHeader")}</h1>
        </div>
    );
};

export default contacts;

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
  