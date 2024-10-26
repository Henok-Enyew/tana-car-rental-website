function Testimonial() {
  return (
    <div
      className="bg-primary-bg pb-14 px-4 text-center text-gray-200 py-20"
      id="testimonials"
    >
      <h3 className="font-semibold mb-2">Reviewd by people</h3>
      <h2 className="font-semibold text-3xl mb-10">
        Client&apos;s Testinomials
      </h2>
      <div>
        <div>
          <p className="text-justify px-2 mb-4">
            &quot;We rented a car from this website and had an amazing visiting
            experience! The booking was easy and the rental rates were very
            affordable.&quot;
          </p>
          <div className="pl-6 flex gap-7">
            <img
              src="/assets/users/John Sanches.jpg"
              alt=""
              className="w-14 rounded-full"
            />
            <div className="flex flex-col items-start gap-2">
              <p>John Sanches</p>
              <p className="text-gray-400 text-sm">Tourist</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-justify px-2 mb-4">
            &quot;This website made our wedding day unforgettable! We booked a
            beautiful limousine along with other cars, and everything went
            smoothly. The service was fantastic, and the prices were reasonable,
            making it the perfect choice for our big day.&quot;
          </p>
          <div className="pl-6 flex gap-7">
            <img
              src="/assets/users/Meron Kindu.jpg"
              alt=""
              className="w-14 rounded-full"
            />
            <div className="flex flex-col items-start gap-2">
              <p>Meron Kindu</p>
              <p className="text-gray-400 text-sm">Accountant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
