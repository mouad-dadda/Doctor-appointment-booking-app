import React from "react";

import {
  Square2StackIcon,
  CalendarDaysIcon,
  DocumentDuplicateIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  UsersIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import "flowbite";

const Sidebar = () => {
  return (
    <>
      <div>
        <div className="relative flex flex-col flex-1 min-h-0 pt-0   ">
          <aside
            id="sidebar-multi-level-sidebar"
            className="fixed top-[11%] left-0 z-40 border-t w-64 h-screen border-r border-gray-200 transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-white  ">
              <ul className="space-y-2 font-medium text-[18px]">
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                  >
                    <svg
                      aria-hidden="true"
                      className="w-[1.3rem] h-[1.3rem] text-gray-500 transition duration-75  group-hover:text-gray-900 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-[1.3rem] h-[1.3rem] text-gray-500 transition duration-75 group-hover:text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span
                      className="flex-1 ml-3 text-left whitespace-nowrap"
                      sidebar-toggle-item="true"
                    >
                      Doctors
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul id="dropdown-example" className="hidden py-2 space-y-2">
                    <li>
                      <Link
                        to="/admin/doctors"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                      >
                        All Doctors
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                      >
                        No verified Doctors
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="/admin/patient"
                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                  >
                    <UserIcon className="w-[1.3rem] h-[1.3rem] text-gray-500 transition duration-75  group-hover:text-gray-900 " />
                    <span className="ml-3">Patient</span>
                  </Link>
                </li>

              </ul>

              <div className="pt-2 space-y-2 absolute bottom-[13%]  w-[-webkit-fill-available] pr-[11px] ">
                <div className="flex items-center mt-3 p-2 text-base cursor-pointer text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                  <ArrowRightOnRectangleIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                  <span className="ml-3">Lougout</span>
                </div>
              </div>
              
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
