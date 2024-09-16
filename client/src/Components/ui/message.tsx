import React from "react";

const message = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 mt-32 md:mt-64 text-center">
      <p className=" text-2xl font-bold text-white md:text-5xl lg:text-7xl">
        Thanks for your donation, another life is a step closer to being saved
      </p>
      <div>
        <button
          type="submit"
          className="bg-transparent border-2 px-8 py-2 mt-5 rounded-xl text-white"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default message;
