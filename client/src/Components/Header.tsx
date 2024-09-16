import React from "react";
import Navbar from "./ui/Navbar";

const Header = () => {
  return (
    <div
      className="relative w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: `url('/images/Main.png')` }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 flex justify-center pt-8">
        <Navbar />
      </div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full ml-6 text-white md:ml-12 lg:ml-28">
        <h1 className="text-xl sm:text-xl md:text-6xl lg:text-7xl font-semibold text-left w-full sm:w-[400px] md:w-[600px] lg:w-[700px] leading-tight md:leading-snug">
          Let's come together as a community and Ib4Dem
        </h1>
        <button
          type="submit"
          className="px-8 gap-3 sm:px-10 flex md:px-12 lg:px-16 py-4 mt-6 font-serif text-base sm:text-lg bg-[#9E6643] rounded-lg hover:bg-[#9E6643]"
        >
          How can you help?
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow"
            className="bg-white rounded-xl w-7 h-7 fill-[#834800]"
          >
            <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
