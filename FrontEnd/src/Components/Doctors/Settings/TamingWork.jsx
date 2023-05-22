import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GetAuthDoctor from "../../../hooks/GetAuthDoctor";
import axiosClient from "../../../AxiosClient";

const TamingWork = () => {
  const doctorData = useSelector((state) => state.AuthDoctor);

  const [DataForm, setDataForm] = useState({
    id: "",
    day_debut_work: "",
    day_debut_work: "",
    time_debut_work: "",
    time_fin_work: "",
    appointment_time: "",
  });

  GetAuthDoctor();

  useEffect(() => {
    if (doctorData.doctor !== null) {
      setDataForm({
        id: doctorData.doctor.id || "",
        day_debut_work: doctorData.doctor.day_debut_work || "",
        day_fin_work: doctorData.doctor.day_fin_work || "",
        time_debut_work: doctorData.doctor.time_debut_work || "",
        time_fin_work: doctorData.doctor.time_fin_work || "",
        appointment_time: doctorData.doctor.appointment_time || "",
      });
    }
  }, [doctorData]);

  const HandelChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...DataForm, [name]: value });
  };

  const HandelSubmit = (e) => {
    e.preventDefault();

    axiosClient
      .post("/doctor/update/info/time", DataForm)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(DataForm);
  };

  return (
    <>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold dark:text-white">
          Setting Appointment
        </h3>

        <form onSubmit={HandelSubmit}>
          <div className="grid mt-3 grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="day_debut_work"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Day Debu De work
              </label>
              <select
                id="day_debut_work"
                name="day_debut_work"
                onChange={HandelChange}
                value={DataForm.day_debut_work}
                className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option>Select Day Debu De work</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="day_fin_work"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Day fin De work
              </label>
              <select
                id="day_fin_work"
                name="day_fin_work"
                value={DataForm.day_fin_work}
                onChange={HandelChange}
                className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option>Select Day fin De work</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </div>
          </div>

          <div className="grid mt-3 grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="time_debut_work"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Time Debut Work (Like 00:00)
              </label>
              <input
                type="text"
                name="time_debut_work"
                value={DataForm.time_debut_work}
                onChange={HandelChange}
                id="time_debut_work"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="00:00"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="time_fin_work"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Time Debut Work (Like 00:00)
              </label>
              <input
                type="text"
                name="time_fin_work"
                id="time_fin_work"
                value={DataForm.time_fin_work}
                onChange={HandelChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="00:00"
                required
              />
            </div>
          </div>
          <div className="grid mt-3 grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="appointment_time"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                appointment time (In Minutes)
              </label>
              <input
                type="text"
                name="appointment_time"
                value={DataForm.appointment_time}
                onChange={HandelChange}
                id="appointment_time"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="00"
                required
              />
            </div>
          </div>
          <div className="mt-3">
            <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              Save all
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TamingWork;
