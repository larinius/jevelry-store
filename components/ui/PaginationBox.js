import React, { useState, useEffect, useContext } from "react";
import Pagination from "react-bootstrap/Pagination";
import * as Icon from "react-bootstrap-icons";
import ProductContext from "../context/ProductContext";

const PaginationBox = () => {
  const [page, setPage] = useState(1);
  const { products } = useContext(ProductContext);
  const { setCurrentPage } = useContext(ProductContext);

  const productsLimit = parseInt(process.env.NEXT_PUBLIC_PAGINATION_LIMIT);
  const pageCount = Math.ceil(products.length / productsLimit);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    setCurrentPage(page);

  }, [page]);

  let items = [];

  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <li
        key={number}
        className={number === page ? "active" : null}
        onClick={() => {
          setPage(number);
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
              if (page > 1) {
                setPage(page - 1);
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
              if (page < pageCount) {
                setPage(page + 1);
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
