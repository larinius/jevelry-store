import React from "react";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";

import { useTranslation, Trans } from "next-i18next";

const SearchBox = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="header-search-container">
        <button className="search-trigger d-none d-sm-block d-md-none">
          <Icon.Search size={20} />
        </button>
        <form className="header-search-box d-sm-none d-md-block">
          <input
            type="text"
            placeholder={t("search")}
            className="header-search-field"
          />
          <button className="header-search-btn">
            <Icon.Search size={20} />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
