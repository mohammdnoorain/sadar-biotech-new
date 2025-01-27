import React, { useState } from "react";

const Certification = () => {
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);

  const handleImageClick = () => {
    setIsImageFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsImageFullScreen(false);
  };

  return (
    <div className="bg-white flex items-center justify-center p-4 sm:p-8">
      <div
        className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row gap-6 w-full max-w-screen-lg"
        style={{ height: "auto" }} // Adjust height dynamically
      >
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-green-500">
            CERTIFICATE
          </h2>
          <p className="text-sm sm:text-base mb-2">
            This certifies that the management system of Sadar Biotech has been
            assessed and found compliant with ISO 9001:2015 standards.
          </p>
          <p className="text-sm sm:text-base">
            Validity: 20/11/2024 - 19/11/2027.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/images/iso.jpg" // Correct path assuming the image is in public/images
            alt="ISO Certification"
            className="w-36 sm:w-48 h-auto cursor-pointer border border-gray-300 rounded-lg shadow-md"
            onClick={handleImageClick}
          />
        </div>
      </div>

      {/* Full-Screen Image Modal */}
      {isImageFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <img
            src="/images/iso.jpg" // Correct path assuming the image is in public/images
            alt="ISO Certification Full Size"
            className="max-w-full max-h-full"
          />
          <button
            onClick={handleCloseFullScreen}
            className="absolute top-4 right-4 text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Certification;
