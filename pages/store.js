import React, { useState, useEffect, useContext } from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import ProductCatalog from "../components/ui/ProductCatalog";
import ProductContext from "../components/context/ProductContext";

function store(props) {
  const { t } = useTranslation("common");

  const { setCategory } = useContext(ProductContext);

  useEffect(() => {
    setCategory("all");
  }, []);

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
