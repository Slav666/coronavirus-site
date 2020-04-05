import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const ProductPage = ({ match }) => {
  return (
    <>
      <Product id={match.params.id} />

      <Link to="/products"> Back to the info List</Link>
    </>
  );
};

export default ProductPage;
