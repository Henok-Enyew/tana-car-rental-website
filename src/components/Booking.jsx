import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCar } from "../contexts/CarProvider";

function Booking() {
  const { cars, selectedCar, setSelectedCar } = useCar();
  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [dropOffDate, setDropOffDate] = useState(new Date());
  const [pickUpLocation, setPickUpLocation] = useState(null);
  const [dropOffLocation, setDropOffLocation] = useState(null);
  return (
    <div className="bg-primary-bg px-6 w-full lg:mt-20" id="booking">
      <h3
        data-aos="fade-up"
        className="font-semibold mb-2 sm:text-lg text-center text-gray-300"
      >
        Vehicle Models
      </h3>
      <h2
        data-aos="fade-up"
        className="font-semibold text-2xl text-gray-200 pb-8 text-center mt-2 lg:text-4xl"
      >
        Book a car
      </h2>
      <form
        action=""
        className="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 lg:px-10"
      >
        <div className="sm:w-4/5">
          <label
            data-aos="fade-up"
            data-aos-duration="600"
            className="font-semibold flex text-gray-200 gap-3 pb-3 sm:w-full "
          >
            <svg
              className="fill-color-primary h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h96v8a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM80,152H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm120,0H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM44.31,104,69.2,48H186.8l24.89,56Z"></path>
            </svg>
            Select your car type
          </label>
          <select
            name=""
            id=""
            className="bg-primary-bg text-gray-400 border-b-[1px] border-gray-500 rounded-sm mb-6 w-60 sm:w-full sm:w-full "
            onChange={(e) => setSelectedCar(JSON.parse(e.target.value))}
          >
            <option value={selectedCar} selected>
              Select your car type
            </option>
            {cars.map((car) => (
              <option value={JSON.stringify(car)} key={car.id}>
                {car.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:w-4/5">
          <label
            data-aos="fade-up"
            data-aos-duration="600"
            className="font-semibold flex text-gray-200 gap-3 pb-3 sm:w-full "
          >
            <svg
              className="fill-color-primary h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
            </svg>
            Pick up location
          </label>
          <select
            name=""
            id=""
            value={pickUpLocation}
            className="bg-primary-bg text-gray-400 border-b-[1px] border-gray-500 rounded-sm w-60 sm:w-full mb-6 "
            onChange={(e) => setPickUpLocation(e.target.value)}
          >
            <option value="" selected>
              Select your pick up location
            </option>
            <option value="addisabeba">Addis Ababa</option>
            <option value="bahirdar">Bahir Dar</option>
            <option value="gondar">Gondar</option>
            <option value="hawassa">Hawassa</option>
            <option value="diredawa">Dire Dawa</option>
            <option value="mekelle">Mekelle</option>
            <option value="adama">Adama</option>
            <option value="jimma">Jimma</option>
          </select>
        </div>
        <div className="sm:w-4/5">
          <label
            data-aos="fade-up"
            data-aos-duration="600"
            className="font-semibold flex text-gray-200 gap-3 pb-3 sm:w-full "
          >
            <svg
              className="fill-color-primary h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
            </svg>
            Drop off location
          </label>
          <select
            name=""
            id=""
            value={dropOffLocation}
            className="bg-primary-bg text-gray-400 border-b-[1px] border-gray-500 rounded-sm w-60 sm:w-full mb-6 "
            onChange={(e) => setDropOffLocation(e.target.value)}
          >
            <option value="" selected>
              Select your drop off location
            </option>
            <option value="addisabeba">Addis Ababa</option>
            <option value="bahirdar">Bahir Dar</option>
            <option value="gondar">Gondar</option>
            <option value="hawassa">Hawassa</option>
            <option value="diredawa">Dire Dawa</option>
            <option value="mekelle">Mekelle</option>
            <option value="adama">Adama</option>
            <option value="jimma">Jimma</option>
          </select>
        </div>
        <div className="sm:w-4/5">
          <label
            data-aos="fade-up"
            data-aos-duration="600"
            className="font-semibold flex text-gray-200 gap-3 pb-3 sm:w-full "
          >
            <svg
              className="fill-color-primary h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM169.66,133.66l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35a8,8,0,0,1,11.32,11.32ZM48,80V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80Z"></path>
            </svg>
            Pick-up
          </label>
          <DatePicker
            className="bg-primary-bg text-gray-400 border-b-[1px] border-gray-500 rounded-sm w-60 sm:w-full mb-6 "
            selected={pickUpDate ?? new Date()}
            onChange={(date) => setPickUpDate(date)}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
          />
        </div>
        <div className="sm:w-4/5">
          <label
            data-aos="fade-up"
            data-aos-duration="600"
            className="font-semibold flex text-gray-200 gap-3 pb-3 sm:w-full "
          >
            <svg
              className="fill-color-primary h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM152,160H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm56-80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"></path>
            </svg>
            Drop-off
          </label>
          <DatePicker
            className="bg-primary-bg text-gray-400 border-b-[1px] border-gray-500 rounded-sm w-60 sm:w-full mb-6 "
            onChange={(date) => setDropOffDate(date)}
            selected={dropOffDate ?? new Date()}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
          />
        </div>
        <a
          href="#models"
          className="bg-color-primary  text-gray-900 px-12 py-2 mb-2 w-60 text-lg flex justify-center items-center  sm:w-4/5"
        >
          Search
        </a>
      </form>
    </div>
  );
}

export default Booking;
