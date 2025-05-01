import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HeroSection, HomePage } from "./components/Navbar"; // your Navbar is kinda acting like homepage
import { Navbar } from "./components/Navbar";
import {
  Header,
  HeroSection2,
  ServicesSection,
  Testimonials,
  Awards,
  Footer2,
  Navbar2,
} from "./components/hub";
import ActionAreaCard from "./components/services";
import MediaCard from "./components/layout";
import ImageCarousel from "./components/slider";
import ImageCarousel1 from "./components/bottomslider";
import Footer from "./components/footer";
import InstagramSection from "./components/follow";
import ContactPage from "./components/contect";
import Portfolio from "./components/portfolio";
import InsertDecoratorPage from "./components/Create_Product.jsx";

import {
  ImageSlideshow,
  Testimonials1,
  HeroSection1,
} from "./components/storybaner";

import OurStoryPage from "./components/ourstory";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage/>
            </>
          }
        />
        <Route
          path="/Home"
          element={
            <>
              <HeroSection />
              <MediaCard />
              <ActionAreaCard />
              <ImageCarousel />
              <ImageCarousel1 />
              <InstagramSection />
            </>
          }
        />
        <Route path="/contact-us" element={<ContactPage />} />

        <Route
          path="/about-us"
          element={
            <>
              <HeroSection1 />
              <Testimonials1 />
            </>
          }
        />

        <Route
          path="/our-services"
          element={
            <>
              <ImageSlideshow />
              <ServicesSection />
           
              <Awards />
              
            </>
          }
        />
        <Route path="/gallery" element={<><Portfolio />  <Testimonials /></>} />
        <Route path="/our-story" element={<><ImageSlideshow /><OurStoryPage /></>} />
        <Route path="/create" element={<InsertDecoratorPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
