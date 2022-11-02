import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const CartArea = () => {
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
                                            <th className="pro-thumbnail">Thumbnail</th>
                                            <th className="pro-title">Product</th>
                                            <th className="pro-price">Price</th>
                                            <th className="pro-quantity">Quantity</th>
                                            <th className="pro-subtotal">Total</th>
                                            <th className="pro-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="/static/img/product/product-1.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Diamond Exclusive Ornament</a></td>
                                            <td className="pro-price"><span>$295.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="pro-qty"><input type="text" value="1"/></div>
                                            </td>
                                            <td className="pro-subtotal"><span>$295.00</span></td>
                                            <td className="pro-remove"><a href="#"><FaTrashAlt size={22}/></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="/static/img/product/product-2.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Perfect Diamond Jewelry</a></td>
                                            <td className="pro-price"><span>$275.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="pro-qty"><input type="text" value="2"/></div>
                                            </td>
                                            <td className="pro-subtotal"><span>$550.00</span></td>
                                            <td className="pro-remove"><a href="#"><FaTrashAlt size={22}/></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="/static/img/product/product-3.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Handmade Golden Necklace</a></td>
                                            <td className="pro-price"><span>$295.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="pro-qty">
                                                    <input type="text" value="1" />
                                                </div>
                                            </td>
                                            <td className="pro-subtotal"><span>$295.00</span></td>
                                            <td className="pro-remove"><a href="#"><FaTrashAlt size={22}/></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="/static/img/product/product-4.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Diamond Exclusive Ornament</a></td>
                                            <td className="pro-price"><span>$110.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="pro-qty">
                                                    <input type="text" value="3" />
                                                </div>
                                            </td>
                                            <td className="pro-subtotal"><span>$110.00</span></td>
                                            <td className="pro-remove"><a href="#"><FaTrashAlt size={22}/></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="cart-update-option d-block d-md-flex justify-content-between">
                                <div className="apply-coupon-wrapper">
                                    <form action="#" method="post" className=" d-block d-md-flex">
                                        <input type="text" placeholder="Enter Your Coupon Code" required />
                                        <button className="btn btn-sqr">Apply Coupon</button>
                                    </form>
                                </div>
                                <div className="cart-update">
                                    <a href="#" className="btn btn-sqr">Update Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 ml-auto">

                            <div className="cart-calculator-wrapper">
                                <div className="cart-calculate-items">
                                    <h6>Cart Totals</h6>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tr>
                                                <td>Sub Total</td>
                                                <td>$230</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping</td>
                                                <td>$70</td>
                                            </tr>
                                            <tr className="total">
                                                <td>Total</td>
                                                <td className="total-amount">$300</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <a href="checkout.html" className="btn btn-sqr d-block">Proceed Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    );
}

export default CartArea;
