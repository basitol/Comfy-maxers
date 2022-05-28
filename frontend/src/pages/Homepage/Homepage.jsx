import React, { useState, useEffect } from "react";
// import products from "../../products";
import { Row, Col } from "react-bootstrap";
import { Product } from "../../components";
import axios from "axios";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    // call the function
    fetchProducts();

    // make sure to catch any error
    // .catch(console.error);
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;
