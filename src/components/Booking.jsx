import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Booking() {
  return (
    <div className="bg-primary-bg px-6" id="booking">
      <h2 className="font-semibold text-xl text-gray-200 pb-4">Book a car</h2>

      <form action="">
        <label className="font-semibold flex text-gray-200 gap-3 pb-3 ">
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
          className="bg-primary-bg text-gray-400 border-b-[1px] border-gray-500 rounded-sm mb-6 w-60"
        >
          <option value="" selected>
            Select your car type
          </option>
          <option value="">Toyota Land Cruiser</option>
          <option value="">Toyota Prado</option>
          <option value="">Mitsubishi Pajero</option>
          <option value="">Nissan Patrol</option>
          <option value="">Toyota RAV4</option>
          <option value="">Hyundai Santa Fe</option>
          <option value="">Ford Everest</option>
          <option value="">Toyota Hiace</option>
          <option value="">Hyundai H1</option>
          <option value="">Mercedes-Benz E-Class</option>
        </select>

        <label className="font-semibold flex text-gray-200 gap-3 pb-3 ">
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
          className="bg-primary-bg text-gray-400 border-b-[1px] border-gray-500 rounded-sm w-60 mb-6 "
        >
          <option value="" selected>
            Select your pick up location
          </option>
          <option value="">Addis Ababa</option>
          <option value="">Bahir Dar</option>
          <option value="">Gondar</option>
          <option value="">Hawassa</option>
          <option value="">Dire Dawa</option>
          <option value="">Mekelle</option>
          <option value="">Adama</option>
          <option value="">Harar</option>
          <option value="">Jimma</option>
          <option value="">Axum</option>
        </select>
        <label className="font-semibold flex text-gray-200 gap-3 pb-3 ">
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
          className="bg-primary-bg text-gray-400 border-b-[1px] border-gray-500 rounded-sm w-60 mb-6 "
        >
          <option value="" selected>
            Select your drop off location
          </option>
          <option value="">Addis Ababa</option>
          <option value="">Bahir Dar</option>
          <option value="">Gondar</option>
          <option value="">Hawassa</option>
          <option value="">Dire Dawa</option>
          <option value="">Mekelle</option>
          <option value="">Adama</option>
          <option value="">Harar</option>
          <option value="">Jimma</option>
          <option value="">Axum</option>
        </select>
        <label className="font-semibold flex text-gray-200 gap-3 pb-3 ">
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
          className="bg-primary-bg text-gray-400 border-b-[1px] border-gray-500 rounded-sm w-60 mb-6 "
          selected={new Date()}
          // onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
        />
        <label className="font-semibold flex text-gray-200 gap-3 pb-3 ">
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
          className="bg-primary-bg text-gray-400 border-b-[1px] border-gray-500 rounded-sm w-60 mb-6 "
          selected={new Date()}
          // onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
        />
        <button
          type="submit"
          className="bg-color-primary text-gray-900 px-12 py-2 mb-2 w-60 text-lg "
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Booking;
