import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/1w.jpg';
import image2 from '../assets/2w.jpg';
import image3 from '../assets/3w.jpg';
import image4 from '../assets/4w.jpg';
const images = [image1, image2, image3, image4, image1, image2, image3, image4];


const ImageSlideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768, // Tablets and smaller devices
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 1024, // Small desktops
        settings: {
          dots: true,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="wedding-slider-container" // Changed class name
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="wedding-slide-item"> {/* Changed class name */}
            <motion.img
              src={image}
              alt={`Wedding ${index}`}
              className="wedding-slider-image" 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8 }}
            />
            <div className="wedding-image-overlay"></div> {/* Changed class name */}
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};


const Testimonials1 = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const testimonials = [
    {
      quote: "Janice is a life saver and I'm sooo incredibly happy I made the decision to have her as my wedding planner. She has gone above and beyond to not only make me and my fiancé feel special and have her full attention, but to also be available to me at any time. From the moment I chose her, she has gone out of her way to invest in my wedding and life in general so she can help make my life easier. She also has so many ideas to help with ALL weddings/situations, and always has an answer to my problems/ dilemmas. I would HIGHLY recommend Janice as your wedding planner and I promise you will NOT be disappointed. This woman deserves a halo!! My wedding angel 😇. She is worth so much more than she charges! If you are on the fence between choosing a wedding planner, all I can say is....Book her! Book her! Book her!",
      author: "Jessica C.",
      role: "Bride"
    },
    {
      quote: "Janice was wonderful to work with! There were times when I wanted to give up, (it was especially difficult planning a wedding during the pandemic), but Janice was always very positive & gave me hope that I could have 'my' wedding day as I had always envisioned. And she was right! Her ideas, positivity, enthusiasm and help is just what I needed! The day of my wedding she went around checking on all my guests during the reception which I didn't expect but thought was great. I even received compliments from my guests on how nice and great they thought she was. I feel she went above & beyond what I paid for and highly recommend her to any bride out there who needs help having a fabulous wedding day!",
      author: "Ada R.",
      role: "Bride"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8 }}
      className="py-12 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Kind Words
        </motion.h2>
        
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-item"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white shadow-lg hover:shadow-2xl transition rounded-2xl p-6 h-full">
                <motion.div 
                  className="text-6xl text-pink-400 mb-4"
                  animate={{ rotate: [0, 10, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  "
                </motion.div>
                
                <p className="text-lg italic text-gray-600 mb-6">
                  {testimonial.quote}
                </p>
                
                <motion.div
                  className="mt-4 p-4 bg-pink-50 rounded-lg"
                  whileHover={{ scale: 1.01 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{testimonial.author}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </motion.div>
                
                <motion.div
                  className="mt-6"
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="text-sm text-pink-600 font-medium">
                    Highly recommended - Book her today!
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};



const HeroSection1 = () => {
  const target = useRef(null);
  const background = useParallax({
    speed: -20,
    targetElement: target.current,
  });
  const text = useParallax({
    speed: 10,
    targetElement: target.current,
  });

  return (
    <section ref={target} className="hero-section">
      <motion.div 
        className="hero-background"
        ref={background.ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="hero-content">
        <motion.div
          ref={text.ref}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Your Passion Is Making Your Dreams A Reality</h1>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};


export {ImageSlideshow,Testimonials1, HeroSection1};
