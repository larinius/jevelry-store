import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import ProductCatalog from '../components/ui/Catalog';

function store(props) {
  const { t } = useTranslation("common");

    return (
        <div>
          <h1>{t("storeHeader")}</h1>
          <ProductCatalog/>
        </div>
    );
}

export default store;

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
  