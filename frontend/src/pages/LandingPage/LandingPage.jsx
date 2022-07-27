import React, { useEffect } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { topRatedProduct } from "../../actions/productActions";

import "./LandingPage.scss";

const LandingPage = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { products, loading, error } = productTopRated;

  console.log(products);

  useEffect(() => {
    dispatch(topRatedProduct());
  }, [dispatch]);

  return (
    <div>
      <section className="top-rated-section">
        <h2>Top rated</h2>
        <div
          className="product-container w-auto flex overflow-x-auto scroll-smooth"
          style={{ padding: "0 5vw" }}
        >
          {products.map((product) => (
            <div
              className="product-card mr-10"
              style={{ flex: "0 0 auto", width: "250px", height: "450px" }}
            >
              <div
                className="product-image relative w-full overflow-hidden"
                style={{ height: "350px" }}
              >
                {product.discount && (
                  <span className="absolute bg-slate-100 p-1.5 rounded text-red-500 top-2.5 right-2.5 z-50 capitalize">
                    50% off
                  </span>
                )}
                <img
                  src={product.image}
                  alt="shoe"
                  className="w-full relative overflow-hidden object-cover"
                  style={{ height: "350px" }}
                />
                <button
                  className="card-btn p-1.5 absolute w-11/12 bottom-2.5 left-1/2 capitalize border-none bg-slate-100 rounded text-gray-700 opacity-0 hover:bg-slate-200"
                  style={{
                    transform: "translateX(-50%)",
                    outline: "none",
                    transition: "0.5s",
                  }}
                >
                  add to cart
                </button>
              </div>
              <div
                className="product-info w-full pt-2.5"
                style={{ height: "100px" }}
              >
                <h2 className="capitalize pb-0">{product.brand}</h2>
                <p className="w-full h-5 overflow-hidden opacity-50 capitalize my-1 mx-0 leading-5 capitalize">
                  a short line description...
                </p>
                <span className="price font-black text-xl">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}

          {/* {products.map((product) => (
              <div className="top-rated-container w-96" key={product._id}>
                <div className="top-rated-item-image">
                  <img src={product.image} alt="product" />
                  <div className="top-rated-item-image-overlay">
                    <FiShoppingCart />
                    <p>Add to cart</p>
                    <FiUser />
                    <p>Add to wishlist</p>
                    <Link to="/product/1">
                      <p>View product</p>
                    </Link>
                    <p>
                      <span>$</span>
                      <span>100</span>
                    </p>
                  </div>
                </div>
              </div>
            ))} */}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
