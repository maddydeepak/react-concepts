import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-gray-200 border border-gray-400 shadow-xl">
      <Link to="/">
        <img src={logo} className="h-28 p-2" alt="logo"></img>
      </Link>
      <ul className="flex py-2 px-2">
        <Link to="/">
          <li className="px-2">Home</li>
        </Link>
        <Link to="/about">
          <li className="px-2">About</li>
        </Link>
        <Link to="/contact">
          <li className="px-2">Contact</li>
        </Link>
        <Link to="/cart">
          <li className="px-2">Cart {cartItems.length} Items</li>
        </Link>
      </ul>
      <span className="font-bold text-red-900 m-2 ">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
