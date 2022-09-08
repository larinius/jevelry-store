import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";

function about(props) {
  const { t } = useTranslation("common");

    return (
        <div>
           <h1>{t("aboutusHeader")}</h1> 
        </div>
    );
}

export default about;

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
  