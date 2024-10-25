import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Booking from "./Booking";
import BookingGuide from "./BookingGuide";
import VehicleModels from "./VehicleModels";
import WhyUs from "./WhyUs";
import Testimonial from "./Testimonial";
import FAQs from "./FAQs";
import Footer from "./Footer";
import BranchesMap from "./BranchesMap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <Booking />
              <BookingGuide />
              <VehicleModels />
              <WhyUs />
              <BranchesMap />
              <Testimonial />
              <FAQs />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
