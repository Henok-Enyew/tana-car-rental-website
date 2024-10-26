function Footer() {
  return (
    <div
      className="bg-gray-950 py-5 px-4 text-gray-400 text-sm grid grid-cols-3 gap-2
    "
    >
      <div className="col-span-2 pr-4">
        <h3 className="text-lg uppercase text-gray-300 font-semibold mb-2 ">
          Subscription
        </h3>
        <p>Subscribe your email address for latest news and updates</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Your email address"
          className="mt-5 px-1 w-48  h-9 text-gray-100 bg-gray-950 border-[1px] border-color-primary active:bg-gray-950 active:text-gray-100 focus:bg-gray-950 focus:border-2 "
        />
        <button
          type="submit"
          className="w-48 h-9 flex justify-center items-center bg-color-primary text-gray-900 text-lg mt-2 "
        >
          Submit
        </button>
      </div>
      <div className="">
        <h3 className="text-lg uppercase text-gray-300 font-semibold mb-2 ">
          Company
        </h3>
        <p className="mb-2">Addis Abeba</p>
        <p className="mb-2">Blog</p>
        <p className="mb-2">How we work</p>
      </div>
      <div className="col-span-3 px-2">
        <h1 className="text-lg uppercase text-gray-300 font-semibold mb-2 mt-4 text-center">
          <span> Tana Car</span> Rental
        </h1>
        <p>
          Discover Ethiopia with Ease - Tana Car Rental, Your Trusted Partner
          for Memorable Journeys
        </p>
        <div className="flex items-center gap-3 mt-3">
          <svg
            className="fill-color-primary w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <path d="M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z"></path>
          </svg>
          <p>+251-904-927-815</p>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-color-primary w-6 h-6"
            viewBox="0 0 256 256"
          >
            <path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z"></path>
          </svg>
          <p>henokenyew86@gmail.com</p>
        </div>
        <div className="flex mt-3 items-center justify-center gap-3">
          <a href="https://github.com/Henok-Enyew" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-color-primary w-8 h-8 hover:fill-color-primary-l duration-200 hover:scale-90"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
          <a href="https://t.me/Enoch90s/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-color-primary w-8 h-8 hover:fill-color-primary-l duration-200 hover:scale-90"
              viewBox="0 0 256 256"
            >
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/henok-enyew/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-color-primary w-8 h-8 hover:fill-color-primary-l duration-200 hover:scale-90"
              viewBox="0 0 256 256"
            >
              <path d="M228.88,26.19a9,9,0,0,0-9.16-1.57L17.06,103.93a14.22,14.22,0,0,0,2.43,27.21L72,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L165,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L231.77,35A9,9,0,0,0,228.88,26.19ZM175.53,208,92.85,135.5l119-85.29Z"></path>
            </svg>
          </a>
          <a href="https://instagram.com/Enoch90s" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-color-primary w-8 h-8 hover:fill-color-primary-l duration-200 hover:scale-90"
              viewBox="0 0 256 256"
            >
              <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
