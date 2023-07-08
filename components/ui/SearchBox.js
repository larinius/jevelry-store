import React, { useState, useEffect, useRef, useContext } from "react";
import * as Icon from "react-bootstrap-icons";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ProductContext from "../context/ProductContext";

const SearchBox = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { selectedLanguage } = useContext(ProductContext);
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchPhrase.trim() !== "") {
      router.push(`/store/search/${encodeURIComponent(searchPhrase)}`);
    }
  };

  const handleInputChange = (e) => {
    setSearchPhrase(e.target.value);
  };

  const isLTRLayout = selectedLanguage !== "he";

  return (
    <>
      <div className={`header-search-container ${isLTRLayout ? "ltr" : "rtl"}`}>
        <form className={`header-search-box ${isLTRLayout ? "ltr" : "rtl"}`} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={t("search")}
            className="header-search-field"
            value={searchPhrase}
            onChange={handleInputChange}
          />
          <button type="submit" className="header-search-btn">
            <Icon.Search size={20} />
          </button>
        </form>
        {isLTRLayout && (
          <button className="search-trigger d-none d-sm-block d-md-none">
            <Icon.Search size={20} />
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBox;
