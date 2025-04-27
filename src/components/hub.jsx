import "./hub.css";
import React from "react";
import logo from "../assets/large2.png";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import image1 from "../assets/2w.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaHeart,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaYelp,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="WonLove Events" className="logo" />
          </a>
        </div>

        <nav className="main-navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/our-story">Our Story</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/services" className="active">
                Services
              </a>
            </li>
            <li>
              <a href="/contact-us">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="social-container">
          <SocialIcons />
        </div>
      </div>
    </header>
  );
};

const HeroSection2 = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Services</h1>
        <h2>
          You never get a second chance to create once in a lifetime memories
        </h2>
        <div className="divider"></div>
        <p>
          We know your special day is as unique as you so because of that, we
          offer a wide selection of services, each one tailor made to exceed
          your expectations.
        </p>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Full Wedding Service Design + Coordination",
      description:
        "This is your special moment. Let us take care of everything from location scouting to design, from décor to vendor relations. Together we'll plan the perfect, once in a lifetime experience you'll never forget.",
      features: [
        "Venue Consultation",
        "Checklist Development and Management",
        "Budget Development and Tracking",
        "Wedding Styling",
        "Etiquette Consultation",
        "Vendor Recommendations",
        "Planning Meetings",
        "Vendor Coordination",
        "Ceremony and Reception Coordination",
      ],
    },
    {
      title: "Partial Wedding Design + Planning",
      description:
        "Do you already have some vendors lined up but need guidance, support, and an experienced team to help lend some creative insight? Well, this may be the perfect package for you.",
      features: [
        "Part-Time Event Planning",
        "Budget Planning + Tracking",
        "Hotel Room Blocks + Transportation Arrangements",
        "Design Consult + Wedding Vision Board",
        "Full Event Design Packages",
        "RSVP Management + Stationery Design",
        "Additional Consultations + Meetings",
      ],
    },
    {
      title: 'Event Management "Month of" coordination',
      description:
        "Also known as 'Day of' coordination. This is for the couple who has planned the perfect event but wants a professional to help with last minute arrangements and oversight on that special day.",
      features: [
        "Pre-wedding Consultations",
        "RSVP Management",
        "Seating Chart Assistance",
        "Creation of a Wedding-Day Timeline",
        "Vendor Communication",
        "Vendor Contract Assistance",
        "Rehearsal Management",
        "Coordination of Ceremony and Reception",
      ],
    },
    {
      title: "Corporate and Social Event Planning",
      description:
        "Weddings are just the start. If we can plan the perfect once in a life experience for our brides and grooms, just imagine what we can do for your corporate or social gathering. As they say, sky's the limit.",
      features: [
        "Budgeting",
        "Scheduling",
        "Site Selection",
        "Acquiring Necessary Permits",
        "Coordinating Transportation and Parking",
        "Arranging for Speakers or Entertainment",
        "Arranging Décor",
        "Event Security",
        "Catering",
        "Coordinating with Third-Party Vendors",
        "Emergency Plans",
      ],
    },
    {
      title: "Youth And Children's Event Planning",
      description:
        "It's your child's special day and the one thing you want more than anything is to cherish that special moment with them. Let us put our knowledge to work in planning a fun, innovative, and unforgettable experience. We'll handle all the details so you can focus on what matters most, your child.",
      features: [
        "Budgeting",
        "Scheduling",
        "Creative Theme Consultation",
        "Site Selection (if needed)",
        "Venue Décor and Decoration Arrangement",
        "Catering",
        "Entertainment Coordination",
        "Coordinating with Third-Party Vendors",
        "Day of Event, On-Site Coordination",
      ],
    },
  ];

  return (
    <section className="services-section p-8 text-black bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-16">
        Our Premium Services
      </h2>
      {services.map((service, index) => (
        <motion.div
          className="service-container mb-12 flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        >
          <div className="service-image flex-1 relative group">
            <img
              src={image1}
              alt={service.title}
              className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="service-details p-8 flex-1 bg-white">
            <h3 className="text-3xl font-semibold text-gray-800 hover:text-pink-600 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 my-4">{service.description}</p>
            <h4 className="text-xl font-medium text-gray-700 mb-4">
              Our Customized Services Include:
            </h4>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {service.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="/contact-us"
              className="consultation-button mt-6 inline-block py-3 px-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:bg-gradient-to-l transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Book a Consultation
            </motion.a>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Janice is a life saver and I'm sooo incredibly happy I made the decision to have her as my wedding planner...",
      author: "Jessica C.",
      role: "Bride",
    },
    {
      quote:
        "Janice was wonderful to work with! There were times when I wanted to give up...",
      author: "Ada R.",
      role: "Bride",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Kind Words</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-2xl transition rounded-2xl p-6 h-full">
                <CardContent>
                  <p className="text-lg italic text-gray-600 mb-6">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Awards = () => {
  const awards = [
    {
      image: "BOW_DigitalBadge_2022_500x500.png",
      link: "https://www.weddingwire.com/biz/won-love-events/deabe75e7774cfa3.html",
    },
    {
      image: "BOW_DigitalBadge_2021_500x500.png",
      link: "https://www.theknot.com/marketplace/won-love-events-carlsbad-ca-2034797",
    },
    {
      image: "2022-Wedding-Wire-Award.png",
      link: "https://www.weddingwire.com/biz/won-love-events/deabe75e7774cfa3.html",
    },
    {
      image: "WW_badge-weddingawards_en_US.png",
      link: "https://www.weddingwire.com/biz/won-love-events/deabe75e7774cfa3.html",
    },
    {
      image: "Equally-Wed-Pro-Certified-Badge-transparent.png",
      link: "https://equallywed.com/",
    },
  ];

  return (
    <section className="awards-section py-12 bg-white">
      <h3 className="text-center text-3xl font-bold mb-8">Our Awards</h3>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {awards.map((award, index) => (
          <a
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <div className="award-item bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Award {index + 1}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const Footer2 = () => {
  return (
    <footer className="site-footer bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center">
          <div className="footer-navigation mb-6 md:mb-0">
            <ul className="flex flex-wrap gap-6">
              <li>
                <a href="/" className="hover:text-pink-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/our-story" className="hover:text-pink-300 transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-pink-300 transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-pink-300 transition">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-pink-300 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="social-footer mb-6 md:mb-0">
            <SocialIcons />
          </div>

          <div className="copyright text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} Won Love Events. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/wonloveevents",
      icon: <FaFacebook />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/wonloveevents",
      icon: <FaInstagram />,
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/wonloveevents/_saved",
      icon: <FaPinterest />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/wonloveevents",
      icon: <FaTwitter />,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UC7lX4j0Hw03i5bLduqd7CJw",
      icon: <FaYoutube />,
    },
    {
      name: "Yelp",
      url: "https://www.yelp.com/biz/won-love-events-carlsbad",
      icon: <FaYelp />,
    },
  ];

  return (
    <div className="social-icons flex gap-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="social-icon text-white hover:text-pink-300 text-xl transition"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -20, opacity: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar fixed w-full bg-white shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="logo flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaHeart size={28} className="text-pink-500" />
          </motion.div>
          <span className="font-bold text-xl">WonLove Events</span>
        </Link>

        <div className="desktop-menu hidden md:flex gap-8">
          {["About", "Portfolio", "Services", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="font-medium hover:text-pink-500 transition"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="mobile-menu-button md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      <motion.div
        className="mobile-menu md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg p-4"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
      >
        {["About", "Portfolio", "Services", "Contact"].map((item, i) => (
          <motion.div
            key={item}
            variants={itemVariants}
            transition={{ delay: i * 0.1 }}
            className="py-3 border-b border-gray-100"
          >
            <Link
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block font-medium hover:text-pink-500 transition"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export {
  Header,
  HeroSection2,
  ServicesSection,
  Testimonials,
  Awards,
  Footer2,
  Navbar2,
};
