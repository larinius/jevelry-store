import React, { useState, useEffect } from "react";
import {useUser} from "/lib/apiHooks";

const AccountArea = () => {

  const { user } = useUser();

  return (
    <>
      <div className="my-account-wrapper section-padding">
        <div className="container">
          <div className="section-bg-color">
            <div className="row">
              <div className="col-lg-12">
                <div className="myaccount-page-wrapper">
                  <div className="row">
                    <div className="col-lg-3 col-md-4">
                      <div className="myaccount-tab-menu nav" role="tablist">
                        <a
                          href="#dashboad"
                          className="active"
                          data-bs-toggle="tab"
                        >
                          <i className="fa fa-dashboard"></i>
                          Dashboard
                        </a>
                        <a href="#orders" data-bs-toggle="tab">
                          <i className="fa fa-cart-arrow-down"></i>
                          Orders
                        </a>
                        <a href="#download" data-bs-toggle="tab">
                          <i className="fa fa-cloud-download"></i>
                          Download
                        </a>
                        <a href="#payment-method" data-bs-toggle="tab">
                          <i className="fa fa-credit-card"></i>
                          Payment Method
                        </a>
                        <a href="#address-edit" data-bs-toggle="tab">
                          <i className="fa fa-map-marker"></i>
                          address
                        </a>
                        <a href="#account-info" data-bs-toggle="tab">
                          <i className="fa fa-user"></i> Account Details
                        </a>
                        <a href="login-register.html">
                          <i className="fa fa-sign-out"></i> Logout
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-9 col-md-8">
                      <div className="tab-content" id="myaccountContent">
                        <div
                          className="tab-pane fade show active"
                          id="dashboad"
                          role="tabpanel"
                        >
                          <div className="myaccount-content">
                            <h5>Dashboard</h5>
                            <div className="welcome">
                              <p>
                                Hello, <strong>{user.name}</strong> (If Not{" "}
                                <strong>{user.name}</strong>
                                <a
                                  href="/logout"
                                  className="logout"
                                >
                                  {" "}
                                  Logout
                                </a>
                                )
                              </p>
                            </div>
                            <p className="mb-0">
                              From your account dashboard. you can easily check
                              & view your recent orders, manage your shipping
                              and billing addresses and edit your password and
                              account details.
                            </p>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="orders"
                          role="tabpanel"
                        >
                          <div className="myaccount-content">
                            <h5>Orders</h5>
                            <div className="myaccount-table table-responsive text-center">
                              <table className="table table-bordered">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Order</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Aug 22, 2018</td>
                                    <td>Pending</td>
                                    <td>$3000</td>
                                    <td>
                                      <a
                                        href="cart.html"
                                        className="btn btn-sqr"
                                      >
                                        View
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>July 22, 2018</td>
                                    <td>Approved</td>
                                    <td>$200</td>
                                    <td>
                                      <a
                                        href="cart.html"
                                        className="btn btn-sqr"
                                      >
                                        View
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>June 12, 2017</td>
                                    <td>On Hold</td>
                                    <td>$990</td>
                                    <td>
                                      <a
                                        href="cart.html"
                                        className="btn btn-sqr"
                                      >
                                        View
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="download"
                          role="tabpanel"
                        >
                          <div className="myaccount-content">
                            <h5>Downloads</h5>
                            <div className="myaccount-table table-responsive text-center">
                              <table className="table table-bordered">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Product</th>
                                    <th>Date</th>
                                    <th>Expire</th>
                                    <th>Download</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      Haven - Free Real Estate PSD Template
                                    </td>
                                    <td>Aug 22, 2018</td>
                                    <td>Yes</td>
                                    <td>
                                      <a href="#" className="btn btn-sqr">
                                        <i className="fa fa-cloud-download"></i>
                                        Download File
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      HasTech - Profolio Business Template
                                    </td>
                                    <td>Sep 12, 2018</td>
                                    <td>Never</td>
                                    <td>
                                      <a href="#" className="btn btn-sqr">
                                        <i className="fa fa-cloud-download"></i>
                                        Download File
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="payment-method"
                          role="tabpanel"
                        >
                          <div className="myaccount-content">
                            <h5>Payment Method</h5>
                            <p className="saved-message">
                              You Can't Saved Your Payment Method yet.
                            </p>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="address-edit"
                          role="tabpanel"
                        >
                          <div className="myaccount-content">
                            <h5>Billing Address</h5>
                            <address>
                              <p>
                                <strong>Erik Jhonson</strong>
                              </p>
                              <p>
                                1355 Market St, Suite 900 <br />
                                San Francisco, CA 94103
                              </p>
                              <p>Mobile: (123) 456-7890</p>
                            </address>
                            <a href="#" className="btn btn-sqr">
                              <i className="fa fa-edit"></i>
                              Edit Address
                            </a>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="account-info"
                          role="tabpanel"
                        >
                          <div className="myaccount-content">
                            <h5>Account Details</h5>
                            <div className="account-details-form">
                              <form action="#">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="single-input-item">
                                      <label
                                        htmlFor="first-name"
                                        className="required"
                                      >
                                        First Name
                                      </label>
                                      <input
                                        type="text"
                                        id="first-name"
                                        placeholder="First Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="single-input-item">
                                      <label
                                        htmlFor="last-name"
                                        className="required"
                                      >
                                        Last Name
                                      </label>
                                      <input
                                        type="text"
                                        id="last-name"
                                        placeholder="Last Name"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="single-input-item">
                                  <label
                                    htmlFor="display-name"
                                    className="required"
                                  >
                                    Display Name
                                  </label>
                                  <input
                                    type="text"
                                    id="display-name"
                                    placeholder="Display Name"
                                  />
                                </div>
                                <div className="single-input-item">
                                  <label htmlFor="email" className="required">
                                    Email Addres
                                  </label>
                                  <input
                                    type="email"
                                    id="email"
                                    placeholder="Email Address"
                                  />
                                </div>
                                <fieldset>
                                  <legend>Password change</legend>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="current-pwd"
                                      className="required"
                                    >
                                      Current Password
                                    </label>
                                    <input
                                      type="password"
                                      id="current-pwd"
                                      placeholder="Current Password"
                                    />
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="single-input-item">
                                        <label
                                          htmlFor="new-pwd"
                                          className="required"
                                        >
                                          New Password
                                        </label>
                                        <input
                                          type="password"
                                          id="new-pwd"
                                          placeholder="New Password"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="single-input-item">
                                        <label
                                          htmlFor="confirm-pwd"
                                          className="required"
                                        >
                                          Confirm Password
                                        </label>
                                        <input
                                          type="password"
                                          id="confirm-pwd"
                                          placeholder="Confirm Password"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                                <div className="single-input-item">
                                  <button className="btn btn-sqr">
                                    Save Changes
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default AccountArea;
