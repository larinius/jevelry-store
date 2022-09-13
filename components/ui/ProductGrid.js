import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import Image from "next/image";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <div className="col-lg-12">
        <div className="shop-product-wrapper">
          <div className="shop-product-wrap grid-view row mbn-30">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
