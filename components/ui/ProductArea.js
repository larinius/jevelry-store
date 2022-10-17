import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { Container, Row } from "react-bootstrap";
import { sessionOptions } from "/lib/session";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { withIronSessionSsr } from "iron-session/next";
import React, { useState, useEffect, useContext } from "react";

import BreadcrumbArea from "../../components/ui/BreadcrumbArea";
import CatalogSideMenu from "../../components/ui/CatalogSideMenu";
import PaginationBox from "../../components/ui/PaginationBox";
import ProductContext from "../../components/context/ProductContext";
import ProductGrid from "../../components/ui/ProductGrid";

const ProductArea = ({product}) => {
    console.log(product)
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
                                            <img src={product.images[0].url_medium} alt="product-details" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="product-details-des">
                                        <div className="manufacturer-name">
                                            <a href="product-details.html">HasTech</a>
                                        </div>
                                        <h3 className="product-name">{product.name}</h3>
                                        <div className="price-box">
                                            <span className="price-regular">{product.price}</span>
                                            <span className="price-old"><del>$90.00</del></span>
                                        </div>
                                        <h5 className="offer-text"><strong>Hurry up</strong>! offer ends in:</h5>
                                        <div className="product-countdown" data-countdown="2022/12/20"></div>
                                        <div className="availability">
                                            <i className="fa fa-check-circle"></i>
                                            
                                        </div>
                                        <p className="pro-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                            voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac
                                            habitasse platea dictumst.</p>
                                        <div className="quantity-cart-box d-flex align-items-center">
                                            <h6 className="option-title">qty:</h6>
                                            <div className="quantity">
                                                <div className="pro-qty"><input type="text" value="1"/></div>
                                            </div>
                                            <div className="action_link">
                                                <a className="btn btn-cart2" href="#">Add to cart</a>
                                            </div>
                                        </div>
                                        

                                        <div className="useful-links">
                                            <a href="#" data-bs-toggle="tooltip" title="Compare"><i
                                                    className="pe-7s-refresh-2"></i>compare</a>
                                            <a href="#" data-bs-toggle="tooltip" title="Wishlist"><i
                                                    className="pe-7s-like"></i>wishlist</a>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                        

                        
                        <div className="product-details-reviews section-padding pb-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="product-review-info">
                                        <ul className="nav review-tab">
                                            <li>
                                                <a className="active" data-bs-toggle="tab" href="#tab_one">description</a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tab" href="#tab_two">information</a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tab" href="#tab_three">reviews (1)</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content reviews-tab">
                                            <div className="tab-pane fade show active" id="tab_one">
                                                <div className="tab-one">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                                        fringilla augue nec est tristique auctor. Ipsum metus feugiat
                                                        sem, quis fermentum turpis eros eget velit. Donec ac tempus
                                                        ante. Fusce ultricies massa massa. Fusce aliquam, purus eget
                                                        sagittis vulputate, sapien libero hendrerit est, sed commodo
                                                        augue nisi non neque.Cras neque metus, consequat et blandit et,
                                                        luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
                                                        ligula euismod eget. Pellentesque habitant morbi tristique
                                                        senectus et netus et malesuada fames ac turpis egestas. Nam
                                                        erat mi, rutrum at sollicitudin rhoncus</p>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab_two">
                                                <table className="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <td>color</td>
                                                            <td>black, blue, red</td>
                                                        </tr>
                                                        <tr>
                                                            <td>size</td>
                                                            <td>L, M, S</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane fade" id="tab_three">
                                                <form action="#" className="review-form">
                                                    <h5>1 review for <span>Chaz Kangeroo</span></h5>
                                                    <div className="total-reviews">
                                                        <div className="rev-avatar">
                                                            <img src="/static/img/about/avatar.jpg" alt=""/>
                                                        </div>
                                                        <div className="review-box">
                                                            <div className="ratings">
                                                                <span className="good"><i className="fa fa-star"></i></span>
                                                                <span className="good"><i className="fa fa-star"></i></span>
                                                                <span className="good"><i className="fa fa-star"></i></span>
                                                                <span className="good"><i className="fa fa-star"></i></span>
                                                                <span><i className="fa fa-star"></i></span>
                                                            </div>
                                                            <div className="post-author">
                                                                <p><span>admin -</span> 30 Mar, 2019</p>
                                                            </div>
                                                            <p>Aliquam fringilla euismod risus ac bibendum. Sed sit
                                                                amet sem varius ante feugiat lacinia. Nunc ipsum nulla,
                                                                vulputate ut venenatis vitae, malesuada ut mi. Quisque
                                                                iaculis, dui congue placerat pretium, augue erat
                                                                accumsan lacus</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col">
                                                            <label className="col-form-label"><span className="text-danger">*</span>
                                                                Your Name</label>
                                                            <input type="text" className="form-control" required/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col">
                                                            <label className="col-form-label"><span className="text-danger">*</span>
                                                                Your Email</label>
                                                            <input type="email" className="form-control" required/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col">
                                                            <label className="col-form-label"><span className="text-danger">*</span>
                                                                Your Review</label>
                                                            <textarea className="form-control" required></textarea>
                                                            <div className="help-block pt-10"><span
                                                                    className="text-danger">Note:</span>
                                                                HTML is not translated!
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col">
                                                            <label className="col-form-label"><span className="text-danger">*</span>
                                                                Rating</label>
                                                            &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                                            <input type="radio" value="1" name="rating"/>
                                                            &nbsp;
                                                            <input type="radio" value="2" name="rating"/>
                                                            &nbsp;
                                                            <input type="radio" value="3" name="rating"/>
                                                            &nbsp;
                                                            <input type="radio" value="4" name="rating"/>
                                                            &nbsp;
                                                            <input type="radio" value="5" name="rating" checked/>
                                                            &nbsp;Good
                                                        </div>
                                                    </div>
                                                    <div className="buttons">
                                                        <button className="btn btn-sqr" type="submit">Continue</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </Row>
            </Container>    
        </>
    );
}

export default ProductArea;
