import { useRouter } from "next/router";
import * as Icon from "react-bootstrap-icons";
import Link from "next/link";
import React from "react";
import useUser from "/lib/useUser";
import axios from "axios";

const HeaderConfigureArea = () => {
  const router = useRouter();
  const { user } = useUser();

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
            <Link href={"/cart"} passHref>
              <a>
                <Icon.Bag size={22} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderConfigureArea;
