import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="bg-white  flex items-center justify-center  ">
      <div className="  mx-auto p-6 shadow-lg border border-gray-200 w-[1300px] ">
        {/* Outer Wrapper */}
        <div className="flex flex-col md:flex-row">
          {/* Left Div - Contact Details */}
          <div className="w-full md:w-1/2 p-6 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-blue-800  hover:text-green-500 transition-colors duration-300">
              Contact Us
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Email:</span>{" "}
                info@sadarbiotech.com
              </p>
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Phone:</span> +91
                9226077649
              </p>
              {/* <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Registered office:</span>
                Sy. No. 136/11, Gauravaddo, Calangute, North Goa 403516
              </p>
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Admin office:</span>
                Above Puma Store, Floor 2, Chogm Road, Porvorim, North Goa 403521
              </p> */}
            </div>
            <button
              type="submit"
              className="h-12  mb-5 bg-green-500 text-white p-3 rounded-md shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 lg:w-auto px-6 mt-8"
            >
              <Link to="/contact"> Contact </Link>
            </button>
          </div>

          {/* Right Div - Map */}
          <div className="w-full md:w-1/2 relative p-6">
            {/* Map */}
            <div className="w-full h-64 bg-gray-200 relative z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248930.01903409262!2d73.71256223828127!3d15.525503400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbae3f4e0ffaf%3A0x5ab7a4ffce5da3f9!2sAbove%20Puma%20Store%2C%20Floor%202%2C%20Chogm%20Rd%2C%20Porvorim%2C%20North%20Goa%2C%20Goa%20403521!5e0!3m2!1sen!2sin!4v1678192862191!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>

            {/* Green Div */}
            <div className="absolute bg-green-500 w-2/3 h-[300px] top-0 right-[1%] shadow-md z-0">
              {/* Green div with sharp corners */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
