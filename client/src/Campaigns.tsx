import React from "react";
import Causes from "./Components/ui/Causes";
import Navbar from "./Components/ui/Navbar";
import  Footer from "./Components/ui/footer";

const Campaigns = () => {
  return (
    <>
    <div
      className="w-full min-h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('/images/causes.png')` }}
    >
      <div className="relative z-10 flex justify-center pt-8">
        <Navbar />
      </div>
      <Causes />
    </div>
    <Footer/>
    </>
  );
};

export default Campaigns;
