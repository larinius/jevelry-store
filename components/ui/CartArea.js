import React, { useState, useEffect } from "react";
import {
  incrementQuantity,
  decrementQuantity,
  updateQuantity,
  removeItem,
  setShowCart,
} from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";

const CartArea = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (product) => dispatch(removeItem(product));
  const handleUpdate = (e, product) => {
    console.log(e.target.value);
    console.log(product);
    let p = { ...product, quantity: e.target.value };
    // p.quantity = e.target.value;
    console.log(p);
    dispatch(updateQuantity(p));
  };

  const getTotal = () => {
    let quantity = 0;
    let price = 0;
    let weight = 0;

    cart.forEach((item) => {
      quantity += parseInt(item.quantity);
      price += item.price * item.quantity;
      weight += item.weight * item.quantity;
    });

    return { price, quantity, weight };
  };

  const total = getTotal();

  const ProductRowItem = ({ product }) => {
    return (
      <tr key={product.id}>
        <td className="pro-thumbnail">
          <a href="#">
            <img className="img-fluid" src={product.image[0].path} />
          </a>
        </td>
        <td className="pro-title">
          <a href="#">{product.title}</a>
        </td>
        <td className="pro-price">
          <span>{product.price}</span>
        </td>
        <td className="pro-quantity">
          <div className="pro-qty">
            <input
              type="number"
              defaultValue={product.quantity}
              onBlur={(e) => handleUpdate(e, product)}
            />
          </div>
        </td>
        <td className="pro-weight">
          <div className="pro-wt">
            <span>{(product.quantity * product.weight).toFixed(2)}</span>
          </div>
        </td>
        <td className="pro-subtotal">
          <span>{(product.quantity * product.price).toFixed(2)}</span>
        </td>
        <td className="pro-remove">
          <a href="#" onClick={() => handleRemove(product)}>
            <FaTrashAlt size={22} color={"#777777"} />
          </a>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="cart-main-wrapper section-padding">
        <div className="container">
          <div className="section-bg-color">
            <div className="row">
              <div className="col-lg-12">
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="pro-thumbnail">Photo</th>
                        <th className="pro-title">Product</th>
                        <th className="pro-price">Price</th>
                        <th className="pro-quantity">Quantity</th>
                        <th className="pro-quantity">Weight</th>
                        <th className="pro-subtotal">Total</th>
                        <th className="pro-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => {
                        return <ProductRowItem key={item.id} product={item} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 ml-auto">
                <div className="p-2 cart-calculator-wrapper">
                  <div className="cart-calculate-items">
                    <h6>Cart Totals</h6>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Sub Total</td>
                            <td>
                              <span>${total.price.toFixed(2)}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Weight</td>
                            <td>
                              <span>{total.weight.toFixed(2)}g</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Shipping</td>
                            <td>$0</td>
                          </tr>
                          <tr className="total">
                            <td>Total</td>
                            <td className="total-amount">${total.price.toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="m-3">
                    <Link href="/checkout" passHref>
                      <a href="checkout.html" className="btn btn-sqr d-block">
                        Proceed Checkout
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartArea;
