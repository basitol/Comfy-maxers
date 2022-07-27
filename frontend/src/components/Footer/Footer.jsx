import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="bg-gray-800 mt-5" style={{ padding: "40px 5vw" }}>
      <div className="flex w-full justify-between">
        <div className="h-40">
          <img src="./images/light-logo.png" alt="logo" className="h-full" />{" "}
        </div>
        <div className="w-6/12 flex justify-between">
          <ul className="w-48 grid grid-cols-2 gap-2.5 list-none f-con">
            <li className="col-span-2 capitalize text-slate-200 text-xl mb-5">
              men
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                t-shirts
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                sweatshirts
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                shirts
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                jeans
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                trousers
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                casuals
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                formals
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                shoes
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                canvas
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                sport
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                watch
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                glasses
              </Link>
            </li>
          </ul>
          <ul className="w-48 grid grid-cols-2 gap-2.5 list-none f-con">
            <li className="col-span-2 text-slate-200 capitalize text-xl mb-5">
              women
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                t-shirts
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                sweatshirts
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                shirts
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                jeans
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                trousers
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                casuals
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                formals
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                shoes
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                canvas
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                sport
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                watch
              </Link>
            </li>
            <li className="">
              <Link to="/" className="no-underline capitalize text-gray-400">
                glasses
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-gray-300">
        <p className="mt-20 capitalize text-xl font-semibold">about company</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>support emails - help@clothing.com , customersupport@clothing.com</p>
        <p>telephone - 180 00 00 001, 180 00 00 002</p>
        <div className="social mt-10 flex justify-between no-underline">
          <div>
            <Link to="/" className="text-white capitalize">
              terms & services
            </Link>
            <Link to="/" className="text-white ml-5 capitalize">
              Privacy page
            </Link>
          </div>
          <div className="flex">
            <Link to="/" className="text-white ml-5 capitalize">
              <FaInstagram />
            </Link>
            <Link to="/" className="text-white ml-5 capitalize">
              <FaFacebook />
            </Link>
            <Link to="/" className="text-white ml-5 capitalize">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center py-3 text-white">
        Copyright &copy; Comfy Maxers
      </div>
    </section>
  );
};

export default Footer;
