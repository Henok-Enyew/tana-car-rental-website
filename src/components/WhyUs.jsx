function WhyUs() {
  return (
    <div className="bg-primary-bg text-center">
      <div className="bg-gray-950 h-40 text-center py-4 px-4">
        <h2 className="font-semibold text-3xl mb-2 text-gray-200">
          Save big with our cheap car rental!
        </h2>
        <p className="text-gray-400 tracking-wider">
          Top airports, local suppliers,{" "}
          <span className="text-color-primary ">24/7</span> support
        </p>
      </div>
      <img src="/assets/cars.png" alt="Cars" className="w-72 mx-auto" />
    </div>
  );
}

export default WhyUs;
