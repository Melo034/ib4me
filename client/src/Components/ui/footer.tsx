import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          to: "javascript:void()",
          name: "Contact Us",
        },
        {
          to: "javascript:void()",
          name: "About Us",
        },
        {
          to: "javascript:void()",
          name: "FAQ",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          to: "javascript:void()",
          name: "Partnership",
        },
        {
          to: "javascript:void()",
          name: "Terms of Service",
        },
        {
          to: "javascript:void()",
          name: "Privacy",
        },
      ],
    },
    {
      label: "Useful Links",
      items: [
        {
          to: "javascript:void()",
          name: "Ib4me.com",
        },
        {
          to: "javascript:void()",
          name: "Donate",
        },
        {
          to: "javascript:void()",
          name: "Fundrasing",
        },
      ],
    },
  ];

  return (
    <footer
      className="w-full h-auto p-6 text-white bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('../../images/footer.png')` }}
    >
      <div className="justify-between gap-6 md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <p className="leading-relaxed mt-2 text-[15px]">
              Join the campaign & Never miss a thing.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="block pt-4 pb-2">Email</label>
            <div className="flex items-center max-w-sm p-1 rounded-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2.5 outline-none border-2 border-white rounded-xl bg-transparent"
              />
              <button className="ml-4 p-2.5 uppercase font-bold rounded-md text-white bg-[#9E6643] outline-none shadow-md focus:shadow-none sm:px-5">
                Submit
              </button>
            </div>
          </form>
          <div className="pt-6 sm:mt-0">
            <p className="mb-2">Follow our Socials</p>
            <ul className="flex items-center space-x-4">
              <li className="flex items-center justify-center">
                <Link to="javascript:void()">
                  <svg
                    className="w-6 h-6 text-white svg-icon"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z" />
                  </svg>
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="javascript:void()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white svg-icon"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      fill="#0F0F0F"
                    />
                    <path
                      d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                      fill="#0F0F0F"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="javascript:void()">
                  <svg
                    className="w-6 h-6 text-white svg-icon"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="none"
                      d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li className="flex items-center justify-center ">
                <Link to="javascript:void()">
                  <svg
                    className="w-6 h-6 text-white svg-icon"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="items-center justify-between flex-1 mt-10 space-y-6 sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <li>
                <h4 className="font-medium text-gray-400">{item.label}</h4>
              </li>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <Link
                    to={el.to}
                    className="hover:underline hover:text-[#9E6643]"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="items-center justify-between py-6 mt-8 border-t sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 Ib4me All rights reserved.
        </div>
      </div>
      <style>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
    </footer>
  );
};

export default footer;
