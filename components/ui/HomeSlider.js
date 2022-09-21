import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

const HomeSlider = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>

      <section className="slider-area">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Image className="d-block w-100"
              src="/static/img/slider/home1-slide1.jpg"
              alt="Slide Image 1"
              width={1920}
              height={670}
            />
            <Carousel.Caption>
              <h3 className="slide-title">First slide label</h3>
              <p className="slide-desc">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block w-100"
              src="/static/img/slider/home1-slide2.jpg"
              alt="Slide Image 1"
              width={1920}
              height={670}
            />
            <Carousel.Caption>
              <h3 className="slide-title">Second slide label</h3>
              <p className="slide-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block w-100"
              src="/static/img/slider/home1-slide3.jpg"
              alt="Slide Image 1"
              width={1920}
              height={670}
            />
            <Carousel.Caption>
              <h3 className="slide-title">Third slide label</h3>
              <p className="slide-desc">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default HomeSlider;
