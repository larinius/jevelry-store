import React, { useState, useEffect, useContext } from "react";

import ProductGrid from "./ProductGrid";
import { useTranslation, Trans } from "next-i18next";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

const ProductCatalog = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="shop-main-wrapper section-padding">

        <Container>
        <h2 className="about-title">{t("storeHeader")}</h2>
          <Row>
            <ProductGrid />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductCatalog;
