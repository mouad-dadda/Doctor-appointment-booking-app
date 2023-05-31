import React, { useEffect, useState } from "react";
import { DataPicker, Footer, Header, TimePicker } from "../Components";
import ComplitedAppointment from "./ComplitedAppointment";
import {
  ClockIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/20/solid";
import { useNavigate, useParams } from "react-router";
import axiosClient from "../AxiosClient";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../Redux/SliceAuthUser";
import { get } from "../Services/LocalStorageService";

const BookingAppointment = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [SelectedDate, setSelectedDate] = useState("");
  const [SelectedType, setSelectedType] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showComplitedAppointment, setShowComplitedAppointment] =
    useState(false);

  const { id } = useParams();
  const [DoctorData, setDoctorData] = useState({});

  const UserData = useSelector((state) => state.authUser);

  const [Loading, setLoading] = useState(true);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    setLoading(true);

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
        setLoading(false);
      })
      .catch((er) => {
        setLoading(false);
        console.log(er);
      });
  }, [ dispatch ,id ,navigate ,UserData.user,UserData.isAuthenticated , ]);

  const HandelSubmit = (e) => {
    e.preventDefault();

    const selectedDate = new Date(SelectedDate);
    selectedDate.setDate(selectedDate.getDate() + 1); // Decrease date by one day

    const formattedDate = selectedDate.toISOString().slice(0, 10); // Convert decreased date to MySQL formatconsole.log(SelectedDate +  formattedDate);

    console.log(SelectedType);

    console.log(formattedDate);
    axiosClient
      .post("/take/appointment", {
        user_id: UserData.user.id,
        doctor_id: id,
        date_appointment: formattedDate,
        time_appointment: selectedTime,
        type_appointment: SelectedType,
      })
      .then((res) => setShowComplitedAppointment(true))
      .catch((err) => console.log(err));
  };

  console.log(UserData);
  console.log(DoctorData);

  if (!Loading) {
    return (
      <>
        <div className=" absolute w-[100%] h-[100vh]  img_bg">
          <div className=" relative bg-black  bg-opacity-75 ">
            <Header />
            <main className="h-[80.65vh] flex justify-center items-center ">
              <div className=" bg-white w-[33%] h-[69%] rounded-sm p-3 ">
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
                              className="block mb-1 text-[13px] font-medium text-gray-900 "
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
                              <DataPicker setSelectedDate={setSelectedDate} />
                            </div>
                          </div>

                          {/* TIME PICKER */}

                          <div>
                            <label
                              htmlFor="countries"
                              className="block mb-1 text-[13px] font-medium text-gray-900 dark:text-white"
                            >
                              Select Time
                            </label>
                            <div className="relative max-w-sm">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <ClockIcon className="w-5 h-5 text-gray-500" />
                              </div>
                              {DoctorData && (
                                <TimePicker
                                  minTime={DoctorData.time_debut_work}
                                  maxTime={DoctorData.time_fin_work}
                                  stepInMinutes={DoctorData.appointment_time}
                                  onChange={handleTimeChange}
                                />
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center mt-4  ">
                          <div>
                            <label
                              htmlFor="countries"
                              className="block mb-1 text-[13px] font-medium text-gray-900 dark:text-white"
                            >
                              Type Apointment
                            </label>
                            <div className="relative max-w-sm">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <ClipboardDocumentCheckIcon className="w-5 h-5 text-gray-500" />
                              </div>
                              <select
                                id="countries"
                                onChange={handleTypeChange}
                                value={SelectedType}
                                className="bg-gray-50  pl-[44px] border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[7px] "
                              >
                                <option>Type Appointment</option>
                                <option value={"urgent"}>Urgent</option>
                                <option value={"nouveau patient"}>
                                  Nouveau Patient
                                </option>
                                <option value={"suivi"}>Suivi</option>
                                <option value={"diagnostic"}>Diagnostic</option>
                                <option value={"consultation"}>
                                  Consultation
                                </option>
                              </select>
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
  } else {
    return (
      <>
        <div className=" absolute w-[100%] h-[100vh]  img_bg">
          <div className=" relative bg-black  bg-opacity-75 ">
            <Header />
            <main className="h-[80.65vh] flex justify-center items-center ">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
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
  }
};

export default BookingAppointment;
