import MyCustomImage from "../assets/banner.jpg"; // Ensure the path is correct for your image
import React from "react";

function Banner1() {
  return (
    <div className="w-full m-0 p-0 overflow-hidden">
      <div className="relative w-full h-screen"> {/* Changed to h-screen for full viewport height */}
        {/* Full cover image */}
        <img
          src={MyCustomImage}
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover min-w-full"
          style={{ width: '100vw' }} // Ensures full viewport width
        />
        
        {/* Overlay content */}
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              AWARD WINNING EXPERIENCES.
            </h1>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-8">
              ONCE IN A LIFETIME MEMORIES.
            </h2>
            <div className="mt-8">
              <span className="text-white text-2xl md:text-4xl font-bold border-t-2 border-b-2 border-white py-2 px-6">
                WON LOVE EVENTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner1;