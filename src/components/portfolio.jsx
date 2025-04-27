import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './hub.css';

// Particle effect component
const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 3,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0.2, 0],
          }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0',
      light: '#d05ce3',
      dark: '#6a0080',
    },
    secondary: {
      main: '#2196f3',
      light: '#6ec6ff',
      dark: '#0069c0',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Poppins", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.05em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
  },
});

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImage}
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={images[currentImage]} 
            alt="Event background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <Particles />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="z-10 text-center px-4 w-full max-w-6xl"
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6"
        >
          <motion.span 
            className="text-lg md:text-xl font-semibold text-white bg-purple-600 px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            WENDOVE EVENTS
          </motion.span>
        </motion.div>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Create Unforgettable
          </span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Moments
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10"
        >
          It is through life's special moments and unforgettable memories that we celebrate today and dream about tomorrow.
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(156, 39, 176, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg"
          >
            EXPLORE PORTFOLIO
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg"
          >
            BOOK CONSULTATION
          </motion.button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

const PortfolioSection = () => {
  const events = [
    {
      id: 1,
      title: "Wedding Bliss",
      description: "Elegant wedding with romantic floral arrangements",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Weddings"
    },
    {
      id: 2,
      title: "Corporate Gala",
      description: "Sophisticated corporate event with modern design",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Corporate"
    },
    {
      id: 3,
      title: "Birthday Extravaganza",
      description: "Colorful birthday celebration with creative themes",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Private"
    },
    {
      id: 4,
      title: "Charity Fundraiser",
      description: "Elegant charity event with silent auction",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Charity"
    },
    {
      id: 5,
      title: "Product Launch",
      description: "Innovative product reveal with interactive elements",
      image: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      category: "Corporate"
    },
    {
      id: 6,
      title: "Anniversary Party",
      description: "Golden anniversary celebration with vintage theme",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Private"
    }
  ];

  const categories = ["All", "Weddings", "Corporate", "Private", "Charity"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Featured <span className="text-purple-600">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${activeCategory === category ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-16 !overflow-visible"
        >
          {filteredEvents.map((event) => (
            <SwiperSlide key={event.id} className="!w-[320px] md:!w-[380px]">
              <motion.div 
                whileHover={{ y: -15 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group relative"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-purple-600 font-semibold flex items-center group"
                  >
                    View Details
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const PlanningSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const services = [
    {
      title: "Wedding Planning",
      description: "Full-service wedding planning from concept to execution. We handle every detail so you can enjoy your special day.",
      icon: "💍"
    },
    {
      title: "Corporate Events",
      description: "Professional event management for conferences, product launches, and corporate gatherings.",
      icon: "🏢"
    },
    {
      title: "Private Celebrations",
      description: "Memorable birthday parties, anniversaries, and other personal milestones.",
      icon: "🎉"
    },
    {
      title: "Charity Galas",
      description: "Elegant fundraising events that maximize donor engagement and contributions.",
      icon: "❤️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-purple-300 uppercase">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Start <span className="text-pink-300">Planning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">{services[activeTab].title}</h3>
                <p className="text-lg text-white/90 mb-6">{services[activeTab].description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {services.map((service, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab(index)}
                      className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${activeTab === index ? 'bg-white text-purple-900' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                      {service.icon} {service.title}
                    </motion.button>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-4 rounded-xl font-bold text-lg"
                >
                  Book a Consultation
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-30"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 overflow-hidden">
                <div className="text-8xl mb-6 opacity-80">{services[activeTab].icon}</div>
                <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "10+ years of experience",
                    "500+ successful events",
                    "Dedicated event managers",
                    "Vendor relationships",
                    "Attention to detail",
                    "Stress-free planning"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wedding Client",
      quote: "Wendove Events made our wedding day absolutely perfect. Every detail was taken care of and we could just enjoy our special day.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Corporate Client",
      quote: "Our product launch was a huge success thanks to the team's impeccable planning and execution. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Birthday Client",
      quote: "The surprise party they organized for my 30th was beyond anything I could have imagined. Truly unforgettable!",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            What Our <span className="text-purple-600">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl shadow-lg p-8 h-full"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-purple-100">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-purple-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            Ready to Create Your Dream Event?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-12 max-w-3xl mx-auto"
          >
            Contact us today to start planning your unforgettable experience with our expert team.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg"
            >
              GET IN TOUCH
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg"
            >
              CALL NOW
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};







import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const events = [
  {
    id: 1,
    title: "Elegant Lounge Setup",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Luxury Wedding Venue",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Garden Ceremony",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Modern Banquet Hall",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
  }
];

const PortfolioGallery = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center py-20 px-4"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/white-wall-3.png')" }}
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">OUR EVENTS</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          It is through life’s special moments and unforgettable memories that we celebrate today and dream about tomorrow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg shadow-lg bg-white"
          >
            <Card className="rounded-lg">
              <CardMedia
                component="img"
                image={event.image}
                alt={event.title}
                className="h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
              <CardContent className="bg-white text-center">
                <Typography variant="h6" className="text-gray-800 font-semibold">{event.title}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};












const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <PortfolioSection />
        <TestimonialsSection />
        <PortfolioGallery/>
        <PlanningSection />
        <CtaSection />

        
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;