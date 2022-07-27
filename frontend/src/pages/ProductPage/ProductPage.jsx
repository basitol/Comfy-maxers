import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
import { Rating, Loader, Message, Meta } from "../../components";
import { IoIosArrowBack } from "react-icons/io";
import {
  listProductsDetails,
  createProductReview,
} from "../../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../constants/productConstants";
import "./ProductPage.scss";

const ProductPage = () => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // console.log(rating);

  const { id } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, products } = productDetails;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successReview, error: errorReview } = productReviewCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (successReview) {
      alert("Review submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductsDetails(id));
  }, [dispatch, id, successReview]);

  const addToCartHandler = () => {
    console.log("Clicked");
    navigate(`/cart/${id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createProductReview(id, {
        rating,
        comment,
      })
    );
  };

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
        <>
          <Meta title={products.name} />
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

                  {products.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty:</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(products.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
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
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {products.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {products.reviews.map((review) => {
                  return (
                    <ListGroup.Item key={review._id}>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} />
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  );
                })}
                <ListGroup.Item>
                  <h2>Write a customer review</h2>
                  {errorReview && (
                    <Message variant="danger">{errorReview}</Message>
                  )}
                  {userInfo ? (
                    <Form>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Selcet One</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        type="button"
                        variant="primary"
                        className="btn"
                        onClick={submitHandler}
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">Sign in</Link> to write a review
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductPage;
