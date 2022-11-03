import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { Container, Row } from "react-bootstrap";
import { sessionOptions } from "/lib/session";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { withIronSessionSsr } from "iron-session/next";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import BreadcrumbArea from "../../components/ui/BreadcrumbArea";
import CatalogSideMenu from "../../components/ui/CatalogSideMenu";
import PaginationBox from "../../components/ui/PaginationBox";
import ProductContext from "../../components/context/ProductContext";
import ProductGrid from "../../components/ui/ProductGrid";
import Dummy from "../../public/static/img/dummy.jpg"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";


const ProductArea = ({ product }) => {

    const [quantity, setQuantity] = useState(1);


    const handleOnChange = (e) => {

        setQuantity(e.target.value);
        console.log(e.target.value);
    }


  return (
    <>
      <Container>
        <Row>
          <div className="col-lg-12 order-1 order-lg-2">
            <div className="product-details-inner">
              <Row>
                <div className="col-lg-5">
                  <div className="product-large-slider">
                    <div className="pro-large-img img-zoom">
                      <Image
                        src={product?.image[0].path || Dummy}
                        alt="product-details"
                        width={660}
                        height={660}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="product-details-des">
                    <div className="manufacturer-name">
                      <a href="product-details.html">{product?.brand.title}</a>
                    </div>
                    <h3 className="product-name">{product?.title}</h3>
                    <div className="price-box">
                      <span className="price-regular">{product?.price}</span>
                      <span className="price-old">
                        <del>{product?.priceBefore}</del>
                      </span>
                    </div>

                    <div className="availability">
                      <i className="fa fa-check-circle"></i>
                    </div>
                    <p className="pro-desc">
                        {product?.description}
                    </p>
                    <div className="quantity-cart-box d-flex align-items-center">
                      <h6 className="option-title">qty:</h6>
                      <div className="quantity">
                        <div className="pro-qty">
                          <input type="text" value={quantity} onChange={handleOnChange}/>
                        </div>
                      </div>
                      <div className="action_link">
                        <a className="btn btn-cart2" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>

                    <div className="useful-links">
                      <a href="#" data-bs-toggle="tooltip" title="Compare">
                        <FaBalanceScaleLeft size={22}/> compare
                      </a>
                      <a href="#" data-bs-toggle="tooltip" title="Wishlist">
                        <MdFavoriteBorder size={22} /> wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </Row>
            </div>

            <div className="product-details-reviews section-padding pb-0">
              <div className="row">
                <div className="col-lg-12">

                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ProductArea;
