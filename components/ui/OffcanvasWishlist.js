import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaShoppingCart, FaShare } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Container, Button, Offcanvas } from "react-bootstrap";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  setShowWishlist,
} from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { CheckLg } from "react-bootstrap-icons";
import Link from "next/link";

const OffcanvasWishlist = () => {
  // @ts-ignore
  const showWishlist = useSelector((state) => state.showWishlist);
  // @ts-ignore
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setShowWishlist(false));
  const handleShow = () => dispatch(setShowWishlist(true));
  const handleRemove = (product) => dispatch(removeFromWishlist(product));

  const handleAddToCart = (product) => {
    let prod = { ...product };
    prod.quantity = 1;
    dispatch(addToCart(prod));
  };

  const MinicartItem = ({ product }) => {
    return (
      <>
        <div className="minicart-thumb">
          <a href="product-details.html">
            <Image src={product.image[0].path} width={100} height={100} />
          </a>
        </div>
        <div className="minicart-content">
          <h3 className="product-name">
            <a href="#">{product?.title}</a>
          </h3>
          <p>
            <span className="cart-price">{`$${product?.price} - ${product?.weight}g`}</span>
          </p>
          <div className="wishlist-item">
            <a href="#" onClick={() => handleAddToCart(product)}>
              <FaShoppingCart size={22} /> Add to cart
            </a>
          </div>
        </div>
        <Button
          className="minicart-remove"
          onClick={() => handleRemove(product)}
          variant={"light"}
        >
          <GrClose />
        </Button>
      </>
    );
  };

  const MinicartList = ({ wishlist }) => {
    return (
      <>
        <ul>
          {wishlist.map((item) => {
            return (
              <li key={item.id} className="minicart-item">
                <MinicartItem product={item} />
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <Offcanvas
        show={showWishlist}
        onHide={handleClose}
        placement={"end"}
        scroll={false}
        className="offcanvas-minicart-wrapper"
      >
        <Container>
          <div className="minicart-inner-content">
            <div className="mt-3 minicart-close">
              <Button onClick={handleClose} variant={"light"}>
                <GrClose size={32} />
              </Button>
            </div>
            <div className="minicart-content-box">
              <div className="minicart-item-wrapper">
                <MinicartList wishlist={wishlist} />
              </div>
            </div>
          </div>
        </Container>
      </Offcanvas>
    </>
  );
};

export default OffcanvasWishlist;
