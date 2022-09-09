import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as Icon from "react-bootstrap-icons";
import { useTranslation, Trans } from "next-i18next";

const SearchBox = () => {
  const { t } = useTranslation("common");

  return (
    <div className="header-search-container">
      <InputGroup size="sm" className="mb-1">
        <Form.Control type="text" placeholder={t("search")} />
        <InputGroup.Text id="inputGroup-sizing-sm">
          <Icon.Search />
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default SearchBox;
