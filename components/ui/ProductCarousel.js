import React, { useState, useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";
import Slider from "@ant-design/react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons";
import CarouselItem from "./CarouselItem";
import Carousel from "react-multi-carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row } from "react-bootstrap";
import { useTranslation, Trans } from "next-i18next";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [productsRings, setProductsRings] = useState([]);
  const [productsEarrings, setProductsEarrings] = useState([]);
  const [productsChains, setProductsChains] = useState([]);
  const [productsPendants, setProductsPendants] = useState([]);

  const { t } = useTranslation("common");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/product`);
      const data = await response.json();
      setProducts(data);
    };

    getData();
  }, []);

  useEffect(() => {
    const rings = products
      .filter((item) => item.category.name.toLowerCase() === "rings")
      .slice(0, 12);
    const earrings = products
      .filter((item) => item.category.name.toLowerCase() === "earrings")
      .slice(0, 12);
    const chains = products
      .filter((item) => item.category.name.toLowerCase() === "chains")
      .slice(0, 12);
    const pendants = products
      .filter((item) => item.category.name.toLowerCase() === "pendants")
      .slice(0, 12);

    setProductsRings(rings);
    setProductsEarrings(earrings);
    setProductsChains(chains);
    setProductsPendants(pendants);
  }, [products]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 60,
      partialVisible: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      paritialVisibilityGutter: 50,
      partialVisible: true,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 0,
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
                        {productsRings.map((x, i) => {
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
                        {productsEarrings.map((x, i) => {
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
                        {productsPendants.map((x, i) => {
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
                        {productsChains.map((x, i) => {
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
