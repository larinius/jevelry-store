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

  const [thumb, setThumb] = useState(product.image[0].path);
  const [thumbClass, setClass] = useState("pri-img");

  let images = [];

  product.image.forEach((item) => {
    images.push({
      original: item.path,
      thumbnail: item.path.replace("/product/", "/thumb/"),
    });
  });

  const showSecThumb = () => {
    setThumb(product.image[1].path);
    setClass("sec-img");
  };

  const showPriThumb = () => {
    setThumb(product.image[0].path);
    setClass("pri-img");
  };

  const prodThumb = () => {
    if (product.image.length > 1) {
      return (
        <Image
          draggable={false}
          className={thumbClass}
          src={thumb}
          alt={product.title}
          width={350}
          height={350}
          onMouseOver={showSecThumb}
          onMouseLeave={showPriThumb}
        />
      );
    } else {
      return <Image src={thumb} alt={product.title} width={350} height={350} />;
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
            <a href="#">{product.title}</a>
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
