import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
  faYelp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <>
     
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96 bg-gray-800 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 font-playfair mb-6">
              Contact <span className="text-gray-200">Us</span>
            </h1>
            <p className="text-xl text-gray-300 font-montserrat">
              We can't wait to discuss your event! We provide to all of our prospective clients a{' '}
              <span className="font-semibold">one-hour complimentary consultation</span> to discuss their vision and 
              provide us with the background we need to create an unforgettable experience.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 font-playfair mb-8 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gray-800 text-gray-200 font-medium rounded-md hover:bg-gray-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=Kanjikovil,%20Erode&t=m&z=10&output=embed&iwloc=near"
                  title="San Diego"
                  aria-label="San Diego"
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 font-playfair mb-6">Get In Touch</h2>
                <div className="w-20 h-1 bg-gray-800 mb-8"></div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-800 mt-1 mr-4" />
                    <span className="text-gray-700 font-montserrat">+91 9942075715</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-800 mt-1 mr-4" />
                    <a href="mailto:janice@wonloveevents.com" className="text-gray-700 hover:text-gray-800 font-montserrat">
                      SubiStudio@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-800 mt-1 mr-4" />
                    <span className="text-gray-700 font-montserrat">Subi photography &  Electronics & mobiles & subi tv erode Kanjikovil</span>
                  </li>
                </ul>
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-gray-800 font-playfair mb-4">Hours of Operation</h3>
                  <p className="text-gray-700 font-montserrat">Mon - Sun: 9am - 7pm</p>
                </div>
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-gray-800 font-playfair mb-4">Our Socials</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: faFacebook, url: 'https://www.facebook.com/wonloveevents' },
                      { icon: faInstagram, url: 'https://www.instagram.com/wonloveevents' },
                      { icon: faPinterest, url: 'https://www.pinterest.com/wonloveevents/_saved' },
                      { icon: faTwitter, url: 'https://twitter.com/wonloveevents' },
                      { icon: faYoutube, url: 'https://www.youtube.com/channel/UC7lX4j0Hw03i5bLduqd7CJw' },
                      { icon: faYelp, url: 'https://www.yelp.com/biz/won-love-events-carlsbad' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-gray-600"
                      >
                        <FontAwesomeIcon icon={social.icon} size="lg" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 font-playfair mb-2">Kind Words</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto mb-12"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <blockquote className="text-gray-700 italic font-montserrat mb-6">
                "After hiring Janice and her team we spent many hours in person and on conference calls together planning the wedding. Janice's input and ideas were invaluable! She is also very well connected with a wide range of vendors for all budgets. Unfortunately, due to the Covid virus the wedding was postponed until the spring. Of course we didn't hesitate to book Janice and her team for the new date. After two large weddings we know what to look for in a coordinator/company, and finding Janice was a huge blessing."
              </blockquote>
              <cite className="text-gray-800 font-semibold font-playfair">— Bill D</cite>
            </div>
          </div>
        </section>

  
      </main>


      {/* Global Styles */}
      <style jsx global>{`
        body {
          font-family: 'Montserrat', sans-serif;
          color: #4B4F58;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </>
  );
};

export default ContactPage;