import React from "react";
import Header from "./Components/Header";
import AboutSection from "./Components/ui/AboutSection";
import Causes from "./Components/ui/Causes";
import Testimonial from "./Components/ui/Testimonial";
import Footer from "./Components/ui/footer";

const Home = () => {
  const features = [
    {
      icon: <img src="/images/block.svg" alt="Blockchain icon" />,
      title: "Blockchain-based",
      desc: "Every transaction is recorded on a blockchain, ensuring transparency and accountability for all donations. Once a donation is made, the record is permanent and cannot be altered, providing security and trust in the process.",
    },
    {
      icon: <img src="/images/money.svg" alt="Payment methods icon" />,
      title: "Local Payment Methods",
      desc: "Supports our popular local payment methods like Afrimoney, Orange Money, and Qmoney for easier donations within local communities.",
    },
    {
      icon: <img src="/images/connect.svg" alt="Community involvement icon" />,
      title: "Community involvement",
      desc: "Easy-to-use sharing options for social media, email, and messaging platforms, allowing users to spread the word and attract more donors.",
    },
  ];

  return (
    <div className="bg-[#ffedd8] min-h-screen">
      <Header />
      <section className="bg-[#9E6643] h-[250px] py-10 text-white relative">
        <div className="max-w-screen-xl px-4 mx-auto text-center">
          <h1 className="text-3xl font-semibold">
            We are a blockchain-based crowdfunding platform
          </h1>
        </div>
      </section>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center max-w-screen-xl px-4 mx-auto -mt-20 sm:px-8 md:px-16 lg:px-24">
          <div className="grid w-full max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 text-black bg-white rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4 text-[#9E6643] w-24 h-24">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[600px] lg:mt-[150px] md:mt-[400px]">
          <AboutSection />
        </div>
        <div
          className="w-full h-auto mt-10 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/images/causes.png')` }}
        >
          <Causes />
        </div>
        <Testimonial />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
