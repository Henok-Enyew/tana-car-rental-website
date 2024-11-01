import { useState } from "react";
function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="w-full border-b-[1px] border-b-gray-800 h-20 pr-4 flex justify-between items-center bg-primary-bg ">
      <a href="#home">
        <img src="/assets/logo.png" alt="logo" className="w-24 z-40 sm:w-28" />
      </a>
      <div
        className={`h-screen w-1/2 absolute duration-700 bg-gray-900 text-color-primary border-r-4 rounded-r-3xl border-color-primary-l
           flex flex-col items-center justify-center text-xl font-semibold top-0 left-0 z-10 ${
             showNav
               ? "translate-x-0 opacity-100"
               : "-translate-x-full opacity-0"
           } 
           lg:hidden `}
      >
        <a href="#home" className="absolute mx-auto top-8">
          <img src="/assets/logo.png" alt="" className="w-28 " />
        </a>
        <a onClick={() => setShowNav(false)} href="#home">
          Home
        </a>
        <a onClick={() => setShowNav(false)} href="#models">
          Vehicle Models
        </a>
        <a onClick={() => setShowNav(false)} href="#branchs">
          Branches
        </a>
        <a onClick={() => setShowNav(false)} href="#testimonials">
          Testimonials
        </a>
        <a onClick={() => setShowNav(false)} href="#faqs">
          FAQs
        </a>
      </div>
      <button
        className={`z-20 lg:hidden`}
        onClick={() => setShowNav((s) => !s)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-color-primary transition-all duration-300 ease-in-out w-8 h-8 sm:w-10 sm:h-10 "
          viewBox="0 0 256 256"
        >
          <path
            className={`transition-transform duration-300 ease-in-out ${
              showNav ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
            d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
          ></path>
          <path
            className={`transition-transform duration-300 ease-in-out ${
              showNav ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"
          ></path>
        </svg>
      </button>
      <div
        className={`text-color-primary lg:flex lg:text-lg items-center gap-52 hidden `}
      >
        <div className="flex items-center gap-8 ">
          {" "}
          <a
            className="duration-300 transition-all border-b-[1px] border-transparent  hover:border-color-primary-l "
            onClick={() => setShowNav(false)}
            href="#home"
          >
            Home
          </a>
          <a
            className="duration-300 transition-all border-b-[1px] border-transparent  hover:border-color-primary-l "
            onClick={() => setShowNav(false)}
            href="#models"
          >
            Vehicle Models
          </a>
          <a
            className="duration-300 transition-all border-b-[1px] border-transparent  hover:border-color-primary-l "
            onClick={() => setShowNav(false)}
            href="#branchs"
          >
            Branches
          </a>
          <a
            className="duration-300 transition-all border-b-[1px] border-transparent  hover:border-color-primary-l "
            onClick={() => setShowNav(false)}
            href="#testimonials"
          >
            Testimonials
          </a>
          <a
            className="duration-300 transition-all border-b-[1px] border-transparent  hover:border-color-primary-l "
            onClick={() => setShowNav(false)}
            href="#faqs"
          >
            FAQs
          </a>
        </div>
        <a
          href="#models"
          className="bg-color-primary duration-300 transition-all hover:scale-90 text-gray-900  px-6 py-2   "
        >
          Book Car
        </a>
      </div>
    </nav>
  );
}

export default Nav;
