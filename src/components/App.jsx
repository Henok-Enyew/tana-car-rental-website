import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Booking from "./Booking";
import BookingGuide from "./BookingGuide";

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
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
