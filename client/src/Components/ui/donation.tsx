import React from "react";

const donation = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 mt-32 md:mt-36 text-center">
      <p className="text-white text-2xl font-bold  md:text-5xl lg:text-7xl">
        Hi<span className="text-[#FBC790]">Variable</span>
      </p>
      <p className=" text-2xl font-bold text-white py-2 md:text-5xl lg:text-7xl">
        Thanks for your submission, you are now a step closer to recovery
      </p>
      <p className="text-white text-sm py-2 font-bold  md:text-2xl lg:text-3xl">
       copy the generated Blink
      </p>
      <div>
        <button
          type="submit"
          className="bg-transparent border-2 px-8 py-2 mt-5 rounded-xl text-white"
        >
          Blink
        </button>
      </div>
    </div>
  );
};

export default donation;
