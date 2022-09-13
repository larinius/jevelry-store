import React, { useState, useEffect, useContext } from "react";
import ProductContext, { ProductProvider } from "../context/ProductContext";

import ProductGrid from "./ProductGrid";

import Container from "react-bootstrap/Container";

const ProductCatalog = () => {
  const products = useContext(ProductContext);

  return (
    <>
      <ProductProvider>
        <Container className="border my-3">
            <ProductGrid/>
        </Container>
      </ProductProvider>
    </>
  );
};

export default ProductCatalog;
