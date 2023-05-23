import React from "react";
import data from "../users.json";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const TableAppointment = ({
  showAnnuler,
  setShowAnnuler,
  setIdAppointment,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                <thead className="bg-gray-100 ">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                    >
                      Biography
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-[14px] font-medium text-left text-gray-500 uppercase "
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {data.map((el, idx) => {
                    return (
                      <tr key={idx} className="hover:bg-gray-100 ">
                        <td className="flex items-center p-4   whitespace-nowrap">
                          <div className="text-[14px] font-normal text-gray-500 ">
                            <div className="text-[14px] font-semibold text-gray-900 ">
                              {el.name}
                            </div>
                            <div className="text-[14px] font-normal text-gray-500 ">
                              {el.email}
                            </div>
                          </div>
                        </td>
                        <td className="max-w-sm p-4 overflow-hidden text-[14px] font-normal text-gray-500 truncate xl:max-w-xs">
                          {el.country}
                        </td>
                        <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap ">
                          {el.position}
                        </td>
                        <td className="p-4 text-[14px] font-medium text-gray-900 whitespace-nowrap ">
                          {el.status}
                        </td>
                        <td className="p-4 text-[14px] font-normal text-gray-900 whitespace-nowrap ">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                          </div>
                        </td>
                        <td className="p-4 space-x-2 whitespace-nowrap">
                          {/* <button
                            type="button"
                            className="inline-flex items-center px-2 py-1.5 text-[14px] font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
                          >
                            <CheckCircleIcon className="w-[1.4rem] h-[1.4rem] mr-2 " />
                            Terminer
                          </button> */}
                          <button
                            type="button"
                            className="inline-flex items-center px-2 py-1.5 text-[14px] font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                            onClick={() => {
                              setIdAppointment(idx);
                              setShowAnnuler(!showAnnuler);
                            }}
                          >
                            <XCircleIcon className="w-4 h-4 mr-2 " />
                            Annuler
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Table */}

      {/* <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center mb-4 sm:mb-0">
          <a
            href="#"
            className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <span className="text-[14px] font-normal text-gray-500 ">
            Showing
            <span className="font-semibold text-gray-900 ">
              1-20
            </span>
            of
            <span className="font-semibold text-gray-900 dark:text-white">
              2290
            </span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="inline-flex items-center justify-center flex-1 px-3 py-2 text-[14px] font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              className="w-5 h-5 mr-1 -ml-1"
              fill=" currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            Previous
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center flex-1 px-3 py-2 text-[14px] font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Next
            <svg
              className="w-5 h-5 ml-1 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div> */}
    </>
  );
};

export default TableAppointment;
