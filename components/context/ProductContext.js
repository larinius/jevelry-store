import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
    
  }, []);

  const BASE_URL =
    "https://LDGYjcpIMDmRAnWFTsPrqygUP1hlOVmXQwh4lywX:x@dimenshteyn.salesbinder.com/api/2.0";
  const USERNAME = "LDGYjcpIMDmRAnWFTsPrqygUP1hlOVmXQwh4lywX";
  const PASSWORD = "x";

  const client = axios.create({
    baseURL: { BASE_URL } + "/items.json",
    auth: {
      username: USERNAME,
      password: PASSWORD,
    },
  });

  const getProducts = async () => {
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

export default ProductProvider;
