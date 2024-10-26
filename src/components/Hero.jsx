import ButtonBookRide from "./ButtonBookRide";
import ButtonLearnMore from "./ButtonLearnMore";

function Hero() {
  return (
    <div className="bg-primary-bg h-full flex flex-col items-center px-3 py-6 text-gray-200 line mt-8">
      <h2
        data-aos="fade-up"
        data-aos-duration="600"
        className="text-xl font-semibold mb-4"
      >
        Plan your trip now
      </h2>
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
        className="text-4xl font-bold text-center pb-8"
      >
        Save <span className="text-color-primary "> big </span> with our car
        rental{" "}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="800"
        className="text-sm text-center text-gray-400 mb-10"
      >
        Rent the car of your dream. Unbelivable prices, unlimited miles,
        flexible pick-up options and much more!
      </p>
      <ButtonBookRide />
      <ButtonLearnMore />
      <img
        src="/assets/hero.png"
        alt="Car"
        className="w-70"
        data-aos="fade-up"
        data-aos-duration="600"
      />
    </div>
  );
}

export default Hero;
