import React from "react";
import '../components/styleCssFiles/burningLine.css'
const CardsAbout = () => {
  const cards = [
    {
      src: "images/Mission.png",
      text: "To enhance prosperity of farmers through quality farm solutions with sustainable value for all stakeholders.",
      label: "Mission",
    },
    {
      src: "images/special_nutrients.png",
      text: "Harnessing innovation and technology to deliver sustainable pesticide solutions for healthier crops and a greener future.",
      label: "Innovation & Technology",
    },
    {
      src: "images/Values-and.png",
      text: "The fundamental principle of economic activity is that no man you transact with will lose; then you shall not.",
      label: "Values and Belief",
    },
    {
      src: "images/vision.png",
      text: "To be the leader in farm solutions business in geography of choice, consistently delivering superior value to stakeholders through highly engaged employees, with a strong commitment towards sustainability and our values.",
      label: "Vision",
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center py-16 px-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-green-500 hover:text-blue-800 transition-colors duration-300 mb-2">
        OUR VISION, MISSION AND VALUES
      </h1>
      <div className="burning-line-container mb-8">
        <div className="burning-line"></div>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ maxWidth: "300px", width: "100%" }}
          >
            <div className="relative">
              <img
                src={card.src}
                alt={card.label}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {card.label}
              </h3>
              <p className="text-sm text-gray-600">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsAbout;
