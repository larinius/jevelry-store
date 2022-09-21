import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductContext from "../context/ProductContext";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CarouselItem = ( {product} ) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [thumb, setThumb] = useState(product.images[0].url_small);
  const [thumbClass, setClass] = useState("pri-img");

  let images = [];

  product.images.forEach((element) => {
    images.push({
      original: element.url_original,
      thumbnail: element.url_small,
    });
  });

  const showSecThumb = () => {
    setThumb(product.images[1].url_small);
    setClass("sec-img");
  };

  const showPriThumb = () => {
    setThumb(product.images[0].url_small);
    setClass("pri-img");
  };

  const prodThumb = () => {
    if (product.images.length > 1) {
      return (
        <Image
          className={thumbClass}
          src={thumb}
          alt={product.name}
          width={255}
          height={255}
          onMouseOver={showSecThumb}
          onMouseLeave={showPriThumb}
        />
      );
    } else {
      return <Image src={thumb} alt={product.name} width={255} height={255} />;
    }
  };

  return (
    <>
      <div className="product-item">
        <figure className="product-thumb">
          <a href="#" onClick={handleShow}>
            {prodThumb()}
          </a>
        </figure>
        <div className="product-caption text-center">
          <div className="product-identity"></div>
          <h6 className="product-name">
            <a href="#">{product.name}</a>
          </h6>
        </div>
      </div>
    </>
  );
};

CarouselItem.propTypes = {
  product: PropTypes.object,
};

export default CarouselItem;
