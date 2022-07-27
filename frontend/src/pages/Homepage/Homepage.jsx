import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import {
  Product,
  Loader,
  Message,
  Paginate,
  ProductCarousel,
  Meta,
} from "../../components";
import {
  listProducts,
  topRatedProduct,
  latestProduct,
} from "../../actions/productActions";

import "./HomePage.scss";

const Homepage = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { pageNumber } = useParams() || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productTopRated = useSelector((state) => state.productTopRated);
  const {
    products: topRatedProducts,
    loading: topRatedLoading,
    error: topRatedError,
  } = productTopRated;

  const productLatest = useSelector((state) => state.productLatest);
  const {
    products: latestProducts,
    loading: latestLoading,
    error: latestError,
  } = productLatest;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
    dispatch(topRatedProduct());
    dispatch(latestProduct());
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <>
          <section className="hero-section w-full h-[calc(100vh+120px)] bg-cover bg-no-repeat flex items-center justify-center">
            <div className="hero-section-content">
              <img
                src="/images/light-logo.png"
                alt="logo"
                className="logo h-36 block m-auto"
              />
              <p className="mt-2.5 text-center color-white capitalize text-4xl font-light">
                best collection of all time
              </p>
            </div>
          </section>

          <section className="top-rated-section z-50">
            <h2 className="" style={{ padding: "1rem 5vw 0px" }}>
              Top rated products
            </h2>
            <div
              className="product-container w-auto flex overflow-x-auto scroll-smooth"
              style={{ padding: "10px 5vw" }}
            >
              {topRatedProducts.map((topProduct) => (
                <ProductCarousel key={topProduct._id} {...topProduct} />
              ))}
              {/* <ProductCarousel /> */}
            </div>
          </section>

          <section className="top-rated-section z-50">
            <h2 className="" style={{ padding: "1rem 5vw 0px" }}>
              latest products
            </h2>
            <div
              className="product-container w-auto flex overflow-x-auto scroll-smooth"
              style={{ padding: "10px 5vw" }}
            >
              {latestProducts.map((latestProduct) => (
                <ProductCarousel key={latestProduct._id} {...latestProduct} />
              ))}
            </div>
          </section>

          <section className="w-full mt-5 grid grid-cols-2 gap-2.5">
            <Link to="/" className="relative collection">
              <img
                src="./images/alltrousers.jpg"
                alt="trousers"
                className="w-full h-full object-cover"
              />
              <p>
                Trousers <br />
                apparels
              </p>
            </Link>
            <Link to="/" className="relative collection">
              <img
                src="./images/allshoes.jpg"
                alt="trousers"
                className="w-full h-full object-cover"
              />
              <p>
                Shoes <br />
                apparels
              </p>
            </Link>
            <Link to="/" className="relative collection col-span-2">
              <img
                src="./images/allshirts.jpg"
                alt="trousers"
                className="w-full h-full object-cover"
              />
              <p>
                Shirts <br />
                apparels
              </p>
            </Link>
          </section>
        </>
      ) : (
        <Link to="/" className="btn btn-light">
          Go back
        </Link>
      )}

      {/* <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ""}
          />
        </>
      )} */}
    </>
  );
};

export default Homepage;
