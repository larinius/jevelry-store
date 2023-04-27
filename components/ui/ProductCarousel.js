import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Carousel from "react-multi-carousel";
import CarouselItem from "./CarouselItem";

const ProductCarousel = () => {
  const { t } = useTranslation("common");

  const categories = ["rings", "earrings", "chains", "bracelets", "necklaces"];
  const toApiUrl = (key) => {
    return `/api/product?category=${key}&limit=12`;
  };

  const productQueries = useQueries({
    queries: categories.map((cat) => {
      return {
        queryKey: [toApiUrl(cat)],
        queryFn: () => axios.get(toApiUrl(cat)),
      };
    }),
  });

  const rings = productQueries[0].data?.data || [];
  const earrings = productQueries[1].data?.data || [];
  const chains = productQueries[2].data?.data || [];
  const bracelets = productQueries[3].data?.data || [];
  const necklaces = productQueries[4].data?.data || [];

  useEffect(() => {
    console.log(rings, earrings, chains, bracelets, necklaces);
  }, [rings, earrings, chains, bracelets, necklaces]);

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
      items: 1,
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
                  <Tabs
                    className="justify-content-center pb-5"
                    defaultActiveKey="rings"
                  >
                    <Tab eventKey="rings" title={t("rings")}>
                      <Carousel
                        ssr
                        partialVisibile
                        itemClass="image-item"
                        responsive={responsive}
                        className="product-carousel-4 slick-row-10 slick-arrow-style"
                      >
                        {rings.products?.map((x, i) => {
                          return (
                            <div key={i} className="img-card">
                              <CarouselItem product={x} />
                            </div>
                          );
                        })}
                      </Carousel>
                    </Tab>
                    <Tab eventKey="earrings" title={t("earrings")}>
                      <Carousel
                        ssr
                        partialVisibile
                        itemClass="image-item"
                        responsive={responsive}
                        className="product-carousel-4 slick-row-10 slick-arrow-style"
                      >
                        {earrings.products?.map((x, i) => {
                          return (
                            <div key={i} className="img-card">
                              <CarouselItem product={x} />
                            </div>
                          );
                        })}
                      </Carousel>
                    </Tab>
                    <Tab eventKey="pendants" title={t("pendants")}>
                      <Carousel
                        ssr
                        partialVisibile
                        itemClass="image-item"
                        responsive={responsive}
                        className="product-carousel-4 slick-row-10 slick-arrow-style"
                      >
                        {bracelets.products?.map((x, i) => {
                          return (
                            <div key={i} className="img-card">
                              <CarouselItem product={x} />
                            </div>
                          );
                        })}
                      </Carousel>
                    </Tab>
                    <Tab eventKey="chains" title={t("chains")}>
                      <Carousel
                        ssr
                        partialVisibile
                        itemClass="image-item"
                        responsive={responsive}
                        className="product-carousel-4 slick-row-10 slick-arrow-style"
                      >
                        {chains.products?.map((x, i) => {
                          return (
                            <div key={i} className="img-card">
                              <CarouselItem product={x} />
                            </div>
                          );
                        })}
                      </Carousel>
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
