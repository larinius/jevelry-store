import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";

const HomeMediumBanners = () => {
  return (
    <>
      <div className="banner-statistics-area">
        <div className="container">
          <div className="row row-20 mtn-20">
            <div className="col-sm-6">
              <figure className="banner-statistics mt-20">
                <a href="#">
                  <Image
                    src="/static/img/banner/img1-top.jpg"
                    alt="product banner"
                    width={455}
                    height={209}
                  />
                </a>
                <div className="banner-content text-right">
                  <h5 className="banner-text1">BEAUTIFUL</h5>
                  <h2 className="banner-text2">
                    Wedding<span>Rings</span>
                  </h2>
                  <a href="shop.html" className="btn btn-text">
                    Shop Now
                  </a>
                </div>
              </figure>
            </div>
            <div className="col-sm-6">
              <figure className="banner-statistics mt-20">
                <a href="#">
                  <Image
                    src="/static/img/banner/img2-top.jpg"
                    alt="product banner"
                    width={455}
                    height={209}
                  />
                </a>
                <div className="banner-content text-center">
                  <h5 className="banner-text1">EARRINGS</h5>
                  <h2 className="banner-text2">
                    Tangerine Floral <span>Earring</span>
                  </h2>
                  <a href="shop.html" className="btn btn-text">
                    Shop Now
                  </a>
                </div>
              </figure>
            </div>
            <div className="col-sm-6">
              <figure className="banner-statistics mt-20">
                <a href="#">
                  <Image
                    src="/static/img/banner/img3-top.jpg"
                    alt="product banner"
                    width={455}
                    height={209}
                  />
                </a>
                <div className="banner-content text-center">
                  <h5 className="banner-text1">NEW ARRIVALLS</h5>
                  <h2 className="banner-text2">
                    Pearl<span>Necklaces</span>
                  </h2>
                  <a href="shop.html" className="btn btn-text">
                    Shop Now
                  </a>
                </div>
              </figure>
            </div>
            <div className="col-sm-6">
              <figure className="banner-statistics mt-20">
                <a href="#">
                  <Image
                    src="/static/img/banner/img4-top.jpg"
                    alt="product banner"
                    width={455}
                    height={209}
                  />
                </a>
                <div className="banner-content text-right">
                  <h5 className="banner-text1">NEW DESIGN</h5>
                  <h2 className="banner-text2">
                    Diamond<span>Jewelry</span>
                  </h2>
                  <a href="shop.html" className="btn btn-text">
                    Shop Now
                  </a>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMediumBanners;
