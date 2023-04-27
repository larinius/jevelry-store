import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { Row } from "react-bootstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";

import Container from "react-bootstrap/Container";
import React, { useState, useEffect, useContext } from "react";

import ProductArea from "../../components/ui/ProductArea";
import ProductContext from "../../components/context/ProductContext";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/ui/LoadingSpinner";


const Product = ({ sku }) => {

  const { setSku } = useContext(ProductContext);
  const { category } = useContext(ProductContext);
  const {products} = useContext(ProductContext);

  useEffect(() => {
    setSku(sku);
  }, [sku]);

 
  return (
    <>
      <div className="shop-main-wrapper section-padding">
        <ProductArea product={products[0]} />
      </div>
    </>
  );
};

export default Product;

export async function getServerSideProps(context) {
  const { locale, req, res } = context;
  const sku = context.params.id.replace("sku-", "");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      ...getCookies({ req, res }),
      sku,
    },
  };
}
