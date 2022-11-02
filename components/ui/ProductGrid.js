import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProductGrid = () => {
  const { category } = useContext(ProductContext);

  const query = `/api/product?category=${category || "all"}`;

  const {
    isLoading,
    error,
    data,
  } = useQuery([query], () => axios.get(query));  

  return (
    <>
      <div className="col-lg-12">
        <div className="shop-product-wrapper">
          <div className="shop-product-wrap grid-view row mbn-30">

              { data?.data?.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
