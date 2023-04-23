import { useRouter } from "next/router";
import * as Icon from "react-bootstrap-icons";
import Link from "next/link";
import React from "react";
import { useUser } from "../../lib/apiHooks";
import Button from "react-bootstrap/Button";
import { setShowCart, setShowWishlist } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "/redux/authSlice";

const HeaderConfigureArea = () => {
  const router = useRouter();
  const { user } = useUser();

  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleClose = () => dispatch(setShowCart(false));
  const handleShowCart = () => dispatch(setShowCart(true));
  const handleShowWishlist = () => dispatch(setShowWishlist(true));

  const handleLogout = async (e) => {
    console.log("LOGOUT");
    dispatch(logout());
    router.push("/login");
  };

  const LoginLink = () => {
    return (
      <>
        <li>
          <Link href="/login" passHref>
            login / register
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
            my account
          </Link>
        </li>
        <li>
          <Link href="#" passHref onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  const getTotal = () => {
    let quantity = 0;
    let price = 0;
    let weight = 0;

    if (cart?.cart.length === 0) {
      return { price, quantity, weight };
    }

    cart?.cart.forEach((item) => {
      quantity += parseInt(item.quantity);
      price += item.price * item.quantity;
      weight += item.weight * item.quantity;
    });

    return { price, quantity, weight };
  };

  const total = getTotal();

  const getWishlist = () => {
    let quantity = 0;

    if (cart?.wishlist.length === 0) {
      return { quantity };
    }

    cart?.wishlist.forEach((item) => {
      quantity += 1;
    });

    return { quantity };
  };

  const wish = getWishlist();

  const CartButton = () => {
    if (total.quantity > 0) {
      return (
        <>
          <a onClick={handleShowCart} className="minicart-btn">
            <Icon.Bag size={22} />
            <div className="notification">{total.quantity}</div>
          </a>
        </>
      );
    } else {
      return (
        <>
          <a onClick={handleShowCart} className="minicart-btn">
            <Icon.Bag size={22} />
          </a>
        </>
      );
    }
  };

  const WishlistButton = () => {
    if (wish.quantity > 0) {
      return (
        <>
          <a onClick={handleShowWishlist} className="wishlist-btn">
            <Icon.Heart size={22} />
            <div className="notification">{wish.quantity}</div>
          </a>
        </>
      );
    } else {
      return (
        <>
          <a onClick={handleShowWishlist} className="wishlist-btn">
            <Icon.Heart size={22} />
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
              {auth?.isLoggedIn ? <LogoutLink /> : <LoginLink />}
            </ul>
          </li>
          <li>
            <WishlistButton />
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
