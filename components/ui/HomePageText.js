import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";

const HomePageText = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <section className="about-us section-padding pb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-thumb">
                <Image
                  src="/static/img/about/about.jpg"
                  alt="Site logo"
                  width={445}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content">
                <h2 className="about-title">{t("homeHeader")}</h2>
                <h5 className="about-sub-title">{t("aboutUsP1")}</h5>
                <p>{t("aboutUsP2")}</p>
                <p>{t("aboutUsP3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageText;
