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
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Animation duration in ms
  //     once: false, // Only animate once per element
  //   });
  // }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    window.addEventListener("scroll", AOS.refresh); // Refresh AOS on scroll
    return () => window.removeEventListener("scroll", AOS.refresh);
  }, []);

  return (
    <div className="relative bg-primary-bg">
      <Homepage />
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

    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <>
    //           <Homepage />
    //           <Booking />
    //           <BookingGuide />
    //           <VehicleModels />
    //           <WhyUs />
    //           <BranchesMap />
    //           <Testimonial />
    //           <FAQs />
    //           <Footer />
    //         </>
    //       }
    //     ></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
