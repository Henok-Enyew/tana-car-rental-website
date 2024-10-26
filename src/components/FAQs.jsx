import { useState } from "react";

function FAQs() {
  const [showIndex, setShowIndex] = useState(0);

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

  function handleFaq(i) {
    showIndex == i ? setShowIndex(null) : setShowIndex(i);
  }
  return (
    <div
      className="bg-primary-bg py-14 px-4 text-center text-gray-200"
      id="faqs"
    >
      <h3 data-aos="fade-up" className="font-semibold mb-2 tracking-7">
        FAQ
      </h3>
      <h2
        data-aos="fade-up"
        className="font-semibold text-3xl mb-6 tracking-wider"
      >
        Frequently Asked Questions
      </h2>
      <p data-aos="fade-up" className="text-sm px-3 text-gray-400">
        Frequently asked questions about the car rental booking process on our
        website. Answers to common concerns and inqueiries
      </p>
      <div data-aos="fade-up" className="text-justify mt-14">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-700 py-2">
            {/* Question Header */}
            <div
              onClick={() => handleFaq(i)}
              //   className="flex justify-between cursor-pointer"
              className={`flex justify-between gap-4 cursor-pointer h-12 px-3 ${
                showIndex == i ? "bg-color-primary text-gray-900" : ""
              } `}
            >
              <p>
                {i + 1}. {faq.question}
              </p>
              <svg
                className={`fill-color-primary h-6 w-6 transform transition-transform duration-200 ${
                  showIndex === i ? "rotate-180 fill-gray-900" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
              </svg>
            </div>

            {/* Answer Section with Smooth Transition */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                showIndex === i ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-sm text-gray-400 pl-4 pt-2 pb-3">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
