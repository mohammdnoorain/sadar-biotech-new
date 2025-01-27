import React from "react";
import { useNavigate } from "react-router-dom";

const Showcase = () => {
  const navigate = useNavigate();
  const industries = [
    {
      name: "Healthcare",
      image: "images/unnamed.png",
    },
    {
      name: "Agrochemicals ",
      image: "images/agrochemicals1.webp",
    },
    {
      name: "Technology",
      image: "images/reserachimg.jpg",
    },
    {
      name: "Food, Feed and Pharma ",
      image: "images/pharma2.jpg",
    },
    {
      name: "Home and Personal Care ",
      image: "images/homecare2.webp",
    },
    {
      name: "Pharma and Chemical intermediates",
      image: "images/PHARMA.jpg",
    },
  ];

  return (
    <div className="min-h- bg-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-green-500 mb-8 hover:text-blue-800">
        We Target the Industries
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ maxWidth: "400px" }}
          >
            <div
              className="relative cursor-pointer"
              onClick={() => navigate(industry.link)}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Removed the SVG arrow */}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {industry.name}
              </h3>
              <p className="text-sm text-gray-600">{industry.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
