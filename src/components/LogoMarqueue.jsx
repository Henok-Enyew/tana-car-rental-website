import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <div className="bg-gray-900 py-6 w-full my-20">
      {/* <div className="overflow-hidden relative"> */}
      <Marquee
        speed={30}
        gradientColor="rgb(15, 23, 42)"
        gradientWidth={50}
        gradient={true}
        className="marq"
      >
        <img
          src="/assets/logos/Chapa.png"
          alt="Chapa"
          className="w-14 mr-20 lg:w-28 lg:mr-52 "
        />
        <img
          src="/assets/logos/CBE Birr.png"
          alt="CBE Birr"
          className="w-14 mr-20 lg:w-28 lg:mr-52 "
        />
        <img
          src="/assets/logos/Paypal.png"
          alt="Paypal"
          className="w-14 mr-20 lg:w-28 lg:mr-52 "
        />
        <img
          src="/assets/logos/Ride.png"
          alt="Ride"
          className="w-14 mr-20 lg:w-28 lg:mr-52 "
        />
        <img
          src="/assets/logos/TeleBirr.png"
          alt="TeleBirr"
          className="w-14 mr-20 lg:w-28 lg:mr-52 "
        />
      </Marquee>
    </div>
    // </div>
  );
};

export default LogoMarquee;
