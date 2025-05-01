import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faRing,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import YourLogo from "../assets/large2.png";
import HeroImage from "../assets/1w.jpg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", icon: faHeart },
    { name: "Our Story", icon: null },
    { name: "Our Services", icon: faRing },
    { name: "Gallery", icon: null },
    { name: "Contact Us", icon: null },
    { name: "About Us", icon: null },
    { name: "Book Now", icon: faCalendarAlt, highlight: true },
  ];

  const socials = [
    { icon: faFacebook, label: "Facebook" },
    { icon: faInstagram, label: "Instagram" },
    { icon: faPinterest, label: "Pinterest" },
    { icon: faTwitter, label: "Twitter" },
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
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={YourLogo}
              alt="Blissful Weddings Logo"
              className={`h-16 w-auto transition-all duration-500 ${
                scrolled ? "opacity-100" : "opacity-90"
              }`}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={`/${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`flex items-center ${
                    link.highlight
                      ? "bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700"
                      : "text-gray-800 hover:text-rose-600 px-3 py-2"
                  } rounded-md text-md font-medium transition-all duration-300 ${
                    !scrolled && !link.highlight ? "text-white" : ""
                  }`}
                >
                  {link.icon && (
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="mr-2 text-sm"
                    />
                  )}
                  {link.name}
                </a>
                {!link.highlight && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? "text-rose-600" : "text-white"
              } hover:text-rose-800 focus:outline-none transition-colors duration-300`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg
                  className="h-8 w-8"
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
                  className="h-8 w-8"
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
        <div className="md:hidden bg-white shadow-xl animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex items-center ${
                  link.highlight
                    ? "bg-rose-600 text-white px-4 py-2 rounded-full"
                    : "text-gray-800 hover:text-rose-600 px-3 py-2"
                } block rounded-md text-base font-medium hover:bg-gray-50 transition-colors duration-300`}
              >
                {link.icon && (
                  <FontAwesomeIcon icon={link.icon} className="mr-2 text-sm" />
                )}
                {link.name}
              </a>
            ))}
            <div className="flex justify-center space-x-6 py-4">
              {socials.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-rose-600 hover:scale-110 transition-transform duration-300"
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
          backgroundImage: `url('${HeroImage}')`,
          backgroundPosition: "center 25%",
          filter: "brightness(0.9)",
        }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-down">
            Creating Dream Weddings
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic font-light text-white mb-8 animate-fade-up delay-200">
            Where Love Meets Elegance
          </h2>

          <div className="mt-12 space-y-6">
            <p className="text-xl text-white opacity-90 max-w-2xl mx-auto animate-fade-in delay-400">
              Transforming your wedding vision into breathtaking reality with
              our exquisite decorations and attention to detail.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fade-in delay-600">
              <Link to="/our-story">
                <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Our Story
                </button>
              </Link>
              <Link to="/contact-us">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-rose-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Book a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scrolling indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Venue Decoration",
      description:
        "Complete transformation of your wedding venue with elegant floral arrangements, lighting, and thematic elements.",
      icon: "🏛️",
    },
    {
      title: "Mandap Design",
      description:
        "Exquisitely crafted mandaps that become the centerpiece of your wedding ceremony.",
      icon: "🌸",
    },
    {
      title: "Stage Decoration",
      description:
        "Stunning stage setups that create the perfect backdrop for your special moments.",
      icon: "✨",
    },
    {
      title: "Lighting Solutions",
      description:
        "Atmospheric lighting designs that set the perfect mood for your celebration.",
      icon: "💡",
    },
    {
      title: "Floral Arrangements",
      description:
        "Beautiful fresh flower decorations for every part of your wedding venue.",
      icon: "🌹",
    },
    {
      title: "Theme Weddings",
      description:
        "Complete thematic wedding experiences tailored to your unique vision.",
      icon: "🎨",
    },
  ];

  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Decoration Services
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive wedding decoration services to make your
            special day truly magical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const galleryItems = [
    { id: 1, category: "Mandap", title: "Royal Gold Mandap" },
    { id: 2, category: "Venue", title: "Garden Wedding Setup" },
    { id: 3, category: "Stage", title: "Floral Stage Design" },
    { id: 4, category: "Theme", title: "Rustic Chic Wedding" },
    { id: 5, category: "Mandap", title: "Modern Minimalist Mandap" },
    { id: 6, category: "Venue", title: "Grand Ballroom Setup" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Wedding Gallery
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through our portfolio of beautifully decorated weddings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                {/* Placeholder for image - in a real app, you would use actual images */}
                <div className="w-full h-64 bg-gradient-to-r from-rose-100 to-rose-200 flex items-center justify-center">
                  <span className="text-rose-600 text-lg font-medium">
                    {item.title}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sm text-rose-300 font-medium">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-1">
                  {item.title}
                </h3>
                <button className="mt-3 self-start text-white border-b border-transparent hover:border-white transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Blissful Weddings transformed our venue into a fairy tale setting beyond our expectations.",
      author: "Priya & Raj",
      role: "Bride & Groom",
    },
    {
      quote:
        "The attention to detail in our mandap decoration was absolutely breathtaking. All our guests were amazed!",
      author: "Ananya Sharma",
      role: "Mother of the Bride",
    },
    {
      quote:
        "Working with this team was a dream. They understood our vision perfectly and executed it flawlessly.",
      author: "Vikram Patel",
      role: "Groom",
    },
  ];

  return (
    <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold font-serif mb-14 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        >
          What Our Clients Say 💬
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-purple-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg italic mb-6 text-purple-100">
                “{testimonial.quote}”
              </p>
              <div className="text-purple-300 font-semibold">
                {testimonial.author}
              </div>
              <div className="text-purple-500 text-sm">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Gradient Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-400"
          >
            Ready to Plan Your Dream Wedding?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl max-w-2xl mx-auto mb-10 opacity-90"
          >
            Let’s turn your vision into a real-life fairytale. ✨ Slide into our
            DMs or ring us up!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(244, 63, 94, 0.7)",
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-10 rounded-full transition-all duration-300 shadow-xl"
            >
              💌 Get a Free Quote
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.6)",
              }}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-10 rounded-full transition-all duration-300"
            >
              📞 Call Us Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export { HomePage, Navbar, HeroSection };
