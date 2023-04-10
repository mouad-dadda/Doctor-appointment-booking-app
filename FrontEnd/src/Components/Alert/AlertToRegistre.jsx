import { Modal } from "flowbite-react";
import React from "react";

const AlertToRegistre = ({showAlertToRegistre , setSowAlertToRegistre }) => {
  return (
    <>
      <Modal show={showAlertToRegistre} size="md" popup={true} onClose={()=>setSowAlertToRegistre(!showAlertToRegistre)}>
        {/* <!-- Modal content --> */}
        <div
          data-te-animation-init
          data-te-animation="[fade-in_1s_ease-in-out]"
          className="relative  bg-white rounded-lg shadow dark:bg-gray-800"
        >
          {/* <!-- Modal header --> */}
          <div className="flex justify-end p-2">
            <button
            onClick={()=>setSowAlertToRegistre(!showAlertToRegistre)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
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
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 pt-0 text-center">
            <svg
              className="w-16 h-16 mx-auto text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mt-5 mb-6 text-lg text-gray-500 dark:text-gray-400">
              pour obtenir un rendez vous , vous devez
              <a href="/test" className=" text-primary-600 ">
                {" "}
                connecter{" "}
              </a>
              !
            </h3>
            <button 
            onClick={()=>setSowAlertToRegistre(!showAlertToRegistre)}
            className="text-white  bg-primary-600 hover:bg-primary-700  focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-800">
              Ok
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AlertToRegistre;
