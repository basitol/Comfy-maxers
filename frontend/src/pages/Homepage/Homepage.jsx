import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Product, Loader, Message } from "../../components";
import { listProducts } from "../../actions/productActions";

const Homepage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  console.log(products, loading);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Homepage;
