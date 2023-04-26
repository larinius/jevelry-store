import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const OrderItem = ({ order }) => {
  useEffect(() => {
    console.log("order item", order);
  }, [order]);

  const ProductList = ({ products }) => {
    useEffect(() => {
      console.log("products list", products);
    }, [products]);

    return (
      <>
        {products.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <strong>
                  {item.product.title} - {item.product.sku}
                </strong>{" "}
                x {item.quantity}
              </td>
              <td>${(item.product.price * item.quantity).toFixed(2)}</td>
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
         <Row className="mb-5">
         <Col lg={4} >   
          <div className="single-input-item">
            <label htmlFor="f_name" className="required">
              Code
            </label>
            <input type="text" disabled id="f_name" value={order?.code} />
          </div>
          </Col>

            <Col lg={4}>   
          <div className="single-input-item">
            <label htmlFor="f_name" className="required">
              Created
            </label>
            <input type="text" disabled id="f_name" value={new Date(order?.created).toLocaleDateString()} />
          </div>
          </Col>
          <Col lg={4}>
          <div className="single-input-item">
            <label htmlFor="f_name" className="required">
              Status
            </label>
            <input type="text" disabled id="f_name" value={order?.status.title} />
          </div>
          </Col>
        </Row>
          <Row>
            <Col lg={12}>
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
                        <ProductList products={order?.products} />
                      </tbody>

                      <tfoot>
                        <tr>
                          <td>Weight</td>
                          <td>
                            <strong>{order?.weight}g</strong>
                          </td>
                        </tr>

                        <tr>
                          <td>Total Amount</td>
                          <td>
                            <strong>${order?.total}</strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="checkout-billing-details-wrap mt-5">
                <h5 className="checkout-title">Billing Details</h5>
                <div className="billing-form-wrap">
                  <div>
                    <div className="single-input-item">
                      <label htmlFor="f_name" className="required">
                        Name
                      </label>
                      <input type="text" disabled id="f_name" value={order?.user?.name} />
                    </div>

                    <div className="single-input-item">
                      <label htmlFor="email" className="required">
                        Email Address
                      </label>
                      <input type="email" id="email" placeholder="Email Address" disabled value={order?.user?.email} />
                    </div>

                    <div className="single-input-item">
                      <label htmlFor="phone">Phone</label>
                      <input type="text" id="phone" value={order?.user?.phone} />
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

export default OrderItem;
