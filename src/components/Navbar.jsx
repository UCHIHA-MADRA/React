import React, { useEffect, useState } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

const Navbar = () => {
  const [state, setState] = useState(false);
  const { screenWidth, screenHeight } = useScreenSize();

  useEffect(() => {
    if (screenWidth > 768) {
      setState(true);
    } else {
      setState(false);
    }
  }, [screenWidth]);

  const handleClick = () => setState((prev) => !prev);

  return (
    <header className="flex items-center justify-between max-w-screen-xl mx-auto p-6 relative">
      <h1 className="text-red-500 font-bold text-2xl pb-2">Logo.</h1>
      <button className="md:hidden" onClick={handleClick}>
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      {state && (
        <ul className="flex absolute bg-red-50 md:static md:w-auto md:bg-transparent md:shadow-none shadow-lg top-full left-0 p-6 w-full gap-6 flex-col md:flex-row">
          <li className="cursor-pointer max-w-max hover:text-red-400 pb-2 border-b-2 border-transparent hover:border-red-400 transition-all duration-200 ease-in-out">
            Home
          </li>
          <li className="cursor-pointer max-w-max hover:text-red-400 pb-2 border-b-2 border-transparent hover:border-red-400 transition-all duration-200 ease-in-out">
            Features
          </li>
          <li className="cursor-pointer max-w-max hover:text-red-400 pb-2 border-b-2 border-transparent hover:border-red-400 transition-all duration-200 ease-in-out">
            Pricing
          </li>
          <li className="cursor-pointer max-w-max hover:text-red-400 pb-2 border-b-2 border-transparent hover:border-red-400 transition-all duration-200 ease-in-out">
            About
          </li>
          <li className="cursor-pointer max-w-max hover:text-red-400 pb-2 border-b-2 border-transparent hover:border-red-400 transition-all duration-200 ease-in-out">
            Contact
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
