import React from "react";

import { Link } from "react-router-dom";

import ProductCard from "../../components/product-card/productCard";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products = [] }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
