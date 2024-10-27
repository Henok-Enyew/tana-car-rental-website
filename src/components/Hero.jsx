import ButtonBookRide from "./ButtonBookRide";
import ButtonLearnMore from "./ButtonLearnMore";

function Hero() {
  return (
    <div className="bg-primary-bg h-full flex flex-col items-center px-3 sm:px-6 py-6 text-gray-200 line mt-8 lg:flex lg:flex-row lg:gap-3">
      <div className="flex flex-col items-center lg:px-14">
        <h2
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-xl font-semibold mb-4 sm:text-2xl lg:text-3xl"
        >
          Plan your trip now
        </h2>

        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-4xl font-bold text-center pb-8 sm:text-5xl lg:text-6xl"
        >
          Save <span className="text-color-primary "> big </span> with our car
          rental{" "}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-sm text-center text-gray-400 mb-10 sm:text-lg lg:text-xl"
        >
          Rent the car of your dream. Unbelivable prices, unlimited miles,
          flexible pick-up options and much more!
        </p>
        <div className="sm:flex gap-2 items-start">
          <ButtonBookRide />
          <ButtonLearnMore />
        </div>
      </div>
      <img
        src="/assets/cars/toyota-RAV4.png"
        alt="Car"
        className="w-70 my-6 lg:w-1/2 lg:my-2"
        data-aos="fade-up"
        data-aos-duration="600"
      />
    </div>
  );
}

export default Hero;
