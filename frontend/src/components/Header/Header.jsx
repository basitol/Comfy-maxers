import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../actions/userAction";

import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    window.location.reload();
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);

    if (e.target.value.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate(`/`);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.length === 0) {
      navigate(`/`);
    }

    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <div className="bg-slate-100 w-full">
      <div
        className="flex justify-between items-center"
        style={{ padding: "10px 5vw" }}
      >
        <img src="/images/dark-logo.png" alt="logo" className="h-14" />
        <div className="items flex align-center">
          <div className="search flex">
            <input
              type="text"
              placeholder="Search for products"
              className="w-4/5 h-8 p-2.5 rounded-l-xl text-neutral-400 capitalize placeholder:text-neutral-400"
              onChange={(e) => changeHandler(e)}
            />
            <button
              className="w-1/5 h-8 px-5 py-auto border-none text-base capitalize bg-gray-800 rounded-r-xl"
              onClick={submitHandler}
            >
              Search
            </button>
          </div>
          <div className="cart flex">
            <Link to="/login">
              <FiUser className="w-8 h-6 text-neutral-700" />
            </Link>
            <Link to="/cart">
              <FiShoppingCart className="w-8 h-6 text-neutral-700" />
            </Link>
          </div>
        </div>
      </div>
      <ul
        className="flex w-full justify-center list-none"
        style={{ padding: "10px 10vw", borderTop: "1px solid #d1d1d1" }}
      >
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Shirts
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Trousers
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Shoes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
