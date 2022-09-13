import React, { useContext } from "react";
import PropTypes from "prop-types";
import ProductContext from "../context/ProductContext";
import Image from "next/image";

function ProductCard({ product }) {
  console.log(product);
  return (
    <>
      <div className="col-md-4 col-sm-6">
        <div className="product-item">
          <figure className="product-thumb">
            <a href="#">
              <Image
                className="pri-img"
                src={product.img}
                alt={product.name}
                width={350}
                height={350}
              />
            </a>
          </figure>
          <div className="product-caption text-center">
            <div className="product-identity">
              <p className="manufacturer-name">
                <a href="product-details.html">{product.name}</a>
              </p>
            </div>

            <h6 className="product-name">
              <a href="product-details.html">Perfect Diamond Jewelry</a>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
