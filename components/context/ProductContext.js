import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const client = axios.create({
    baseURL: "/api/product",
    headers: {
      "Content-type": "application/json",
    },
  });

  function getProducts (){
    client.get().then((response) => {
      setProducts(response.data);
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
