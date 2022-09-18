import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";

const CatalogSideMenu = () => {
  return (
    <aside className="sidebar-wrapper">
      <CategoryFilter />
    </aside>
  );
};

export default CatalogSideMenu;
