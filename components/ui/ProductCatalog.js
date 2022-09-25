import React, { useState, useEffect, useContext } from "react";

import ProductGrid from "./ProductGrid";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import PaginationBox from "./PaginationBox";
import CatalogSideMenu from "./CatalogSideMenu";

const ProductCatalog = () => {

  return (
    <>
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
    </>
  );
};

export default ProductCatalog;
