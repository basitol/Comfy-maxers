import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "../../components";

const Product = ({ product }) => {
  return (
    <Card className="my-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} alt="shoe" variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              color={"#71D636"}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as="h5">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
