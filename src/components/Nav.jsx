import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="w-full border-b-[1px] border-b-gray-800 h-20 pr-4 flex justify-between items-center bg-primary-bg ">
      <NavLink to="/">
        <img src="/assets/logo.png" alt="logo" className="w-24" />
      </NavLink>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          className="fill-color-primary"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        </svg>
      </button>
    </nav>
  );
}

export default Nav;
