import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useUser } from "../../lib/apiHooks";
import { useSelector, useDispatch } from "react-redux";
import { axiosProvider } from "../../lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useOrderCode, useCreateOrder, useSettings } from "../../lib/apiHooks";
import qs from "qs";

const CheckoutArea = () => {
  const { axiosInstance: axios } = axiosProvider();
  const { user } = useUser();
  const { settings } = useSettings();
  const [newUser, setNewUser] = useState({});
  const [newOrder, setNewOrder] = useState({});
  const cart = useSelector((state) => state.cart);
  const { ordercode } = useOrderCode();

  useEffect(() => {
    console.log(settings);
  }, [settings]);

  const handleSubmitOrder = () => {
    const { firstName, lastName, email, phone } = newUser;
    const { weight } = getSubTotal();
    const order = {
      ...newOrder,
      user: { name: `${firstName} ${lastName}`, email, phone },
      products: cart,
      total: Number(total),
      weight,
      discount: 0,
      deliveryPrice: 0,
      code: ordercode,
    };
    addOrder.mutate(order);
    console.log(order);
  };

  const addOrder = useMutation((payload) => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/order`;
    axios.post(apiUrl, qs.stringify(payload)).then((response) => {
      console.log(response.status);
      if (response.status === 201) {
        console.log("Order created");
      } else {
        console.log("Order not created. Error");
      }
      return response;
    });
  });

  const getSubTotal = () => {
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

  const subtotal = useMemo(() => {
    const { price } = getSubTotal();
    return Number(price).toFixed(2);
  }, [cart]);

  const weight = useMemo(() => {
    const { weight } = getSubTotal();
    return Number(weight).toFixed(2);
  }, [cart]);

  const vat = useMemo(() => {
    if (!settings || settings.length == 0) return 0;
    const vatValue = Number(settings.find((setting) => setting.title === "vat").value) / 100;

    return Number(vatValue * subtotal).toFixed(2);
  }, [settings, subtotal]);

  const total = useMemo(() => {
    console.log(subtotal, vat);
    return Number(Number(subtotal) + Number(vat)).toFixed(2);
  }, [vat, subtotal]);

  const ProductList = () => {
    return (
      <>
        {cart.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <strong>
                  {item.title} - {item.sku}
                </strong>{" "}
                x {item.quantity}
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          );
        })}
      </>
    );
  };

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
                    <span data-bs-toggle="collapse" data-bs-target="#logInaccordion">
                      Click Here To Login
                    </span>
                  </h6>

                  <div id="logInaccordion" className="collapse" data-parent="#checkOutAccordion">
                    <div className="card-body">
                      <p>
                        If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please
                        proceed to the Billing &amp; Shipping section.
                      </p>
                      <div className="login-reg-form-wrap mt-20">
                        <Row>
                          <Col className="lg-7 m-auto">
                            <form action="#" method="post">
                              <Row>
                                <Col className="md-12">
                                  <div className="single-input-item">
                                    <input type="email" placeholder="Enter your Email" required />
                                  </div>
                                </Col>

                                <Col className="md-12">
                                  <div className="single-input-item">
                                    <input type="password" placeholder="Enter your Password" required />
                                  </div>
                                </Col>
                              </Row>

                              <div className="single-input-item">
                                <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
                                  <div className="remember-meta">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="rememberMe" required />
                                      <label className="custom-control-label" htmlFor="rememberMe">
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
                            required
                            id="f_name"
                            placeholder="First Name"
                            onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
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
                            required
                            id="l_name"
                            placeholder="Last Name"
                            onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
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
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      />
                    </div>

                    <div className="single-input-item">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="Phone"
                        onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                      />
                    </div>

                    <div className="checkout-box-wrap">
                      <div className="single-input-item">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="create_pwd" />
                          <label className="custom-control-label" htmlFor="create_pwd">
                            Create an account?
                          </label>
                        </div>
                      </div>
                      <div className="account-create single-form-row">
                        <p>
                          Create an account by entering the information below. If you are a returning customer please login at the top of
                          the page.
                        </p>
                        <div className="single-input-item">
                          <label htmlFor="pwd" className="required">
                            Account Password
                          </label>
                          <input type="password" id="pwd" placeholder="Account Password" required />
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
                        onChange={(e) => setNewOrder({ ...newOrder, note: e.target.value })}
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
                        <ProductList />
                      </tbody>

                      <tfoot>
                        <tr>
                          <td>Sub Total</td>
                          <td>
                            <strong>${subtotal}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td>
                            <strong>{weight}g</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>VAT</td>
                          <td>
                            <strong>${vat}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Total Amount</td>
                          <td>
                            <strong>${total}</strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="order-payment-method">
                    <div className="summary-footer-area">
                      <div className="custom-control custom-checkbox mb-20">
                        <input type="checkbox" className="custom-control-input" id="terms" required />
                        <label className="custom-control-label" htmlFor="terms">
                          I have read and agree to the website <a href="index.html">terms and conditions.</a>
                        </label>
                      </div>
                      <button type="submit" className="btn btn-sqr" onClick={handleSubmitOrder}>
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
