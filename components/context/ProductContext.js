import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsPage, setProductsPage] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(13);

  useEffect(() => {
    getProducts();

    const items = products.slice(start, end);
    setProductsPage(items);
  }, []);

  useEffect(() => {
    const items = products.slice(start, end);
    setProductsPage(items);
  }, [start, end]);

  const client = axios.create({
    baseURL: "/api/product",
    headers: {
      "Content-type": "application/json",
    },
  });

  function getProducts() {
    client.get().then((response) => {
      setProducts(response.data);
    });
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        productsPage,
        setStart,
        setEnd,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
