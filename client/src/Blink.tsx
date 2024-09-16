import React from "react";
import Navbar from "./Components/ui/Navbar";
import Message from "./Components/ui/donation";

const Blink = () => {
  return (
    <div
      className="relative items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/causes.png')` }}
    >
      <div className="relative z-10 flex justify-center pt-8">
        <Navbar />
      </div>
      <Message />
    </div>
  );
};

export default Blink;
