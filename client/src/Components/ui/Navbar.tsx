import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Campaigns", path: "/campaigns" },
    { title: "Blogs", path: "/blogs" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (target instanceof Element && !target.closest(".menu-btn"))
        setState(false);
    };
  }, []);

  return (
    <nav
      className={`bg-transparent shadow-2xl rounded-full w-[1167px] h-[70px] md:text-sm ${
        state
          ? "shadow-2xl rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="items-center max-w-screen-xl px-4 mx-auto gap-x-14 md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block">
          <Link to="/" className="">
              <img src="../../images/ib4me.svg" className="w-16 h-16 
              " alt="" />
          </Link>
          <div className="md:hidden">
            <button
              className="text-[#FFCA8D] menu-btn hover:text-[#EB8714]"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-2 md:mt-0 md:flex ${
            state ? "block bg-[#834800] rounded-xl p-2" : "hidden"
          } `}
        >
          <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-white hover:text-gray-900">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative block hover:underline hover:underline-offset-4 hover:text-[#EB8714] ${
                        isActive ? "text-[#EB8714] underline font-bold " : ""
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="items-center justify-end flex-1 mt-6 space-y-6 gap-x-6 md:flex md:space-y-0 md:mt-0">
          <NavLink
              to="/signin"
              className="flex items-center justify-center px-4 py-2 font-medium text-[#FFCA8D] rounded-full border-2 border-[#9E6643] bg-transparent gap-x-1 hover:bg-[#9E6643] hover:text-white active:bg-[#FFE0BC] md:inline-flex"
            >
              Create Campaign
            </NavLink>
            <NavLink
              to="/contact-us"
              className="flex items-center justify-center px-4 py-2 font-medium text-yellow-800 rounded-full bg-[#FFCA8D] gap-x-1 hover:bg-[#FFE0BC] active:bg-[#FFE0BC] md:inline-flex"
            >
              Contact Us
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFE0BC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 fill-[#834800]"
                >
                  <path d="M2.25 6.75C2.25 5.784 3.034 5 4 5h16c.966 0 1.75.784 1.75 1.75v10.5c0 .966-.784 1.75-1.75 1.75H4a1.75 1.75 0 01-1.75-1.75V6.75zM3.5 6.75v.439l7.469 4.672a2.25 2.25 0 002.062 0L20.5 7.189v-.439H3.5zm0 1.811v8.689h17v-8.689l-7.469 4.672a3.75 3.75 0 01-3.062 0L3.5 8.561z" />
                </svg>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
