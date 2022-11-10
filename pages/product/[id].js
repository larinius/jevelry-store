import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { Row } from "react-bootstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { sessionOptions } from "/lib/session";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { withIronSessionSsr } from "iron-session/next";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect, useContext } from "react";

import ProductArea from "../../components/ui/ProductArea";
import ProductContext from "../../components/context/ProductContext";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Product = ({ sku }) => {

  const query = `/api/product/${sku}`;

  const { isLoading, error, data: product } = useQuery([query], () => axios.get(query));


  useEffect(() => {
    // setCategory(category);
  }, []);

  return (
    <>
      <div className="shop-main-wrapper section-padding">
        <ProductArea product={product?.data} />
      </div>
    </>
  );
};

export default Product;

export const getServerSideProps = withIronSessionSsr(async function (context) {
  const { locale, req, res } = context;
  const sku = context.params.id;

  return {
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
        ...getCookies({ req, res }),
        ...{ user: req.session.user },
        sku,
    },
  };
}, sessionOptions);
