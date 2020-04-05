import React from "react";
import "../styles/Product.css";

const Product = props => {
  return (
    <article className="product">
      <p>{props.id}</p>
    </article>
  );
};

export default Product;
