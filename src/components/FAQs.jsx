function FAQs() {
  const faqs = [
    {
      question: "What types of cars are available for rent?",
      answer:
        "We offer a variety of cars suitable for family trips, tourism, ceremonies, and more. Our fleet includes luxury cars, SUVs, wedding limousines, and comfortable sedans, ensuring you find the perfect vehicle for your needs.",
      show: true,
    },
    {
      question: "How do I make a booking?",
      answer:
        "Booking a car is easy! Just select your preferred car, contact the operator, and confirm your booking with a few clicks. You can finalize your reservation on our website without any hassle.",
      show: false,
    },
    {
      question: "Can I book a car for multiple days?",
      answer:
        "Yes, you can book cars for multiple days or even weeks, depending on availability. Just select your desired rental period during the booking process to secure your car for the full duration you need.",
      show: false,
    },
  ];

  return (
    <div className="bg-primary-bg py-14 px-4 text-center text-gray-200">
      <h3 className="font-semibold mb-2 tracking-7">FAQ</h3>
      <h2 className="font-semibold text-3xl mb-6 tracking-wider">
        Frequently Asked Questions
      </h2>
      <p className="text-sm px-3 text-gray-400">
        Frequently asked questions about the car rental booking process on our
        website. Answers to common concerns and inqueiries
      </p>
      <div className="text-justify mt-14">
        <div>
          <div className="flex justify-between">
            <p className="">1.{faqs[0].question}</p>
            <svg
              className="fill-color-primary h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
            </svg>
          </div>
          <p className="text-sm text-gray-400 pl-4  pt-1 pb-3">
            {faqs[0].answer}
          </p>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="">2.{faqs[1].question}</p>
            <svg
              className="fill-color-primary h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
            </svg>
          </div>
          <p className="text-sm text-gray-400 pl-4 pt-1 pb-3">
            {faqs[1].show && faqs[1].answer}
          </p>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="">3.{faqs[2].question}</p>
            <svg
              className="fill-color-primary h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
            </svg>
          </div>
          <p className="text-sm text-gray-400 pl-4 pt-1 pb-3">
            {faqs[2].show && faqs[2].answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
