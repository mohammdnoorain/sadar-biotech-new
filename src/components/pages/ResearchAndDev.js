import React from "react";
import HeroSectionResearch from "../HeroSectionResearch";
import Footer from "../Footer";

const ResearchAndDev = () => {
  return (
    <>
      <HeroSectionResearch />
    <div className="bg-gradient-to-b from-white via-white to-sky-400 min-h-screen">

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-12 tracking-wide text-yellow-300  hover:text-green-500 transition-colors duration-300">
          Research & Development
        </h1>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to Sadar Biotech Private Limited, a global leader
              committed to transforming agriculture through innovation,
              reliability, and sustainability. Explore our pioneering Research
              and Development (R&D) initiatives focused on bio-pesticides and
              surfactants. Our dedication to eco-friendly and reliable solutions
              is here for the future.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-500">
            <img
              src="images/ecofriendly.jpg"
              alt="Research Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Surfactant Highlight Section */}
        <div className="bg-gradient-to-r from-green-400 to-sky-400 p-8 rounded-lg shadow-2xl mb-16">
          <h2 className="text-3xl font-bold text-yellow-300 mb-6">
            Our Registered Surfactant: ALCOL
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our latest triumph, the registered surfactant “ALCOL,” showcases
            our commitment to excellence. Initially, we started with surfactants
            and solvents under our brand name like:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>ALCOL T20</li>
            <li>ALCOL ET/25</li>
            <li>ALCOL 671</li>
            <li>ALCOL 672</li>
            <li>ALCOL SVS 150</li>
            <li>ALCOL SVS 200</li>
            <li>ALCOL SVS 250</li>
          </ul>
        </div>

        {/* Sustainability Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              As our demand and efficiency grew, our customers inspired us to
              work even harder to develop more products. This native product of
              ours enhances agricultural inputs’ efficacy, ensuring optimal
              performance across diverse conditions. At Sadar Biotech, we
              prioritize environmental sustainability, aligning our R&D goals
              with a greener future for agriculture.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-500">
            <img
              src="images/sustainability.jpg"
              alt="Sustainability Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Closing Section */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-yellow-300 mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-lg text-gray-700">
            Beyond these products, our R&D teams are actively involved in
            groundbreaking work on bio-pesticides and surfactants. Join us on
            this journey of excellence, where our “Factory to Farm” approach
            delivers high-quality products directly to you. Choose Sadar Biotech
            as your trusted partner for sustainable and innovative solutions in
            agriculture and pharmaceuticals. Let’s cultivate a future of
            excellence together.
          </p>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default ResearchAndDev;
