import React from "react";
import { Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const ComplitedAppointment = ({
  setShowComplitedAppointment,
  showComplitedAppointment,
}) => {
  return (
    <>
      <Modal
        show={showComplitedAppointment}
        size="md"
        popup={true}
        onClose={() => setShowComplitedAppointment(!showComplitedAppointment)}
      >
        {/* <!-- Modal content --> */}
        <div
          data-te-animation-init
          data-te-animation="[fade-in_1s_ease-in-out]"
          className="relative  bg-white rounded-lg shadow dark:bg-gray-800"
        >
          {/* <!-- Modal header --> */}
          <div className="flex justify-end p-2">
            <button
              onClick={() => setShowComplitedAppointment(!showComplitedAppointment)}
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
            <CheckCircleIcon className="w-16 h-16 mx-auto text-primary-600 " />

            <h3 className="mt-5 mb-6 text-lg text-gray-500 dark:text-gray-400">
              pour obtenir un rendez vous , vous devez
              <Link to="/connection" className=" text-primary-600 ">
                {" "}
                connecter{" "}
              </Link>
              !
            </h3>
            <button
              className="text-white  bg-primary-600 hover:bg-primary-700  focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-800"
            >
              Imprimer 
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ComplitedAppointment;
