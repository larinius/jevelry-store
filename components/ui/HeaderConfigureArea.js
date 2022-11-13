import { useRouter } from "next/router";
import * as Icon from "react-bootstrap-icons";
import Link from "next/link";
import React from "react";
import useUser from "/lib/useUser";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  setShowCart,
} from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const HeaderConfigureArea = () => {
  const router = useRouter();
  const { user } = useUser();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setShowCart(false));
  const handleShow = () => dispatch(setShowCart(true));

  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.post("/api/logout");
    router.push("/login");
  };

  const LoginLink = () => {
    return (
      <>
        <li>
          <Link href="/login" passHref>
            <a>login / register</a>
          </Link>
        </li>
      </>
    );
  };

  const LogoutLink = () => {
    return (
      <>
        <li>
          <Link href="/account" passHref>
            <a>my account</a>
          </Link>
        </li>
        <li>
          <Link href="/logout" passHref>
            <a onClick={handleLogout}>Logout</a>
          </Link>
        </li>
      </>
    );
  };

  const getTotal = () => {
    let quantity = 0;
    let price = 0;
    let weight = 0;

    cart.forEach((item) => {
      quantity += parseInt(item.quantity);
      price += item.price * item.quantity;
      weight += item.weight * item.quantity;
    });

    return { price, quantity, weight };
  };

  const total = getTotal();

  const CartButton = () => {
    if (total.quantity > 0) {
      return (
        <>
          <a onClick={handleShow} className="minicart-btn">
            <Icon.Bag size={22} />
            <div className="notification">{total.quantity}</div>
          </a>
        </>
      );
    } else {
      return (
        <>
          <a onClick={handleShow} className="minicart-btn">
            <Icon.Bag size={22} />
          </a>
        </>
      );
    }
  };


  return (
    <>
      <div className="header-configure-area">
        <ul className="nav justify-content-end">
          <li className="user-hover">
            <a href="#">
              <Icon.Person size={22} />
            </a>
            <ul className="dropdown-list">
              {user?.isLoggedIn ? <LogoutLink /> : <LoginLink />}
            </ul>
          </li>
          <li>
            <Link href={"/wishlist"} passHref>
              <a>
                <Icon.Heart size={22} />
              </a>
            </Link>
          </li>
          <li>
            <CartButton />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderConfigureArea;
