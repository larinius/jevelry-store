import React, { createContext, useState, useEffect, useCallback } from "react";
import {useProduct} from "../../lib/apiHooks";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(process.env.NEXT_PUBLIC_PRODUCTS_LIMIT || 24);
  const [pageCount, setPageCount] = useState([]);

  const [category, setCategory] = useState("");
  const [sku, setSku] = useState("");
  const [categories, setCategories] = useState([]);

  const options = `limit=${limit}&page=${page}${category ? `&category=${category}` : ""}${sku ? `&sku=${sku}` : ""}`;

  const { isLoading, error, product } = useProduct(null, options);

  useEffect(() => {
    if (!isLoading && !error && product) {
      setProducts(product.products);
      setMeta(product.meta);
      setCategories(product.meta?.categories);
      setPageCount(Math.ceil(product.products?.length / limit));
    }
  }, [isLoading, error, page, category, limit, sku]);

  const setSkuCallback = useCallback(setSku, [setSku]);
  const setLimitCallback = useCallback(setLimit, [setLimit]);
  const setPageCallback = useCallback(setPage, [setPage]);
  const setCategoryCallback = useCallback(setCategory, [setCategory]);

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
        setSku: setSkuCallback,
        setLimit: setLimitCallback,
        setPage: setPageCallback,
        setCategory: setCategoryCallback,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
