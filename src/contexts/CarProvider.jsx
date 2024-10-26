import { createContext, useContext, useState } from "react";

const CarContext = createContext();

const cars = [
  {
    id: 1,
    src: "/assets/cars/ford-everest.png",
    name: "Ford Everest",
    rent_per_day: 3500,
    model: "Everest Titanium",
    year: 2013,
    mark: "Ford",
    doors: 5,
    AC: "Yes",
    transmission: "Automatic",
    fuel: "Diesel",
  },
  {
    id: 2,
    src: "/assets/cars/hyundai-santa.png",
    name: "Hyundai Santa Fe",
    rent_per_day: 3000,
    model: "Santa Fe Sport",
    year: 2014,
    mark: "Hyundai",
    doors: 5,
    AC: "Yes",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 3,
    src: "/assets/cars/land-cruiser.png",
    name: "Toyota Land Cruiser",
    rent_per_day: 4500,
    model: "Land Cruiser VX",
    year: 2015,
    mark: "Toyota",
    doors: 5,
    AC: "Yes",
    transmission: "Automatic",
    fuel: "Diesel",
  },
  {
    id: 4,
    src: "/assets/cars/limousine.png",
    name: "Limousine",
    rent_per_day: 4000,
    model: "Stretch Limo",
    year: 2012,
    mark: "Lincoln",
    doors: 4,
    AC: "Yes",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 5,
    src: "/assets/cars/toyota-hiace.png",
    name: "Toyota Hiace",
    rent_per_day: 2500,
    model: "Hiace GL",
    year: 2011,
    mark: "Toyota",
    doors: 4,
    AC: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 6,
    src: "/assets/cars/toyota-hilux.png",
    name: "Toyota Hilux",
    rent_per_day: 3000,
    model: "Hilux SR5",
    year: 2016,
    mark: "Toyota",
    doors: 4,
    AC: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 7,
    src: "/assets/cars/toyota-prado.png",
    name: "Toyota Prado",
    rent_per_day: 3800,
    model: "Prado TXL",
    year: 2014,
    mark: "Toyota",
    doors: 5,
    AC: "Yes",
    transmission: "Automatic",
    fuel: "Diesel",
  },
  {
    id: 8,
    src: "/assets/cars/toyota-RAV4.png",
    name: "Toyota RAV4",
    rent_per_day: 2800,
    model: "RAV4 XLE",
    year: 2012,
    mark: "Toyota",
    doors: 5,
    AC: "Yes",
    transmission: "Automatic",
    fuel: "Petrol",
  },
];

function CarProvider({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState(cars[0]);

  return (
    <CarContext.Provider
      value={{ cars, isLoading, setLoading, selectedCar, setSelectedCar }}
    >
      {children}
    </CarContext.Provider>
  );
}

function useCar() {
  const context = useContext(CarContext);
  if (context === undefined) throw new Error("CarContext was used outside");
  return context;
}
export { CarProvider, useCar };
