import React from "react";
import { Link } from "react-router-dom";

const Showcase2 = () => {
  const cards = [
    {
      src: "images/api.jpg",
      text: "Sadar Biotech manufactures cutting-edge pharma products and intermediates which address relevant therapeutic areas.",
      label: "API & Intermediates",
      link: "/products",
    },
    {
      src: "images/p&f.jpg",
      text: "We offer a wide range of Pesticides, PGR, Fertilizer & Bio stimulants.",
      label: "Pesticides & Fertilizer",
      link: "/products",
    },
    {
      src: "images/cropped-surf.webp",
      text: "We manufacture efficient, easy bonding surfactants and adjuvants with targeted application for different uses.",
      label: "Surfactant",
      link: "/products",
    },
    {
      src: "images/a&t.jpg",
      text: "High-Quality Agro-Technical Products for Modern Farming Needs. Boost Crop Protection and Yield with Our Range of Insecticides, Herbicides, and Bio-Stimulants.",
      label: "Agro-Technical Products",
      link: "/products",
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-green-500 mb-8 hover:text-blue-800">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ maxWidth: "300px", width: "100%" }}
          >
            <Link to={card.link}>
              <div className="relative">
                <img
                  src={card.src}
                  alt={card.label}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay with arrow */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.label}
                </h3>
                <p className="text-sm text-gray-600">{card.text}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase2;
