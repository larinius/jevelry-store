import React, { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsLimit = parseInt(process.env.NEXT_PUBLIC_PAGINATION_LIMIT);
  const pageCount = Math.ceil(products.length / productsLimit);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});


  useEffect(() => {
    if (products != null && products.length > 0) {
      const pp = splitByPages(products, productsLimit, 1);
      setCurrentProducts(pp);
    }
  }, [products]);

  useEffect(() => {
    const limit = parseInt(process.env.NEXT_PUBLIC_PAGINATION_LIMIT);

    const items = splitByPages(products, limit, currentPage);

    setCurrentProducts(items);
  }, [currentPage]);

  const splitByPages = (arr, limit, page) => {
    let pProducts = [];

    for (let i = 0; i < arr.length; i += limit) {
      let tempArray;
      tempArray = arr.slice(i, i + limit);
      pProducts.push(tempArray);
    }

    return pProducts[page - 1];
  };


  return (
    <ProductContext.Provider
      value={{
        products,
        currentProducts,
        currentPage,
        currentCategory,
        setCurrentPage,
        category,
        setCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
