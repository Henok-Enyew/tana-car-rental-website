function Testimonial() {
  return (
    <div
      className="bg-primary-bg pb-14 px-4 text-center text-gray-200 py-20"
      id="testimonials"
    >
      <h3 data-aos="fade-up" className="font-semibold mb-2 sm:text-lg">
        Reviewd by people
      </h3>
      <h2
        data-aos="fade-up"
        className="font-semibold text-3xl mb-10 sm:text-4xl"
      >
        Client&apos;s Testinomials
      </h2>
      <div className="sm:px-10 lg:px-40 lg:flex lg:justify-between lg:gap-12">
        <div className="lg:w-1/2">
          <p data-aos="fade-up" className="text-justify px-2 mb-4 ">
            &quot;We rented a car from this website and had an amazing
            experience exploring the city! The booking process was
            straightforward, the rental options were diverse, and the rates were
            impressively affordable. Everything was smooth, and we couldn’t have
            asked for a better service.&quot;
          </p>
          <div
            data-aos="fade-up"
            className="pl-6 flex gap-7 lg:items-center lg:justify-between"
          >
            <img
              src="/assets/users/John Sanches.jpg"
              alt=""
              className="w-14 rounded-full"
            />
            <div className="flex flex-col items-start gap-2 lg:-ml-36">
              <p>John Sanches</p>
              <p className="text-gray-400 text-sm">Tourist</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:inline-block fill-color-primary h-24 w-24"
              viewBox="0 0 256 256"
            >
              <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
            </svg>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <p data-aos="fade-up" className="text-justify px-2 mb-4">
            &quot;This website made our wedding day unforgettable! We booked a
            beautiful limousine along with other cars, and everything went
            smoothly. The service was fantastic, and the prices were reasonable,
            making it the perfect choice for our big day.&quot;
          </p>
          <div
            data-aos="fade-up"
            className="pl-6 flex gap-7  lg:items-center lg:justify-between"
          >
            <img
              src="/assets/users/Meron Kindu.jpg"
              alt=""
              className="w-14 rounded-full"
            />
            <div className="flex flex-col items-start gap-2 lg:-ml-36">
              <p>Meron Kindu</p>
              <p className="text-gray-400 text-sm">Accountant</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:inline-block fill-color-primary h-24 w-24"
              viewBox="0 0 256 256"
            >
              <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
