import React from "react";

const Notification = () => {
  return (
    <>
      <div className="z-20 z-50 max-w-sm mb-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700">
        <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          Notifications
        </div>
        <div>
          <div className="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
            <div className="w-full pl-3">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                New message from
                <span className="font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                : "Hey, what's up? All set for the presentation?"
              </div>
              <div className="text-xs font-medium text-cyan-600  dark:text-primary-400">
                a few moments ago
              </div>
            </div>
          </div>
          <div className="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
            <div className="w-full pl-3">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                New message from
                <span className="font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                : "Hey, what's up? All set for the presentation?"
              </div>
              <div className="text-xs font-medium  text-cyan-600  dark:text-primary-400">
                a few moments ago
              </div>
            </div>
          </div>
          <div className="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
            <div className="w-full pl-3">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                New message from
                <span className="font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                : "Hey, what's up? All set for the presentation?"
              </div>
              <div className="text-xs font-medium  text-cyan-600  dark:text-primary-400">
                a few moments ago
              </div>
            </div>
          </div>
        </div>
        <div
          href="#"
          className="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
        >
          <div className="inline-flex items-center ">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            View all
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
