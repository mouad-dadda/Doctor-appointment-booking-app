import React, { useEffect, useState } from "react";
import { Footer, Header, TimePicker } from "../Components";
import ComplitedAppointment from "./ComplitedAppointment";
import Datepicker from "flowbite-datepicker/Datepicker";
import { ClockIcon } from "@heroicons/react/20/solid";
import { useNavigate, useParams } from "react-router";
import axiosClient from "../AxiosClient";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../Services/LocalStorageService";
import { addUserData } from "../Redux/SliceAuthUser";

const BookingAppointment = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [SelectedDate, setSelectedDate] = useState("");
  const [showComplitedAppointment, setShowComplitedAppointment] =
    useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [DoctorData, setDoctorData] = useState({});

  const UserData = useSelector((state) => state.authUser);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  useEffect(() => {
    if (
      UserData.isAuthenticated &&
      get("TOKEN_USER") &&
      UserData.user === null
    ) {
      axiosClient
        .get("/user")
        .then((re) => {
          dispatch(addUserData(re.data));
        })
        .catch((er) => {
          navigate("/connexion");
        });
    }

    axiosClient
      .get("/doctor/" + id)
      .then((re) => {
        setDoctorData(re.data[0]);
      })
      .catch((er) => {
        console.log(er);
      });

    const datepickerEl = document?.getElementById("datepickerId");
    // console.log(datepickerEl);
    new Datepicker(datepickerEl, {
      autohide: true,
    });
  }, [UserData, dispatch, navigate]);

  const HandelSubmit = (e) => {
    e.preventDefault();

    const formattedDate = new Date(SelectedDate).toISOString().slice(0, 10); // Convert date to MySQL format

    axiosClient
      .post("/take/appointment", {
        user_id: UserData.user.id,
        doctor_id: id,
        date_appointment: formattedDate,
        time_appointment: selectedTime,
      })
      .then((res) => setShowComplitedAppointment(true))
      .catch((err) => console.log(err));
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
                    <img src="/img/Rectangle 3.png" alt="" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="uppercase font-semibold text-[14px] mt-3 ">
                    {DoctorData.firstname &&
                      DoctorData.firstname + " " + DoctorData.lastname}
                  </p>
                </div>
                <div className=" flex justify-center mt-5 ">
                  <div>
                    <form onSubmit={HandelSubmit}>
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
                              datepicker="true"
                              datepicker-autohide="true"
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 p-2"
                              placeholder="Select date"
                              id="datepickerId"
                              onSelect={(e) => setSelectedDate(e.target.value)}
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
                          {/* <TimePicker
                            minTime="08:00"
                            maxTime="20:00"
                            stepInMinutes={15}
                            onChange={handleTimeChange}
                          /> */}
                          <div className="relative max-w-sm">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <ClockIcon className="w-5 h-5 text-gray-500" />
                            </div>
                            <TimePicker
                              minTime="08:00"
                              maxTime="20:00"
                              stepInMinutes={15}
                              onChange={handleTimeChange}
                            />
                          </div>
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

      <ComplitedAppointment
        showComplitedAppointment={showComplitedAppointment}
        setShowComplitedAppointment={setShowComplitedAppointment}
      />
    </>
  );
};

export default BookingAppointment;
