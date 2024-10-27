function WhyUs() {
  return (
    <div className="bg-primary-bg text-center text-gray-200 " id="whyus">
      <div className="bg-gray-950 h-40 text-center py-10 px-4 ">
        <h2
          data-aos="fade-up"
          className="font-semibold text-3xl text-gray-200 sm:text-4xl "
        >
          Save big with our cheap car rental!
        </h2>
        <p
          data-aos="fade-up"
          className="text-gray-400 tracking-wider sm:text-lg"
        >
          Top airports, local suppliers,{" "}
          <span className="text-color-primary ">24/7</span> support
        </p>
      </div>
      <img
        data-aos="fade-up"
        src="/assets/cars.png"
        alt="Cars"
        className="w-90 mx-auto my-10 lg:w-1/2 lg:my-5"
      />

      <h3 data-aos="fade-up" className="font-semibold mb-1 sm:text-lg">
        Why Choose Us
      </h3>
      <h2
        data-aos="fade-up"
        className="font-semibold text-3xl mb-6 sm:text-4xl"
      >
        Best valued deals you will ever find
      </h2>
      <p
        data-aos="fade-up"
        className="text-gray-400 text-sm px-4 sm:text-lg lg:px-36"
      >
        Discover the best deals you&apos;ll ever find with our unbeatable
        offers. We&apos;re dedicated to providing you with the best value for
        your money. so you can enjoy top-quality services and products without
        breaking the bank. Our deals are designed to give you the ultimate
        renting experience, so dont miss out on your chance to save big.
      </p>
    </div>
  );
}

export default WhyUs;
