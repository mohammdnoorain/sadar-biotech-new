import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [nav, setNav] = useState(false);
  const menuRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  return (
    <div className="fixed top-20 left-0 w-full shadow-md z-20 text-white flex justify-between items-center h-16 px-4 bg-blue-800">
      <h1 className="text-3xl font-bold primary-color ml-4 " >
        {/* Add logo or brand here */}
      </h1>

      <ul className="hidden md:flex space-x-4"> {/* Increased space between items */}
        {/* Navigation Links with Hover Effect */}
        <li className="p-5 group">
          <Link
            to="/"
            className="text-xl relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li className="p-5 group">
          <Link
            to="/about"
            className="text-xl relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
          >
            About
          </Link>
        </li>
        <li className="p-5 group">
          <Link
            to="/products"
            className="text-xl relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
          >
            Products
          </Link>
        </li>
        <li className="p-5 group">
          <Link
            to="/research"
            className="text-xl relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
          >
            R&D
          </Link>
        </li>
        <li className="p-5 group">
          <Link
            to="/contact"
            className="text-xl relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <div
        onClick={handleNav}
        className="fixed top-17 right-4 block md:hidden sm:block"
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={
          nav
            ? "z-50 text-grey-300 fixed h-full left-0 top-10 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold primary-color ml-4">
          {/* Add logo or brand here */}
        </h1>
        <ul className="p-8 text-2xl text-white space-y-4"> {/* Added more vertical space */}
          <li className="p-2 group">
            <Link
              to="/"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li className="p-2 group">
            <Link
              to="/about"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
            >
              About
            </Link>
          </li>
          <li className="p-2 group">
            <Link
              to="/products"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
            >
              Products
            </Link>
          </li>
          <li className="p-2 group">
            <Link
              to="/research"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
            >
              R&D
            </Link>
          </li>
          <li className="p-2 group">
            <Link
              to="/contact"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
