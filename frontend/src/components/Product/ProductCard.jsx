import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Message, Loader } from "../";

const ProductCard = ({ name, _id, description, price, image, discount }) => {
  return (
    <>
      <div
        className="product-card w-full sm:w-1/2 p-2.5 bg-slate-100 rounded-xl shadow-md z-50"
        style={{ flex: "0 0 auto", height: "470px" }}
      >
        <div
          className="product-image relative w-full overflow-hidden"
          style={{ height: "350px" }}
        >
          {discount && (
            <span className="absolute bg-slate-100 p-1.5 rounded text-red-500 top-2.5 right-2.5 z-50 capitalize">
              50% off
            </span>
          )}
          <img
            src={image}
            alt="shoe"
            className="w-full relative overflow-hidden object-cover rounded-lg"
            style={{ height: "350px" }}
          />
          <button
            className="card-btn p-1.5 absolute w-11/12 bottom-2.5 left-1/2 capitalize border-none bg-slate-100 rounded opacity-0 hover:bg-slate-200"
            style={{
              transform: "translateX(-50%)",
              outline: "none",
              transition: "0.5s",
            }}
          >
            <Link
              to={`/product/${_id}`}
              className="text-gray-700 hover:text-gray-700"
              style={{ textDecoration: "none" }}
            >
              product details
            </Link>
          </button>
        </div>
        <div className="product-info w-full pt-2.5" style={{ height: "100px" }}>
          <h2 className="capitalize pb-0">{name}</h2>
          <p className="w-full h-5 overflow-hidden opacity-50 capitalize my-1 mx-0 leading-5 capitalize">
            {description}
          </p>
          <span className="price font-black text-xl">${price}</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
