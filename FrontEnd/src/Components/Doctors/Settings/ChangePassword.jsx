import React from "react";

const ChangePassword = () => {
  return (
    <>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold dark:text-white">
          Password inhtmlFormation
        </h3>
        <form action="#">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="current-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Current password
              </label>
              <input
                type="text"
                name="current-password"
                id="current-password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New password
              </label>
              <input
                data-popover-target="popover-password"
                data-popover-placement="bottom"
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                required
              />
              <div
                data-popover
                id="popover-password"
                role="tooltip"
                className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
              >
                <div className="p-3 space-y-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Must have at least 6 characters
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                    <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                    <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                    <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                  </div>
                  <p>It’s better to have:</p>
                  <ul>
                    <li className="flex items-center mb-1">
                      <svg
                        className="w-4 h-4 mr-2 text-green-400 dark:text-green-500"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Upper & lower case letters
                    </li>
                    <li className="flex items-center mb-1">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      A symbol (#$&)
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      A longer password (min. 12 chars.)
                    </li>
                  </ul>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="text"
                name="confirm-password"
                id="confirm-password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="col-span-6 sm:col-full">
              <button
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="submit"
              >
                Save all
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
