import React, { useState, useEffect, useContext } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import ProductCatalog from "../../components/ui/ProductCatalog";
import ProductContext from "../../components/context/ProductContext";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
function CatalogueArea(props) {
  const { t } = useTranslation("common");
  const { setCategory, setSku, setSearchQuery } = useContext(ProductContext);

  useEffect(() => {
    setCategory("");
    setSku("");
    setSearchQuery("");
  }, []);


  return (
    <>
      <ProductCatalog />
    </>
  );
}

export default CatalogueArea;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
