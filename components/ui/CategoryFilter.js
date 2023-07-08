import React from "react";
import { useTranslation, Trans } from "next-i18next";
import Link from "next/link";

const CategoryFilter = () => {
  const { t } = useTranslation("common");

  return (
    <div className="sidebar-single">
      <h5 className="sidebar-title">{t("categories")}</h5>

      <div className="sidebar-body">
        <ul className="shop-categories">
          <li>
            <Link href="/store/rings">
              {t("rings")}
            </Link>
          </li>
          <li>
            <Link href="/store/earrings">
              {t("earrings")}
            </Link>
          </li>
          {/* <li>
            <Link href="/store/pendants">
              {t("pendants")}
            </Link>
          </li> */}
          <li>
            <Link href="/store/chains">
              {t("chains")}
            </Link>
          </li>
          <li>
            <Link href="/store/bracelets">
              {t("bracelets")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
