import React from "react";
import { Link } from "react-router-dom";

const NavSettings = () => {
  return (
    <>
      <nav className=" my-4 w-[25%] border-r[#EFEFFF] border-r-2 h-[29vh] ">
        <ul className="w-[61%] ">
          <li className="text-sm w-full my-3 flex   ">
            <Link
              className=" py-2 px-4  w-full border-2 border-[#FFFFFF]  hover:bg-[#FCFCFF] hover:border-2 hover:border-[#EFEFFF] hover:rounded-[89.5rem]"
              to="/user/profile"
            >
              Profile
            </Link>
          </li>
          <li className="text-sm w-full my-3 flex   ">
            <Link
              className=" py-2 px-4  w-full border-2 border-[#FFFFFF]  hover:bg-[#FCFCFF] hover:border-2 hover:border-[#EFEFFF] hover:rounded-[89.5rem]"
              to="/user/settings"
            >
              Account settings
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavSettings;
