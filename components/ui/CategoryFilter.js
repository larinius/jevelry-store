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
            <a href="/store/rings">{t("rings")}</a>
          </li>
          <li>
            <a href="/store/earrings">{t("earrings")}</a>
          </li>
          <li>
            <a href="/store/pendants">{t("pendants")}</a>
          </li>
          <li>
            <a href="/store/chains">{t("chains")}</a>
          </li>
          <li>
            <a href="/store/bracelets">{t("bracelets")}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
