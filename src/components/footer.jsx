import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube, FaYelp } from "react-icons/fa"; // Importing social media icons from React Icons

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">WENDOVE</span>
              <span className="ml-2">EVENTS</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Creating unforgettable moments through exceptional event planning and design.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-white"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Our Story', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Wedding Planning', 'Corporate Events', 'Private Parties', 'Charity Galas', 'Event Design'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <address className="text-gray-400 not-italic space-y-3">
              <p className="flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                123 Event Street, New York, NY 10001
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                (555) 123-4567
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                info@wendoveevents.com
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Wendove Events. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
