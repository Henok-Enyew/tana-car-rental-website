function WhyUs() {
  return (
    <div className="bg-primary-bg text-center text-gray-200 " id="whyus">
      <div className="bg-gray-950 h-40 text-center py-4 px-4">
        <h2 data-aos="fade-up" className="font-semibold text-3xl text-gray-200">
          Save big with our cheap car rental!
        </h2>
        <p data-aos="fade-up" className="text-gray-400 tracking-wider">
          Top airports, local suppliers,{" "}
          <span
            className="text-color-primary "
            data-aos="zooom-out"
            data-aos-duration="1200"
          >
            24/7
          </span>{" "}
          support
        </p>
      </div>
      <img
        data-aos="zooom-out-down"
        src="/assets/cars.png"
        alt="Cars"
        className="w-90 mx-auto my-10"
      />

      <h3 data-aos="fade-up" className="font-semibold mb-1">
        Why Choose Us
      </h3>
      <h2 data-aos="fade-up" className="font-semibold text-3xl mb-6">
        Best valued deals you will ever find
      </h2>
      <p data-aos="fade-up" className="text-gray-400 text-sm px-4">
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
