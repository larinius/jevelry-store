import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

const WishlistArea = () => {
  return (
    <>
      <div className="wishlist-main-wrapper section-padding">
        <div className="container">
          <div className="section-bg-color">
            <div className="row">
              <div className="col-lg-12">
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="pro-thumbnail">Thumbnail</th>
                        <th className="pro-title">Product</th>
                        <th className="pro-price">Price</th>
                        <th className="pro-quantity">Stock Status</th>
                        <th className="pro-subtotal">Add to Cart</th>
                        <th className="pro-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pro-thumbnail">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/static/img/product/product-5.jpg"
                              alt="Product"
                            />
                          </a>
                        </td>
                        <td className="pro-title">
                          <a href="#">Diamond Exclusive Ornament</a>
                        </td>
                        <td className="pro-price">
                          <span>$295.00</span>
                        </td>
                        <td className="pro-quantity">
                          <span className="text-success">In Stock</span>
                        </td>
                        <td className="pro-subtotal">
                          <a href="cart.html" className="btn btn-sqr">
                            Add to Cart
                          </a>
                        </td>
                        <td className="pro-remove">
                          <a href="#">
                            <FaTrashAlt size={22}/>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pro-thumbnail">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/static/img/product/product-6.jpg"
                              alt="Product"
                            />
                          </a>
                        </td>
                        <td className="pro-title">
                          <a href="#">Perfect Diamond Jewellery</a>
                        </td>
                        <td className="pro-price">
                          <span>$275.00</span>
                        </td>
                        <td className="pro-quantity">
                          <span className="text-success">In Stock</span>
                        </td>
                        <td className="pro-subtotal">
                          <a href="cart.html" className="btn btn-sqr">
                            Add to Cart
                          </a>
                        </td>
                        <td className="pro-remove">
                          <a href="#">
                            <FaTrashAlt size={22}/>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pro-thumbnail">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/static/img/product/product-7.jpg"
                              alt="Product"
                            />
                          </a>
                        </td>
                        <td className="pro-title">
                          <a href="#">Handmade Golden Necklace</a>
                        </td>
                        <td className="pro-price">
                          <span>$295.00</span>
                        </td>
                        <td className="pro-quantity">
                          <span className="text-danger">Stock Out</span>
                        </td>
                        <td className="pro-subtotal">
                          <a href="cart.html" className="btn btn-sqr disabled">
                            Add to Cart
                          </a>
                        </td>
                        <td className="pro-remove">
                          <a href="#">
                            <FaTrashAlt size={22}/>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pro-thumbnail">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="/static/img/product/product-8.jpg"
                              alt="Product"
                            />
                          </a>
                        </td>
                        <td className="pro-title">
                          <a href="#">Diamond Exclusive Ornament</a>
                        </td>
                        <td className="pro-price">
                          <span>$110.00</span>
                        </td>
                        <td className="pro-quantity">
                          <span className="text-success">In Stock</span>
                        </td>
                        <td className="pro-subtotal">
                          <a href="cart.html" className="btn btn-sqr">
                            Add to Cart
                          </a>
                        </td>
                        <td className="pro-remove">
                          <a href="#">
                            <FaTrashAlt size={22}/>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistArea;
