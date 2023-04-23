import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaShoppingCart, FaShare } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Container, Button, Offcanvas } from "react-bootstrap";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  setShowCart,
} from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { CheckLg } from "react-bootstrap-icons";
import Link from "next/link";

const OffcanvasCart = () => {
  // @ts-ignore
  const showCart = useSelector((state) => state.showCart);
  // @ts-ignore
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setShowCart(false));
  const handleShow = () => dispatch(setShowCart(true));
  const handleRemove = (product) => dispatch(removeItem(product));

  const getTotal = () => {
    let quantity = 0;
    let price = 0;
    let weight = 0;

    if (!cart?.cart) return { price, quantity, weight };

    cart?.cart.forEach((item) => {
      quantity += parseInt(item.quantity);
      price += item.price * item.quantity;
      weight += item.weight * item.quantity;
    });

    return { price, quantity, weight };
  };

  const total = getTotal();

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
            <span className="cart-quantity">
              {product?.quantity}
              <strong>&times;</strong>
            </span>
            <span className="cart-price">{`$${product?.price}`}</span>
          </p>
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

  const MinicartList = ({ cart }) => {
    return (
      <>
        <ul>
          {cart.map((item) => {
            return (
                <li key={item.id} className="minicart-item" >
                  <MinicartItem product={item} />
                </li>
            );
          })}
        </ul>
      </>
    );
  };

  const MinicartPriceBox = ({ cart }) => {
    return (
      <>
        <div className="minicart-pricing-box">
          <ul>
            <li>
              <span>sub-total</span>
              <span>
                <strong>${total.price.toFixed(2)}</strong>
              </span>
            </li>
            <li>
              <span>quantity</span>
              <span>
                <strong>{total.quantity}</strong>
              </span>
            </li>
            <li>
              <span>weight</span>
              <span>
                <strong>{total.weight.toFixed(2)}g</strong>
              </span>
            </li>

            <li className="total">
              <span>total</span>
              <span>
                <strong>{total.price.toFixed(2)}</strong>
              </span>
            </li>
          </ul>
        </div>
      </>
    );
  };

  return <>
    <Offcanvas
      show={showCart}
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
              <MinicartList cart={cart} />
            </div>
            <MinicartPriceBox cart={cart} />
            <div className="minicart-button">
              <Link href="/cart" passHref onClick={handleClose}>

                <FaShoppingCart className="me-2" size={18} />Open Cart
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Offcanvas>
  </>;
};

export default OffcanvasCart;
