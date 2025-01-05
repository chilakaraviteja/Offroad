import logo from "../assets/Images/logo.svg";
import person from "../assets/Images/person.svg";
import favorite from "../assets/Images/favorite.svg";
import location from "../assets/Images/location.svg";
import shopping_cart from "../assets/Images/shopping_cart.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-transparent fixed w-screen font-semibold flex justify-between items-center px-8 md:px-24 py-6 text-white">
        <div className="flex">
          <div className="w-10 md:w-12">
            <img src={logo} alt="BMW logo" />
          </div>
          <div className="hidden md:flex ml-4">
            <ul className="flex">
              <li className="list-items">
                <Link to="/models">Models</Link>
              </li>
              <li className="list-items">
                <Link to="/electric">Electric</Link>
              </li>
              <li className="list-items">
                <Link to="/build-price">Build & Price</Link>
              </li>
              <li className="list-items">
                <Link to="/shop-online">Shop Online</Link>
              </li>
              <li className="list-items">
                <Link to="/more-bmw">More BMW</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center md:gap-6">
          <a className="hover:border-b-blue-500 hover:border-b-4 p-2 cursor-pointer">
            <img src={person} alt="profile" className="w-6" />
          </a>
          <a className="hover:border-b-blue-500 hover:border-b-4 p-2 cursor-pointer">
            <img src={shopping_cart} alt="shopping-cart" className="w-6 " />
          </a>
          <a className="hover:border-b-blue-500 hover:border-b-4 p-2 cursor-pointer">
            <img src={favorite} alt="favorite" className="w-6 " />
          </a>
          <a className="hover:border-b-blue-500 hover:border-b-4 p-2 cursor-pointer">
            <img src={location} alt="loation" className="w-6 " />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
