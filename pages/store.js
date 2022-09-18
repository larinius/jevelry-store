import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import ProductCatalog from "../components/ui/ProductCatalog";

function store(props) {
  const { t } = useTranslation("common");

  return (
    <>
      <ProductCatalog />
    </>
  );
}

export default store;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
