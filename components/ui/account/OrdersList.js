import React, { useState, useEffect } from "react";
import { useUser, useOrder } from "/lib/apiHooks";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OrderItem from "./OrderItem";

const OrderList = ({orders}) => {

  const [show, setShow] = useState(false);
  const [order, setOrder] = useState(null);

  function handleShow() {
    setShow(true);
  }

  const handleOpenOrder = (params) => {
    setOrder(params);
    handleShow();
    console.log("handleOpenOrder", params);
  }
  


  const OrderRows = ({orders}) => {

    useEffect(() => {
      console.log("orders", orders);
    }, [orders]);


    return (
      <>
        {orders.map((order) => 
          <OrderRow key={order.id} order={order} />
        )}
      </>
    );
  };

  const OrderRow = ({order}) => {
    console.log(order);
    return (
      <>
        <tr>
          <td>{order.code}</td>
          <td>{(new Date(order.created)).toLocaleDateString()}</td>
          <td>{order.status.title}</td>
          <td>{order.total}</td>
          <td>
            <a href="#" className="btn btn-sqr" onClick={()=>(handleOpenOrder(order))}>
              View
            </a>
          </td>
        </tr>
      </>
    );
  };

  return (
    <div className="orders-list myaccount-content">
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
              <OrderRows orders={orders} />
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order {order?.code || ""} - {order?.status.title || ""} </Modal.Title>
        </Modal.Header>
        <Modal.Body><OrderItem order={order}/></Modal.Body>
      </Modal>
    </div>
  );
};

export default OrderList;
