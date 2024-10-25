import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Booking from "./Booking";
import BookingGuide from "./BookingGuide";
import VehicleModels from "./VehicleModels";
import WhyUs from "./WhyUs";
import Testimonial from "./Testimonial";
import FAQs from "./FAQs";

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
              <Testimonial />
              <FAQs />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
