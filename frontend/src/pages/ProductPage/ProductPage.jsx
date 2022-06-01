import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { Rating, Loader, Message } from "../../components";
import { IoIosArrowBack } from "react-icons/io";
import { listProductsDetails } from "../../actions/productActions";
import "./ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, products } = productDetails;
  console.log(productDetails);

  useEffect(() => {
    dispatch(listProductsDetails(id));
  }, [dispatch, id]);

  // const product = products.find((p) => p._id === id);
  return (
    <>
      <div className="my-3">
        <Link to="/">
          <IoIosArrowBack />
        </Link>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={products.image} alt={products.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{products.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={products.rating}
                  text={`${products.numReviews} reviews`}
                  color={"#00BC8C"}
                />
              </ListGroup.Item>

              <ListGroup.Item>price: ${products.price}</ListGroup.Item>

              <ListGroup.Item>
                Description: {products.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${products.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {products.countInStock > 0
                          ? "In stock"
                          : "Out of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className="btn-block w-100"
                    type="button"
                    disabled={products.countInStock < 1}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductPage;
