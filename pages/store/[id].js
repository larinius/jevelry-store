import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { Row } from "react-bootstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect, useContext } from "react";

import CatalogSideMenu from "../../components/ui/CatalogSideMenu";
import PaginationBox from "../../components/ui/PaginationBox";
import ProductContext from "../../components/context/ProductContext";
import ProductGrid from "../../components/ui/ProductGrid";

const Category = ({ category }) => {
  const { setCategory } = useContext(ProductContext);

  useEffect(() => {
    setCategory(category);
  }, []);

  return (
    <div>
      <div className="shop-main-wrapper section-padding">
        <Container>
          <Row>
            <div className="col-lg-3 order-2 order-lg-1">
              <CatalogSideMenu />
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <ProductGrid />
              <PaginationBox />
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const { locale, req, res } = context;
  const category = context.params.id;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      ...getCookies({ req, res }),
      ...deleteCookie("test", { req, res }),
      category,
    },
  };
}
