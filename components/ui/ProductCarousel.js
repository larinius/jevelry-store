import React, { useState, useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";
import axios from "axios";
// import Slider from "react-slick";
import AliceCarousel from "react-alice-carousel";
import * as Icon from "react-bootstrap-icons";

import CarouselItem from "./CarouselItem";

const ProductCarousel = () => {
  const { currentProducts } = useContext(ProductContext);
  const { setCategory } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDragStart = (e) => e.preventDefault();

  useEffect(() => {
    // setProducts(currentProducts.slice(0,5));

    const getData = async () => {
      try {
        const response = await axios.get(`/api/product`);        
        setProducts(response.data.slice(0, 12));
      } catch (err) {
        console.log("Error fetching api");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 5 },
  };

  const items = products.map((x, i) => {
    return (
      <div key={i} className="item">
        <CarouselItem product={x} />
      </div>
    );
  });

  const Gallery = () => {
    return (
      <AliceCarousel        
        items={items}
        responsive={responsive}
        controlsStrategy="default"
        autoHeight={true}
        infinite={true}
        disableDotsControls={true}
        mouseTracking={true}        
        renderPrevButton={() => {
          return <div className="arrow-left position-absolute start"><Icon.ArrowLeftCircle/></div>
        }}
        renderNextButton={() => {
          return <div className="arrow-right position-absolute end"><Icon.ArrowRightCircle/></div>
        }}
      />
    );
  };

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
                      {Gallery()}
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
