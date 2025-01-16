import React, { useState } from "react";
import "./styleCssFiles/ProductShowcase.css" // Import the CSS file for styles

const ProductShowcase = () => {
  const products = [
    {
      name: "Agro-Technical Product",
      manufacturer: "Sujag Fine Chemicals",
      description:
        "Innovative solutions for sustainable crop production and agricultural efficiency.",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
      image: "images/sujag.jpg",
    },
    {
      name: "Surfactant",
      manufacturer: "Sadar Biotec Pvt Ltd",
      description:
        "Surfactants play a key role in industrial cleaning and product formulations.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      image: "images/about3.png",
    },
    {
      name: "API and Excipients",
      manufacturer: "Vinishaw Pharmaceuticals Pvt Ltd",
      description:
        "High-quality APIs and excipients for advanced pharmaceutical solutions.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      image: "images/unnamed7.png",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  const positions = [
    { angle: 270, radius: 260 }, // Top
    { angle: 150, radius: 300 }, // Left
    { angle: 30, radius: 300 }, // Right
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-24 text-blue-800">
        Our Products and Manufacturers
      </h1>
      {/* Rotational Layout */}
      <div className="relative w-[700px] h-[700px] flex items-center justify-center">
        <div className="fire-circle"></div> {/* Green burning fire effect */}
        {products.map((product, index) => {
          const { angle, radius } = positions[index];
          const radians = (angle * Math.PI) / 180;
          const x = radius * Math.cos(radians);
          const y = radius * Math.sin(radians);

          return (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`absolute w-64 h-80 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 ${
                hoverIndex === index ? "scale-110 shadow-2xl" : "scale-100"
              }`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="relative w-full h-40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <h2
                  className={`absolute bottom-0 left-0 right-0 bg-opacity-75 bg-black text-white text-center text-lg font-bold py-1`}
                >
                  {product.name}
                </h2>
              </div>
              <p
                className={`mt-4 text-base font-semibold text-center ${product.textColor}`}
              >
                {product.manufacturer}
              </p>
              <p className="text-sm text-gray-600 text-center mt-2 px-4">
                {product.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductShowcase;
