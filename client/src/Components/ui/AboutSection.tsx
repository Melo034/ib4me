import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center max-w-screen-xl p-4 px-4 mx-auto md:flex-row">
        <img
          src="../../images/wan.jpg"
          alt="Family"
          className="flex-none object-cover w-full h-auto max-w-full mb-6 rounded-lg sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-3/4 md:mb-0 md:mr-6 mt-14 md:mt-0 md:max-w-xl"
        />
        <div className="m-2 text-left">
          <h2 className="mb-4 text-xl font-bold text-center sm:text-2xl md:text-3xl lg:text-4xl">
            Welcome to Ib4Me
          </h2>
          <p className="mb-4">
            <strong>Ib4Me</strong> is a blockchain-based crowdfunding platform
            designed to help patients raise the necessary funds needed for
            life-saving treatments. By bringing communities together, we make it
            easy for people to contribute and support those in need.
          </p>
          <p className="mb-4">
            Our platform accepts local payment methods like{" "}
            <strong>Afrimoney, Orange money,</strong> and{" "}
            <strong>Qmoney</strong>, making donations accessible to everyone.
            For those who prefer crypto, you can donate through{" "}
            <strong>Blinks</strong> and <strong>Stripes</strong>.
          </p>
          <p>
            With the power of blockchain, we guarantee full transparency,
            security, and trust throughout the process, so patients and their
            families can focus on healing while we take care of the fundraising.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
