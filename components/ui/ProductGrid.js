import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";

const ProductGrid = () => {
    // const { products } = useContext(ProductContext);
    // console.log({products})

    return (
        <>
        <ul>
          {/* {products.map((item) => (
            <li key={item.id} product={item} />
          ))} */}
        </ul>
        </>
      );
}
 
export default ProductGrid;