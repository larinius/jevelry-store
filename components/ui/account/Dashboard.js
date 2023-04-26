/* eslint-disable no-undef */
import React from "react";

const Dashboard = ({ user }) => {
  return (
    <div>
      <div className="myaccount-content">
        <h5>Dashboard</h5>
        <div className="welcome">
          <p>
            Hello, <strong>{user?.name}</strong>!
          </p>
        </div>
        <p className="mb-0">
          From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit
          your password and account details.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

