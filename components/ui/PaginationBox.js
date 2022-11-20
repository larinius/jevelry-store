import React, { useState, useEffect, useContext } from "react";
import Pagination from "react-bootstrap/Pagination";
import * as Icon from "react-bootstrap-icons";
import ProductContext from "../context/ProductContext";

const PaginationBox = () => {
  const [newPage, setNewPage] = useState(0);
  const { page, setPage, pageCount } = useContext(ProductContext);  

  useEffect(() => {
    setPage(0);
    console.log(pageCount);
  }, []);

  useEffect(() => {
    setPage(newPage);
  }, [newPage]);

  let items = [];

  for (let number = 0; number <= pageCount; number++) {
    items.push(
      <li
        key={number}
        className={number === page ? "active" : null}
        onClick={() => {
          setNewPage(number);
        }}
      >
        <a>{number}</a>
      </li>
    );
  }

  return (
    <div className="paginatoin-area text-center">
      <ul className="pagination-box">
        <li
          onClick={() => {
            if (newPage > 1) {
              setNewPage(newPage - 1);
            }
          }}
        >
          <a className="previous">
            <Icon.ArrowLeft />
          </a>
        </li>
        {items}
        <li
          onClick={() => {
            if (newPage < pageCount) {
              setNewPage(page + 1);
            }
          }}
        >
          <a className="next">
            <Icon.ArrowRight />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PaginationBox;
