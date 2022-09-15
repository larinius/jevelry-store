import React, { useState, useEffect, useContext } from "react";
import Pagination from "react-bootstrap/Pagination";
import ProductContext from "../context/ProductContext";

const PaginationBox = () => {
  const [page, setPage] = useState(1);

  const { products } = useContext(ProductContext);
  const { setStart } = useContext(ProductContext);
  const { setEnd } = useContext(ProductContext);

  const limit = 12;

  useEffect(() => {
    console.log(page);

    if (page === 1) {
      const s = 1;
      const e = page * limit;

      setStart(s);
      setEnd(e);
    } else {
      const s = (page - 1) * limit + page - 1;
      const e = (page - 1) * limit + limit + page - 1;

      setStart(s);
      setEnd(e);
    }

    setStart(page * limit);
    setEnd(page * limit + limit);
  }, [page]);

  const pageCount = Math.ceil(products.length / limit);

  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => {
          setPage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="paginatoin-area text-center">
      <Pagination className="pagination-box">{items}</Pagination>
    </div>
  );
};

export default PaginationBox;
