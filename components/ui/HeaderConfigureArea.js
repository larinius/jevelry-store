import { useRouter } from "next/router";
import * as Icon from "react-bootstrap-icons";
import Link from "next/link";
import React from "react";

const HeaderConfigureArea = () => {

  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.post("/api/logout");
    router.push("/login");
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
              <li>
                <Link href="/login" passHref>
                  <a>login / register</a>
                </Link>
              </li>
              <li>
                <Link href="/account" passHref>
                  <a>my account</a>
                </Link>
              </li>
              <li>
                <Link href="/login" onClick={handleLogout} passHref>
                  <a>Logout</a>
                </Link>
              </li>
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
