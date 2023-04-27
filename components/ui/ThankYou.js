import React, { useEffect } from "react";

import { useTranslation, Trans } from "next-i18next";
import { useSelector, useDispatch } from "react-redux";

const ThankYou = () => {
  const order = useSelector((state) => state?.cart.order);

  const { t } = useTranslation("common");

  return (
    <>
      <section className="about-us section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-content">
                <h1>Thank you for your order!</h1>
                {order.code && (
                  <p>
                    Your order number is: <strong>{order.code}</strong>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
