import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";

const ServicePolicy = () => {
  return (
    <>
      <div className="service-policy">
        <div className="container">
          <div className="policy-block section-padding">
            <div className="row mtn-30">
              <div className="col-sm-6 col-lg-3">
                <div className="policy-item">
                  <div className="policy-icon">
                    <Icon.Truck size={22} />
                  </div>
                  <div className="policy-content">
                    <h6>Free Shipping</h6>
                    <p>Free shipping all order</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="policy-item">
                  <div className="policy-icon">
                    <Icon.LifePreserver size={22} />
                  </div>
                  <div className="policy-content">
                    <h6>Support 24/7</h6>
                    <p>Support 24 hours a day</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="policy-item">
                  <div className="policy-icon">
                    <Icon.ArrowReturnLeft size={22} />
                  </div>
                  <div className="policy-content">
                    <h6>Money Return</h6>
                    <p>30 days for free return</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="policy-item">
                  <div className="policy-icon">
                    <Icon.CreditCard size={22} />
                  </div>
                  <div className="policy-content">
                    <h6>100% Payment Secure</h6>
                    <p>We ensure secure payment</p>
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

export default ServicePolicy;
