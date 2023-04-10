import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(
    process.env.NEXT_PUBLIC_PRODUCTS_LIMIT || 24
  );
  const [pageCount, setPageCount] = useState([]);

  const [category, setCategory] = useState("");
  const [sku, setSku] = useState("");
  const [categories, setCategories] = useState([]);

  let query = `/api/product/?limit=${limit}&page=${page}`;

  if (category) {
    query += `&category=${category}`;
  }
  if (sku) {
    query += `&sku=${sku}`;
  }

  const {
    isLoading,
    error,
    data = [],
  } = useQuery([query], () => axios.get(query));

  useEffect(() => {
    if (!isLoading && !error) {
      console.log(data.data);
      setProducts(data.data.products);
      setMeta(data.data.meta);
      setCategories(data.data.meta?.categories);
      setPageCount(Math.ceil(data.data.products?.length / limit));
    }
  }, [isLoading, error, data, page, category, limit, sku]);

  return (
    <ProductContext.Provider
      value={{
        products,
        category,
        categories,
        sku,
        limit,
        page,
        pageCount,
        meta,
        setSku,
        setLimit,
        setPage,
        setCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
