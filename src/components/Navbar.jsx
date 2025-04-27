import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";

import YourLogo from "../assets/large2.png";
import MyCustomImage from "../assets/banner.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    "Home",
    "Our Story",
    "Portfolio",
    "Services",
    "Contact",
    "Aboutus",
  ];
  const socials = [
    { icon: faFacebook, label: "Facebook" },
    { icon: faInstagram, label: "Instagram" },
    { icon: faPinterest, label: "Pinterest" },
    { icon: faTwitter, label: "Twitter" },
    { icon: faYoutube, label: "Youtube" },
    { icon: faYelp, label: "Yelp" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-xl" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-30">
          {" "}
          {/* Increased height */}
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={YourLogo} alt="Your Brand Logo" className="h-10 w-auto" />{" "}
            {/* Adjusted logo size */}
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link} className="relative group">
                <a
                  href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-md font-medium transition-colors duration-300"
                >
                  {link}
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
          </nav>
          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            {socials.map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-indigo-600 hover:scale-110 transition-transform duration-300"
                aria-label={label}
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-600 hover:text-indigo-800 focus:outline-none transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 animate-fade-in"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
            <div className="flex justify-center space-x-6 py-4">
              {socials.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-indigo-600 hover:scale-110 transition-transform duration-300"
                  aria-label={label}
                >
                  <FontAwesomeIcon icon={icon} size="lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Full-width background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${MyCustomImage}')`,
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-down">
            {" "}
            {/* Fade down */}
            AWARD WINNING EXPERIENCES.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-up delay-200">
            {" "}
            {/* Fade up with delay */}
            ONCE IN A LIFETIME MEMORIES.
          </h2>
          <div className="mt-12 animate-pulse delay-500">
            {" "}
            {/* Pulse animation with delay */}
            <span className="text-2xl md:text-4xl font-bold text-white border-t-2 border-b-2 border-white py-2 px-6">
              WON LOVE EVENTS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />

      {/* Rest of your page content would go here */}
    </div>
  );
};

export { HomePage, Navbar, HeroSection };
