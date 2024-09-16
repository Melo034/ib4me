import React from "react";

import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const handleLocalPayment = () => {
    navigate('/local'); 
  };
  return (
    <section className="py-4 antialiased bg-[#9E664380] md:py-8">
      <div className="max-w-screen-xl px-4 mx-auto md:px-6 xl:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl text-white font-semibold text-center sm:text-2xl">
            Donate
          </h2>
          <p className="text-white py-2 text-center text-xs">
            Every donation, no matter how big or small can make a huge
            difference in their lives.
          </p>
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-6">
            <form
              action="#"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg shadow-sm sm:p-4 lg:max-w-xl"
            >
              <h3 className="text-white text-sm sm:text-xl font-semibold py-2">
                Choose Payment Method
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="col-span-2 flex gap-2 mb-4">
                  <label>
                    <input
                      type="radio"
                      name="payment-method"
                      className="mr-2"
                    />
                    <span className="text-white">Pay by card</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="payment-method"
                      className="mr-2"
                      onChange={handleLocalPayment}
                    />
                    <span className="text-white">Pay local</span>
                  </label>
                </div>
                <div className="flex items-center gap-6">
                  <label className="flex items-center ">
                    <input
                      type="radio"
                      name="card"
                      className="mr-2"
                      title="Visa"
                    />
                    <img src="../../images/visa.svg" alt="" />
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="card"
                      className="mr-2"
                      title="MasterCard"
                    />
                    <img src="../../images/mastercard.svg" alt="" />
                  </label>
                  <label className="flex items-center ">
                    <input
                      type="radio"
                      name="card"
                      className="mr-2"
                      title="PayPal"
                    />
                    <img src="../../images/paypal.svg" alt="" />
                  </label>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="full_name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Card Holder's Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    className="block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900"
                    placeholder="Enter name"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="card_number"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="card_number"
                    className="block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900"
                    placeholder="Enter number"
                    required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="cvv"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900"
                    placeholder="Enter CVV"
                    required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="amount"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Enter Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    className="block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900"
                    placeholder="Amount"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-20 py-2 text-white font-medium bg-[#9E6643] hover:bg-[#9E6643] rounded-lg shadow-md"
                >
                  Donate
                </button>
              </div>
            </form>

            <div className="mt-6 grow sm:mt-8 lg:mt-0 lg:ml-6">
              <img
                src="../../images/signup.jpg"
                className="rounded-xl"
                alt="Donation image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
