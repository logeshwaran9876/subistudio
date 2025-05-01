import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Instagram icon from React Icons
import image1 from '../assets/1w.jpg';
import image2 from '../assets/2w.jpg';
import image3 from '../assets/3w.jpg'; 
import image4 from '../assets/4w.jpg'; // Import additional images if needed

const InstagramSection = () => {
  // Array of image URLs (replace with actual URLs of your Instagram images)
  const images = [image1, image2, image3, image4, image1, image2, image3, image4];

  return (
    <div className="w-full py-10 bg-gray-200 text-white">

      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Instagram Icon */}
        <div className="mb-6">
          <FaInstagram size={50} className="mx-auto text-pink-500" />
        </div>
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-500">
          Follow Me on Instagram
        </h2>

        {/* Grid Layout for Images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={src}
                alt={`Instagram Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Instagram link */}
        <div className="mt-8">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-xl font-bold hover:underline"
          >
            Visit my Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
