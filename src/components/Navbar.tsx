import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>
      <ul
        className={`${
          menu ? "block" : "hidden"
        }  mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:x-0 md:flex gap-6`}
      >
        <li className="text-dm transition-all duration-300 p-1 md:p-0">
          <a href="#About">About</a>
        </li>
        <li className="text-dm transition-all duration-300 p-1 md:p-0">
          <a href="#Experience">Experience</a>
        </li>
        <li className="text-dm transition-all duration-300 p-1 md:p-0">
          <a href="#Projects">Projects</a>
        </li>
        <li className="text-dm transition-all duration-300 p-1 md:p-0">
          <a href="#Footer">Contact</a>
        </li>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
