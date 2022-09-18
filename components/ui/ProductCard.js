import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductContext from "../context/ProductContext";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ProductCard({ product }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let images = [];

  product.images.forEach((element) => {
    images.push({
      original: element.url_original,
      thumbnail: element.url_small,
    });
  });

  const [thumb, setThumb] = useState(product.images[0].url_medium);
  const [thumbClass, setClass] = useState("pri-img");

  const showSecThumb = () => {
    setThumb(product.images[1].url_medium);
    setClass("sec-img");
  };

  const showPriThumb = () => {
    setThumb(product.images[0].url_medium);
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
      <div className="col-md-4 col-sm-6">
        <div className="product-item">
          <figure className="product-thumb">
            <a onClick={handleShow}>{prodThumb()}</a>
          </figure>
          <div className="product-caption text-center">
            <div className="product-identity">
              <p className="manufacturer-name">
                <a>Gold Jewelry</a>
              </p>
            </div>

            <h6 className="product-name">
              <a>{product.name}</a>
            </h6>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        size="lg"
        centered
        className={show ? "show" : ""}
      >
        <Modal.Header closeButton>{product.name}</Modal.Header>
        <Modal.Body>
          <ImageGallery
            items={images}
            lazyLoad={false}
            showPlayButton={false}
            isRTL={false}
            showIndex={false}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
