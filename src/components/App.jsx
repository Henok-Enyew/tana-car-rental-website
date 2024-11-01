// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Booking from "./Booking";
import BookingGuide from "./BookingGuide";
import VehicleModels from "./VehicleModels";
import WhyUs from "./WhyUs";
import Testimonial from "./Testimonial";
import FAQs from "./FAQs";
import Footer from "./Footer";
import BranchesMap from "./BranchesMap";
import GoUp from "./GoUp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CarProvider } from "../contexts/CarProvider";
import LogoMarquee from "./LogoMarqueue";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    window.addEventListener("scroll", AOS.refresh);
    return () => window.removeEventListener("scroll", AOS.refresh);
  }, []);

  return (
    <CarProvider>
      <div className="relative bg-primary-bg">
        <Homepage />
        <LogoMarquee />
        <Booking />
        <BookingGuide />
        <VehicleModels />
        <WhyUs />
        <BranchesMap />
        <Testimonial />
        <FAQs />
        <Footer />
        <GoUp />
      </div>
    </CarProvider>
  );
}

export default App;
