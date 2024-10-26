function ButtonLearnMore() {
  return (
    <a
      href="#guide"
      className="bg-gray-100 text-gray-900 flex items-center gap-2 px-11 py-2"
    >
      Learn more{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  );
}

export default ButtonLearnMore;
