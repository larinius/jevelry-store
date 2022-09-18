import React, { useState, useEffect } from "react";
import { useTranslation, Trans } from "next-i18next";

const CategoryFilter = () => {
    const { t } = useTranslation("common");

  return (
    <div className="sidebar-single">
      <h5 className="sidebar-title">{t("categories")}</h5>

      <div className="sidebar-body">
        <ul className="shop-categories">
          <li>
            <a href="/store/rings">
            {t("rings")} <span>(10)</span>
            </a>
          </li>
          <li>
            <a href="/store/earrings">
            {t("earrings")} <span>(5)</span>
            </a>
          </li>
          <li>
            <a href="/store/pendants">
            {t("pendants")} <span>(8)</span>
            </a>
          </li>
          <li>
            <a href="/store/chains">
            {t("chains")} <span>(4)</span>
            </a>
          </li>
          <li>
            <a href="/store/braselets">
            {t("braselets")} <span>(5)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
