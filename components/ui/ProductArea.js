import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { Container, Row } from "react-bootstrap";
import { sessionOptions } from "/lib/session";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { withIronSessionSsr } from "iron-session/next";
import React, { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import BreadcrumbArea from "../../components/ui/BreadcrumbArea";
import CatalogSideMenu from "../../components/ui/CatalogSideMenu";
import PaginationBox from "../../components/ui/PaginationBox";
import ProductContext from "../../components/context/ProductContext";
import ProductGrid from "../../components/ui/ProductGrid";
import Dummy from "../../public/static/img/dummy2.jpg";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { addToCart, addToWishlist } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductArea = ({ product }) => {
  const { t } = useTranslation("common");
  const [quantity, setQuantity] = useState(1);

  const [photo, setPhoto] = useState(Dummy);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const qntRef = useRef(null);

  useEffect(() => {
    if (product?.image[0]?.path !== undefined) {
      setPhoto(product?.image[0]?.path);
    }
  }, [product]);

  const handleImageError = () => {
    setPhoto(Dummy);
  };

  const handleAddToCart = (product, quantity) => {
    let prod = product;
    prod.quantity = quantity;
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product) => {
    let prod = product;
    dispatch(addToWishlist(product));
  };

  const handleOnChange = (e) => {
    // setQuantity(e.target.value);
    // console.log(e.target.value);
  };

  const handlePlus = (e) => {
    qntRef.current.value = +qntRef.current.value + 1;
    // setQuantity(quantity++);
  };

  const handleMinus = (e) => {
    if (qntRef.current.value > 1) {
      qntRef.current.value = +qntRef.current.value - 1;
    }
  };

  const isWishlisted = () => {
    const itemInWishlist = wishlist.find((item) => item.id === product.id);
    return itemInWishlist;
  };

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
                        src={photo}
                        alt="product-details"
                        width={660}
                        height={660}
                        onError={handleImageError}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="product-details-des">
                    <div className="manufacturer-name">
                      <a href="product-details.html">{product?.brand?.title}</a>
                    </div>
                    <h3 className="product-name">{product?.title}</h3>
                    <div className="price-box">
                      <span className="price-regular">${product?.price}</span>
                      <span className="price-old">
                        <del>
                          {product?.priceBefore
                            ? `$${product?.priceBefore}`
                            : null}
                        </del>
                      </span>
                    </div>
                    <div className="characteristics-box">
                      <span className="weight">
                        {t("weight")}: {product?.weight}
                        {t("g")}
                      </span>
                    </div>
                    <div className="characteristics-box">
                      <span className="weight">
                        {t("weight")}: {product?.weight}
                        {t("g")}
                      </span>
                    </div>
                    <div className="characteristics-box">
                      <span className="weight">{t("weight")}: {product?.weight}{t("g")}</span>
                    </div>

                    <div className="availability">
                      <i className="fa fa-check-circle"></i>
                    </div>
                    <p className="pro-desc">{product?.description}</p>
                    <div className="quantity-cart-box d-flex align-items-center">
                      <h6 className="option-title">qty:</h6>
                      <div className="quantity">
                        <InputGroup className="pro-qty">
                          <button onClick={handleMinus}>
                            <FaMinus size={18} color={"#adb5bd"} />
                          </button>
                          <input
                            ref={qntRef}
                            type="text"
                            // value={quantity}
                            defaultValue={1}
                            onBlur={handleOnChange}
                          />

                          <button onClick={handlePlus}>
                            <FaPlus size={18} color={"#adb5bd"} />
                          </button>
                        </InputGroup>
                      </div>
                      <div className="action_link">
                        <a
                          onClick={() =>
                            handleAddToCart(product, qntRef.current.value)
                          }
                          className="btn btn-cart2"
                          href="#"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>

                    <div className="useful-links">
                      <a href="#" data-bs-toggle="tooltip" title="Compare">
                        <FaBalanceScaleLeft size={22} /> compare
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="Wishlist"
                        onClick={() => handleAddToWishlist(product)}
                      >
                        {isWishlisted() ? (
                          <MdFavorite size={22} color={"#f71f34"} />
                        ) : (
                          <MdFavoriteBorder size={22} />
                        )}{" "}
                        Wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </Row>
            </div>

            <div className="product-details-reviews section-padding pb-0">
              <div className="row">
                <div className="col-lg-12"></div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ProductArea;
