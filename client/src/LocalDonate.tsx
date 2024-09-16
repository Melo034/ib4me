import React from 'react'
import Payment from "./Components/ui/localpayment";
import Navbar from "./Components/ui/Navbar";

const LocalDonate = () => {
  return (
    <div
    className="relative items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url('/images/Main.png')` }}
  >
    <div className="relative z-10 flex justify-center pt-8">
      <Navbar />
    </div>
    <div className="px-4 sm:px-8 md:px-16 lg:px-40 mx-auto mt-14">
      <Payment />
    </div>
    </div>
  )
}

export default LocalDonate