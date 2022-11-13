import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useUser from "/lib/useUser";

const CheckoutArea = () => {
  const { user } = useUser();

  return (
    <>
      <div className="checkout-page-wrapper section-padding">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="checkoutaccordion" id="checkOutAccordion">
                <div className="card">
                  <h6>
                    Returning Customer?{" "}
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target="#logInaccordion"
                    >
                      Click Here To Login
                    </span>
                  </h6>

                  <div
                    id="logInaccordion"
                    className="collapse"
                    data-parent="#checkOutAccordion"
                  >
                    <div className="card-body">
                      <p>
                        If you have shopped with us before, please enter your
                        details in the boxes below. If you are a new customer,
                        please proceed to the Billing &amp; Shipping section.
                      </p>
                      <div className="login-reg-form-wrap mt-20">
                        <Row>
                          <Col className="lg-7 m-auto">
                            <form action="#" method="post">
                              <Row>
                                <Col className="md-12">
                                  <div className="single-input-item">
                                    <input
                                      type="email"
                                      placeholder="Enter your Email"
                                      required
                                    />
                                  </div>
                                </Col>

                                <Col className="md-12">
                                  <div className="single-input-item">
                                    <input
                                      type="password"
                                      placeholder="Enter your Password"
                                      required
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <div className="single-input-item">
                                <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
                                  <div className="remember-meta">
                                    <div className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="rememberMe"
                                        required
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="rememberMe"
                                      >
                                        Remember Me
                                      </label>
                                    </div>
                                  </div>

                                  <a href="#" className="forget-pwd">
                                    Forget Password?
                                  </a>
                                </div>
                              </div>

                              <div className="single-input-item">
                                <button className="btn btn-sqr">Login</button>
                              </div>
                            </form>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h6>
                    Have A Coupon?{" "}
                    <span data-bs-toggle="collapse">
                      Click Here To Enter Your Code
                    </span>
                  </h6>
                  <div id="couponaccordion" className="collapse">
                    <div className="card-body">
                      <div className="cart-update-option">
                        <div className="apply-coupon-wrapper">
                          <form
                            action="#"
                            method="post"
                            className=" d-block d-md-flex"
                          >
                            <input
                              type="text"
                              placeholder="Enter Your Coupon Code"
                              required
                            />
                            <button className="btn btn-sqr">
                              Apply Coupon
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="checkout-billing-details-wrap">
                <h5 className="checkout-title">Billing Details</h5>
                <div className="billing-form-wrap">
                  <form action="#">
                    <Row>
                      <Col className="md-6">
                        <div className="single-input-item">
                          <label htmlFor="f_name" className="required">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="f_name"
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </Col>

                      <Col className="md-6">
                        <div className="single-input-item">
                          <label htmlFor="l_name" className="required">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="l_name"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className="single-input-item">
                      <label htmlFor="email" className="required">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div className="single-input-item">
                      <label htmlFor="phone">Phone</label>
                      <input type="text" id="phone" placeholder="Phone" />
                    </div>

                    <div className="checkout-box-wrap">
                      <div className="single-input-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="create_pwd"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="create_pwd"
                          >
                            Create an account?
                          </label>
                        </div>
                      </div>
                      <div className="account-create single-form-row">
                        <p>
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </p>
                        <div className="single-input-item">
                          <label htmlFor="pwd" className="required">
                            Account Password
                          </label>
                          <input
                            type="password"
                            id="pwd"
                            placeholder="Account Password"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="checkout-box-wrap"></div>

                    <div className="single-input-item">
                      <label htmlFor="ordernote">Order Note</label>
                      <textarea
                        name="ordernote"
                        id="ordernote"
                        cols="30"
                        rows="3"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="order-summary-details">
                <h5 className="checkout-title">Your Order Summary</h5>
                <div className="order-summary-content">
                  <div className="order-summary-table table-responsive text-center">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Products</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="product-details.html">
                              Suscipit Vestibulum <strong> × 1</strong>
                            </a>
                          </td>
                          <td>$165.00</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="product-details.html">
                              Ami Vestibulum suscipit <strong> × 4</strong>
                            </a>
                          </td>
                          <td>$165.00</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="product-details.html">
                              Vestibulum suscipit <strong> × 2</strong>
                            </a>
                          </td>
                          <td>$165.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td>Sub Total</td>
                          <td>
                            <strong>$400</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Total Amount</td>
                          <td>
                            <strong>$470</strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="order-payment-method">

                    <div className="summary-footer-area">
                      <div className="custom-control custom-checkbox mb-20">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="terms"
                          required
                        />
                        <label className="custom-control-label" htmlFor="terms">
                          I have read and agree to the website{" "}
                          <a href="index.html">terms and conditions.</a>
                        </label>
                      </div>
                      <button type="submit" className="btn btn-sqr">
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CheckoutArea;
