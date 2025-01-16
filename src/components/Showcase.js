import React from "react";
import { useNavigate } from "react-router-dom";

const Showcase = () => {
  const navigate = useNavigate();
  const industries = [
    {
      name: "Healthcare",
      image: "images/unnamed.png",
      subtitle: "Innovating medical solutions.",
      link: "/healthcare",
    },
    {
      name: "Agriculture",
      image: "images/unnamed5.png",
      subtitle: "Empowering sustainable farming.",
      link: "/agriculture",
    },
    {
      name: "Technology",
      image: "https://via.placeholder.com/300/FFD700/000000?text=Technology",
      subtitle: "Advancing digital frontiers.",
      link: "/technology",
    },
  ];

  return (
    <div className="min-h- bg-white flex flex-col items-center py-10 px-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 hover:text-green-500">
        We Target the Industries
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              className="relative cursor-pointer"
              onClick={() => navigate(industry.link)}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
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
