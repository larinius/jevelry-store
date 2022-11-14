import React from "react";
import { useTranslation, Trans } from "next-i18next";
import Link from "next/link";

import * as Icon from "react-bootstrap-icons";

const OffCanvasArea = () => {
  const { t } = useTranslation("common");

  return <>
    <div className="off-canvas-inner-content">
      <div className="off-canvas-inner">
        <div className="search-box-offcanvas">
          <form>
            <input type="text" placeholder="Search Here..." />
            <button className="search-btn">
              <i className="pe-7s-search"></i>
            </button>
          </form>
        </div>

        <div className="mobile-navigation">
          <nav>
            <ul className="mobile-menu">
              <li className="menu-item-has-children">
                <Link href="/" passHref legacyBehavior>
                  {t("home")}
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/store" passHref legacyBehavior>
                  {t("store")}
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/about" passHref legacyBehavior>
                  {t("about")}
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/contacts" passHref legacyBehavior>
                  {t("contacts")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mobile-settings"></div>

        <div className="m-5 offcanvas-widget-area fixed-bottom">
          <div className=" off-canvas-contact-widget">
            <ul>
              <li>
                {" "}
                <Icon.Phone size={22} />
                <a className="m-2" href="#">777 777 77 77</a>
              </li>
              <li>
                <Icon.Envelope size={22} />
                <a className="m-2" href="#">info@yourdomain.com</a>
              </li>
            </ul>
          </div>
          <div className="off-canvas-social-widget">
            <a href="#">
              <Icon.Facebook size={22} />
            </a>
            <a href="#">
              <Icon.Instagram size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default OffCanvasArea;
