import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import {
  //   Product,
  Loader,
  Message,
  Paginate,
  ProductCard,
  Meta,
} from "../../components";
import {
  listProducts,
  topRatedProduct,
  latestProduct,
} from "../../actions/productActions";

const Product = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { pageNumber } = useParams() || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  console.log(products);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div className="grid items-center grid-cols-1 sm:grid-cols-2">
      {products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
};

export default Product;
