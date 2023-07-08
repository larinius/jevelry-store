import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { Row, Col } from "react-bootstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect, useContext } from "react";

import CatalogSideMenu from "../../../components/ui/CatalogSideMenu";
import PaginationBox from "../../../components/ui/PaginationBox";
import ProductContext from "../../../components/context/ProductContext";
import ProductGrid from "../../../components/ui/ProductGrid";

const SearchArea = ({ query }) => {
  const { searchQuery, setSearchQuery, setSku, setCategory } = useContext(ProductContext);

  useEffect(() => {
    setSearchQuery(query);
    setSku("");
    setCategory("");
  }, [query]);

  return (
    <div>
      <div className="shop-main-wrapper section-padding">
        <Container>
          <Row>
            <Col lg={3} className="order-2 order-lg-1">
              <CatalogSideMenu />
            </Col>
            <Col lg={9} className=" order-1 order-lg-2">
              <ProductGrid />
              <PaginationBox />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SearchArea;

export async function getServerSideProps(context) {
  const { locale, req, res } = context;
  const query = context.params.query;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      ...getCookies({ req, res }),
      query,
    },
  };
}
