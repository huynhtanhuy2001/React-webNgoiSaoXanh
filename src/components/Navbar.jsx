import { useState } from "react";
import App from "../App";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar h-[100px]">
      <img src={logo} alt="Ngoisaoxanh" className="w-[124px] h-[80px]"></img>

      <h1 href="../App" className="title justify-between font-bold">
        TRUNG TÂM NGÔI SAO XANH
      </h1>

      <ul
        id="nav_link"
        className="list-none sm:flex hidden justify-end items-center flow-1"
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`${nav.href}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[30px] h-[30px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} 
            p-6 bg-black-gradient 
            absolute top-20 right-0 
            mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul
            id="nav_link"
            className="list-none flex flex-col justify-end items-center flow-1"
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
