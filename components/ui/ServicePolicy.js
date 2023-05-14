import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const ServicePolicy = () => {
  return (
    <>
      <div className="service-policy">
        <Container>
          <div className="policy-block section-padding">
            <Row style={{ marginTop: '-30px' }}>
              <Col xs={6} lg={3}>
                <div className="policy-item">
                  <div className="policy-icon">
                    <Icon.Truck size={22} />
                  </div>
                  <div className="policy-content">
                    <h6>Free Shipping</h6>
                    <p>Free shipping all order</p>
                  </div>
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div className="policy-item">
                  <div className="policy-icon">
                    <Icon.LifePreserver size={22} />
                  </div>
                  <div className="policy-content">
                    <h6>Support 24/7</h6>
                    <p>Support 24 hours a day</p>
                  </div>
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div className="policy-item">
                  <div className="policy-icon">
                    <Icon.ArrowReturnLeft size={22} />
                  </div>
                  <div className="policy-content">
                    <h6>Money Return</h6>
                    <p>30 days for free return</p>
                  </div>
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div className="policy-item">
                  <div className="policy-icon">
                    <Icon.CreditCard size={22} />
                  </div>
                  <div className="policy-content">
                    <h6>100% Payment Secure</h6>
                    <p>We ensure secure payment</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ServicePolicy;
