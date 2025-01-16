import React from "react";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const TopNavbar = () => {
  return (
    <div className="fixed top-0 h-10 bg-white flex flex-col md:flex-row items-center justify-between px-4 py-4 sm:py-6 w-full min-h-[80px] z-20">
      {/* Logo Section */}
      <div className="flex-shrink-0 md:mt-4">
        <img 
          src="images/logo.jpg" 
          alt="Logo" 
          className="w-20 sm:w-24 md:w-36 mt-[-20px] md:mt-[-38px] md:mb-[-44px]" 
        />
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center justify-center  md:space-x-4 mt-4 mb-6 sm:mt-1 text-center ">
        <div className="flex flex-row space-x-2 items-center">
        <FaPhoneAlt className="text-gray-800 text-sm sm:text-base" />
          <p className=" text-gray-800 text-xs sm:text-sm md:text-base ">
            Contact: + 91 9226077649
          </p>
          <FaEnvelope className="text-gray-800 text-sm sm:text-base" />
          <p className="text-gray-800 text-xs sm:text-sm md:text-base">
            
email: info@sadarbiotech.com


          </p>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="flex space-x-3 mt-3 md:mt-0 mb-6    ">
        <a 
          href="https://www.facebook.com/Sadarbiotech/" 
          target="_blank" 
          rel="noopener noreferrer"
        className="hidden md:block text-blue-600 hover:text-blue-800 text-lg sm:text-xl"
        >
          <FaFacebook />
        </a>
        <a 
          href="https://www.linkedin.com/in/sadarbiotech" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block text-blue-600 hover:text-blue-800 text-lg sm:text-xl "
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default TopNavbar;
