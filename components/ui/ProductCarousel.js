import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import PropTypes from "prop-types";
import { default as React, useEffect, useMemo, useState } from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Dummy from "../../public/static/img/dummy.jpg";
import LoadingSpinner from "./LoadingSpinner";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  withCredentials: true, // Enable sending cookies with the request
});


const CarouselItem = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [thumb, setThumb] = useState(Dummy);
  const [thumbClass, setClass] = useState("pri-img");

  useEffect(() => {
    if (product?.image[0]?.path !== undefined) {
      setThumb(product?.image[0]?.path);
    }
  }, [product]);

  const handleImageError = () => {
    setThumb(Dummy);
  };

  let images = [];

  product.image.forEach((item) => {
    images.push({
      original: item.path,
      thumbnail: item.path.replace("/product/", "/thumb/"),
    });
  });

  const showSecThumb = () => {
    setThumb(product.image[1].path);
    setClass("sec-img");
  };

  const showPriThumb = () => {
    setThumb(product.image[0].path);
    setClass("pri-img");
  };

  const prodThumb = () => {
    if (product.image.length > 1) {
      return (
        <Image
          draggable={false}
          // className={thumbClass}
          src={thumb}
          alt={product.title}
          width={350}
          height={350}
          // onMouseOver={showSecThumb}
          // onMouseLeave={showPriThumb}
          onError={handleImageError}
        />
      );
    } else {
      return (
        <Image
          src={thumb}
          alt={product.title}
          width={350}
          height={350}
          onError={handleImageError}
        />
      );
    }
  };

  return (
    <>
      <div className="product-item">
        <figure className="product-thumb">
          <a href="#" onClick={handleShow}>
            {prodThumb()}
          </a>
        </figure>
        <div className="product-caption text-center">
          <div className="product-identity"></div>
          <h6 className="product-name">
            <a href="#">{product.title}</a>
          </h6>
        </div>
      </div>
    </>
  );
};

CarouselItem.propTypes = {
  product: PropTypes.object,
};


const ProductCarousel = () => {
  const { t } = useTranslation("common");

  const categories = ["rings", "earrings", "chains", "bracelets", "necklaces"];
  const toApiUrl = (key) => {
    return `/product?category=${key}&limit=12`;
  };

  const productQueries = useQueries({
    queries: categories.map((cat) => {
      return {
        queryKey: [toApiUrl(cat)],
        queryFn: () => axiosInstance.get(toApiUrl(cat)),
      };
    }),
  });

  const { rings, earrings, chains, bracelets, necklaces } = useMemo(() => {
    const data = productQueries.map((query) => query || {});
    return {
      rings: data[0].isSuccess ? data[0].data.data.products : [],
      earrings: data[1].isSuccess ? data[1].data.data.products : [],
      chains: data[2].isSuccess ? data[2].data.data.products : [],
      bracelets: data[3].isSuccess ? data[3].data.data.products : [],
      necklaces: data[4].isSuccess ? data[4].data.data.products : [],
    };
  }, [productQueries]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 60,
      partialVisible: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 50,
      partialVisible: true,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 0,
      partialVisible: false,
      centerMode: true,
    },
  };

  return (
    <>
      <section className="product-area section-padding">
        <Container>
          <Row>
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="title">{t("our products")}</h2>
                <p className="sub-title">{t("new products")}</p>
              </div>
            </div>
          </Row>
          <Row>
            <div className="col-12">
              <div className="product-container">
                <div className="product-tab-menu">
                  <Tabs className="justify-content-center pb-5" defaultActiveKey="rings">
                    <Tab eventKey="rings" title={t("rings")}>
                      {rings && rings.length > 0 ? (
                        <Carousel
                          ssr
                          partialVisibile
                          itemClass="image-item"
                          responsive={responsive}
                          className="product-carousel-4 slick-row-10 slick-arrow-style"
                        >
                          {rings.map((x, i) => {
                            return (
                              <div key={i} className="img-card">
                                <CarouselItem product={x} />
                              </div>
                            );
                          })}
                        </Carousel>
                      ) : (
                        <LoadingSpinner height={200} />
                      )}
                    </Tab>
                    <Tab eventKey="earrings" title={t("earrings")}>
                      {earrings && earrings.length > 0 ? (
                        <Carousel
                          ssr
                          partialVisibile
                          itemClass="image-item"
                          responsive={responsive}
                          className="product-carousel-4 slick-row-10 slick-arrow-style"
                        >
                          {earrings.map((x, i) => {
                            return (
                              <div key={i} className="img-card">
                                <CarouselItem product={x} />
                              </div>
                            );
                          })}
                        </Carousel>
                      ) : (
                        <LoadingSpinner height={200} />
                      )}
                    </Tab>
                    <Tab eventKey="bracelets" title={t("bracelets")}>
                      {bracelets && bracelets.length > 0 ? (
                        <Carousel
                          ssr
                          partialVisibile
                          itemClass="image-item"
                          responsive={responsive}
                          className="product-carousel-4 slick-row-10 slick-arrow-style"
                        >
                          {bracelets.map((x, i) => {
                            return (
                              <div key={i} className="img-card">
                                <CarouselItem product={x} />
                              </div>
                            );
                          })}
                        </Carousel>
                      ) : (
                        <LoadingSpinner height={200} />
                      )}
                    </Tab>
                    <Tab eventKey="chains" title={t("chains")}>
                      {chains && chains.length > 0 ? (
                        <Carousel
                          ssr
                          partialVisibile
                          itemClass="image-item"
                          responsive={responsive}
                          className="product-carousel-4 slick-row-10 slick-arrow-style"
                        >
                          {chains.map((x, i) => {
                            return (
                              <div key={i} className="img-card">
                                <CarouselItem product={x} />
                              </div>
                            );
                          })}
                        </Carousel>
                      ) : (
                        <LoadingSpinner height={200} />
                      )}
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductCarousel;
