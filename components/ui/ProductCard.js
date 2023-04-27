import Link from "next/link";
import Image from "next/image";
import { Modal, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import Dummy from "../../public/static/img/dummy.jpg";

import ProductContext from "../context/ProductContext";

function ProductCard({ product }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let images = [];

  product.image.forEach((item) => {
    images.push({
      original: item.path,
      thumbnail: item.path.replace("/product/", "/thumb/"),
    });
  });

  const [thumb, setThumb] = useState(Dummy);
  const [thumbClass, setClass] = useState("pri-img");

  useEffect(() => {
    if (product?.image[0]?.path !== undefined) {
      setThumb(product?.image[0]?.path);
    }
  }, [product]);

  const handleImageError = () => {
    setThumb(Dummy);
  };

  const showSecThumb = () => {
    setThumb(product.image[1].path || Dummy);
    setClass("sec-img");
  };

  const showPriThumb = () => {
    setThumb(product.image[0].path || Dummy);
    setClass("pri-img");
  };

  const ProdThumb = () => {
    if (product.image.length > 1) {
      return (
        <Image
          // className={thumbClass}
          src={thumb}
          alt={product.title}
          width={255}
          height={255}
          // onMouseOver={showSecThumb}
          // onMouseLeave={showPriThumb}
          onError={handleImageError}
        />
      );
    } else {
      return (
        <Image
          src={thumb}
          alt={product.title}
          width={255}
          height={255}
          onError={handleImageError}
        />
      );
    }
  };

  return (
    <>
      <div className="col-md-4 col-sm-6">
        <div className="product-item">
          <figure className="product-thumb">
            <Link passHref href={`/product/sku-${product.sku.toLowerCase()}`}>
              <ProdThumb />
            </Link>
          </figure>
          <div className="product-caption text-center">
            <div className="product-identity">
              <p className="manufacturer-name">
                <a>{product.brand.title}</a>
              </p>
            </div>

            <h6 className="product-name">
              <a>{product.title}</a>
            </h6>
            <div className="price-box">
              <span className="price-regular">${product.price}</span>
              <span className="price-old">
                <del>
                  {product?.priceBefore ? `$${product?.priceBefore}` : null}
                </del>
              </span>
            </div>
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
      <Modal.Header closeButton>{product.title}</Modal.Header>
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
  </>);
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
