import React, { useState } from "react";
import { Footer, Header, TimePicker } from "../Components";

const BookingAppointment = () => {
  const [selectedTime, setSelectedTime] = useState("");



  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <>
      <div className=" absolute w-[100%] h-[100vh]  img_bg">
        <div className=" relative bg-black  bg-opacity-75 ">
          <Header />
          <main className="h-[80.65vh] flex justify-center items-center ">
            <div className=" bg-white w-[30%] h-[56%] rounded-sm p-3 ">
              <div className="w-full">
                <div className=" flex justify-center w-full ">
                  <div className="w-[25%]">
                    <img src="./img/Rectangle 3.png" alt="" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="uppercase font-semibold text-[14px] mt-3 ">
                    Mouad Dadda
                  </p>
                </div>
                <div className=" flex justify-center mt-5 ">
                  <div>
                    <form action="">
                      <div className="flex justify-center">
                        {/* DATE PICKER */}

                        <div className=" mr-4 ">
                          <label
                            htmlFor="countries"
                            className="block mb-2 text-[13px] font-medium text-gray-900 "
                          >
                            Select Date
                          </label>
                          <div className="relative max-w-sm">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <input
                              datepicker
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 p-2"
                              placeholder="Select date"
                            />
                          </div>
                        </div>

                        {/* TIME PICKER */}

                        <div>
                          <label
                            htmlFor="countries"
                            className="block mb-2 text-[13px] font-medium text-gray-900 dark:text-white"
                          >
                            Select Time
                          </label>
                          <TimePicker
                            minTime="08:00"
                            maxTime="20:00"
                            stepInMinutes={15}
                            onChange={handleTimeChange}
                          />
                        </div>
                      </div>

                      <div className=" mt-3  flex justify-center ">
                        <button className="text-white w-[37%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[12px]   px-4 py-2 text-center ">
                          prendre
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer colorText="white" />
        </div>
      </div>
    </>
  );
};

export default BookingAppointment;

{
  /* <div>
                <label>Select a time:</label>
                <TimePicker
                  minTime="08:00"
                  maxTime="20:00"
                  stepInMinutes={46}
                  onChange={handleTimeChange}
                />
                <p>You selected: {selectedTime}</p>
              </div> */
}
