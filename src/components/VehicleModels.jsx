import { useEffect } from "react";
import { useCar } from "../contexts/CarProvider";
import ClipLoader from "react-spinners/ClipLoader";
function VehicleModels() {
  const { selectedCar, isLoading, setLoading, setSelectedCar, cars } = useCar();
  useEffect(
    function () {
      selectedCar !== null && setLoading(true);
    },
    [selectedCar, setLoading]
  );

  return (
    <div
      className="bg-primary-bg pb-14 px-4 text-center text-gray-200"
      id="models"
    >
      <h3 data-aos="fade-up" className="font-semibold mb-2">
        Vehicle Models
      </h3>
      <h2 data-aos="fade-up" className="font-semibold text-3xl mb-5">
        {" "}
        Our rental fleet
      </h2>
      <p data-aos="fade-up" className="text-xs px-3 text-gray-400">
        Choose from a variety of our amazing vehicles to rent for your next
        adventure or business trip{" "}
      </p>
      <div
        data-aos="fade-zoom-in"
        className="flex flex-col pl-4 justify-center  mt-8 mb-16"
      >
        {cars.map((car) => (
          <button
            className={`border-[1px] border-gray-500 border-b-[0] px-4 py-2 w-64 text-start font-semibold transition-all duration-300 hover:bg-color-primary hover:text-gray-800 ${
              car.id === selectedCar.id && "text-gray-800 bg-color-primary"
            } ${car.id == 8 && "!border-b-[1px]"}`}
            key={car.id}
            onClick={() => setSelectedCar(car)}
          >
            {car.name}
          </button>
        ))}
      </div>

      <div className="h-60 ">
        <ClipLoader
          color="#11d8c7"
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          // className="absolute left-20 top-20"
        />
        <img
          // data-aos="fade-up"
          src={`${selectedCar.src}`}
          alt={`${selectedCar.name}`}
          onLoad={() => setLoading(false)}
          className={`w-70 transition-opacity duration-500 ${
            isLoading ? "hidden" : "0"
          }`}
        />
      </div>
      <div data-aos="fade-zoom-in" className="flex flex-col mt-14 mx-2">
        <div className="table-cell bg-color-primary text-gray-700">
          <span className="text-xl font-bold">
            {selectedCar.rent_per_day} ETB
          </span>{" "}
          /<span>rent per day </span>
        </div>
        <div className="table-cell">
          <span>Model</span>
          <span>{selectedCar.model}</span>
        </div>
        <div className="table-cell">
          <span>Mark</span>
          <span>{selectedCar.mark}</span>
        </div>
        <div className="table-cell">
          <span>Year</span>
          <span>{selectedCar.year}</span>
        </div>
        <div className="table-cell">
          <span>Doors</span>
          <span>{selectedCar.doors}</span>
        </div>
        <div className="table-cell">
          <span>AC</span> <span>{selectedCar.AC}</span>
        </div>
        <div className="table-cell">
          <span>Transmission</span>
          <span>{selectedCar.transmission}</span>
        </div>
        <div className="table-cell !border-b-[1px]">
          <span>Fuel</span>
          <span>{selectedCar.fuel}</span>
        </div>
        <button className="bg-color-primary text-gray-900 mt-3 py-2 uppercase textxl font-semibold">
          Reserve now
        </button>
      </div>
    </div>
  );
}

export default VehicleModels;
