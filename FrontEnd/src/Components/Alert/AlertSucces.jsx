import { Toast } from "flowbite-react";
import React from "react";

const AlertSucces = ({ Message }) => {
  return (
    <>
      <Toast className="  fixed  z-[100] top-[6rem] right-[1rem] max-w-[18rem] p-[0.500rem]  ">
        <div className="   inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-200 text-green-500 ">
          {/* <d className="h-5 w-5" /> */}
          <svg
            aria-hidden="true"
            className="w-5 h-5"
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
        </div>
        <div className="ml-3 text-sm font-normal"> {Message} </div>
        <Toast.Toggle />
      </Toast>
    </>
  );
};

export default AlertSucces;
