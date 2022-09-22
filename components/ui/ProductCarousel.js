import React, { useState, useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";
import Slider from "@ant-design/react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons";
import CarouselItem from "./CarouselItem";

const ProductCarousel = () => {
  const { currentProducts } = useContext(ProductContext);
  const { setCategory } = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/product`);
      const data = await response.json();
      setProducts(data);
    };

    getData();
  }, []);

  // const config = {
  //   infinite: true,
  //   prevArrow: <PrevArrow />,
  //   nextArrow: <NextArrow />,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };

  const config = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };


  const [settings, setSettings] = useState(config);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <section className="product-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="title">our products</h2>
                <p className="sub-title">Add our products to weekly lineup</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-container">
                <div className="product-tab-menu">
                  <ul className="nav justify-content-center">
                    <li>
                      <a href="#tab1" className="active" data-bs-toggle="tab">
                        Entertainment
                      </a>
                    </li>
                    <li>
                      <a href="#tab2" data-bs-toggle="tab">
                        Storage
                      </a>
                    </li>
                    <li>
                      <a href="#tab3" data-bs-toggle="tab">
                        Lying
                      </a>
                    </li>
                    <li>
                      <a href="#tab4" data-bs-toggle="tab">
                        Tables
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                      <Slider {...settings}>
                        {products.map((x, i) => {
                          return (
                            <div key={i} className="img-card">
                              <CarouselItem product={x} />
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab2">
                    <div className="product-carousel-4 slick-row-10 slick-arrow-style"></div>
                  </div>
                  <div className="tab-pane fade" id="tab3">
                    <div className="product-carousel-4 slick-row-10 slick-arrow-style"></div>
                  </div>
                  <div className="tab-pane fade" id="tab4">
                    <div className="product-carousel-4 slick-row-10 slick-arrow-style"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCarousel;
