import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Typography, Box } from "@mui/material";
import image1 from "../assets/1w.jpg";
import image2 from "../assets/2w.jpg";
import image3 from "../assets/3w.jpg";

const ImageCarousel = () => {
  const images = [image1, image2, image3];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 1,
          color: "#333",
          fontFamily: "'Indie Flower', cursive", // Casual font for title
          textTransform: "capitalize", // Capitalize title
          mt:3
        }}
      >
        our events
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{
          mb: 3,
          color: "#555",
          fontFamily: "'Shadows Into Light', cursive", // Casual font for description
          mt:3
        }}
      >
        It is through life’s special moments and unforgettable memories that we
        celebrate today and dream about tomorrow.
      </Typography>

      <div className="w-full max-w-screen-lg p-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>
  );
};

export default ImageCarousel;