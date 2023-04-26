import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import React, { useState, useEffect } from "react";
import { useUser, useOrder } from "/lib/apiHooks";
import OrdersList from "./OrdersList";
import Dashboard from "./Dashboard";

const AccountArea = () => {
  const { user } = useUser();
  const { order: orders } = useOrder();

  useEffect(() => {
    console.log("user", user);
    console.log("orders", orders);
  }, [user, orders]);

  return (
    <>
      <div className="my-account-wrapper section-padding">
        <div className="container">
          <div className="section-bg-color">
            <Row>
              <Col lg={12}>
                <div className="myaccount-page-wrapper">
                  <Row>
                    <Tab.Container className="" defaultActiveKey="dashboard" role="tablist" id="myaccountContent">
                      <Row>
                        <Col lg={3} md={4}>
                          <Nav variant="pills" className="myaccount-tab-menu nav flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="orders">Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="settings">Settings</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content>
                            <Tab.Pane eventKey="dashboard"><Dashboard user={user}/></Tab.Pane>
                            <Tab.Pane eventKey="orders"><OrdersList orders={orders || []}/></Tab.Pane>
                            <Tab.Pane eventKey="settings">First tab content</Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountArea;
