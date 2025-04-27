import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Keep only the necessary modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // No need for navigation styles if we're removing arrows

import image1 from '../assets/1w.jpg';
import image2 from '../assets/2w.jpg';
import image3 from '../assets/3w.jpg'; 
import image4 from '../assets/4w.jpg'; // Import additional images if needed

const ImageCarousel1 = () => {
  const images = [image1, image2, image3, image4];

  return (
    <div className="w-full mx-auto p-4 h-[300px] mb-10"> {/* Custom height for the container */}
      <Swiper
        modules={[Autoplay]} // Only use Autoplay module
        spaceBetween={30}
        slidesPerView={3} // One image per slide
        pagination={{ clickable: true }} // Enable pagination
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-[300px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
    
    </div>
  );
};

export default ImageCarousel1;
